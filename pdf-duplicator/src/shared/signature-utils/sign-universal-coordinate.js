import { promises as fs } from "fs";

export async function signUniversalCoordinates(signaturePage, signatureImagePath, pdfDoc, x,y, ratio) {
  const coordinatesSign = {
    x: x,
    y: y,
    ratio: ratio, // compare current to 1241px x 1754px
  };

  // Add a signature image
  const { width, height } = signaturePage.getSize();
  const signatureImageBytes = await fs.readFile(signatureImagePath);
  const signatureImage = await pdfDoc.embedPng(signatureImageBytes);
  const imageWidth = 60; // Adjust the width of the signature image as needed
  const imageHeight =
    (imageWidth / signatureImage.width) * signatureImage.height;

  signaturePage.drawImage(signatureImage, {
    x: coordinatesSign.ratio * coordinatesSign.x,
    y: height - coordinatesSign.ratio * coordinatesSign.y,
    width: imageWidth,
    height: imageHeight
  });

  return signaturePage;
}
