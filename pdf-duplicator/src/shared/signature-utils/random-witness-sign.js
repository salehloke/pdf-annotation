import { promises as fs } from "fs";
import { randomSvgPath } from "./draw-sign-path.js";

export async function drawRandomSignatureWitness(
  signaturePage,
  pdfDoc
) {
  const coordinatesSign = {
    x: 710,
    y: 800,
    xRatio: 0.480178876,
    yRatio: 0.23375
  };

  // Add a signature image

  const svgPath = await randomSvgPath()

  // draw 1 stroke
  signaturePage.moveTo(115,535)
  signaturePage.drawSvgPath(await randomSvgPath(), {scale: 0.45, borderWidth:4})
  
  // draw 2nd stroke
  signaturePage.moveTo(115,535)
  signaturePage.drawSvgPath(await randomSvgPath(), {scale: 0.5, borderWidth:2})
  
  // draw 3rd stroke
  // signaturePage.moveTo(105,535)
  // signaturePage.drawSvgPath(await randomSvgPath(), {scale: 0.45, borderWidth:3})
  return signaturePage;
}

