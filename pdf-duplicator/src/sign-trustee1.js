import { promises as fs } from "fs";

export async function signTrustee1(signaturePage, signatureImagePath, pdfDoc) {
  const coordinatesSOT1 = {
    x: 166,
    y: 512,
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
    x: coordinatesSOT1.xRatio * coordinatesSOT1.x,
    y: height - coordinatesSOT1.xRatio * coordinatesSOT1.y,
    width: imageWidth,
    height: imageHeight
  });

  return signaturePage;
}
