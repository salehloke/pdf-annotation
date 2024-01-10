import { promises as fs } from "fs";

export async function signWitness(signaturePage, signatureImagePath, pdfDoc) {
  const coordinatesSign = {
    x: 166,
    y: 725,
    xRatio: 0.480178876,
    yRatio: 0.23375
  };

  // Add a signature image
  const { width, height } = signaturePage.getSize();
  const signatureImageBytes = await fs.readFile(signatureImagePath);
  const signatureImage = await pdfDoc.embedPng(signatureImageBytes);
  const imageWidth = 60; // Adjust the width of the signature image as needed
  const imageHeight =
    (imageWidth / signatureImage.width) * signatureImage.height;

  signaturePage.drawImage(signatureImage, {
    x: coordinatesSign.xRatio * coordinatesSign.x,
    y: height - coordinatesSign.xRatio * coordinatesSign.y,
    width: imageWidth,
    height: imageHeight
  });

  return signaturePage;
}
