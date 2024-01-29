import { promises as fs } from "fs";
import { randomSvgPath } from "./draw-sign-path.js";

export async function drawRandomSignaturePolicyholder(
  signaturePage,
  coordinateX, 
  coordinateY,
  scale
  ) {
 
  const x = isNaN(coordinateX) ? 370 : coordinateX    
  const y = isNaN(coordinateY)  ? 535 : coordinateY  
  const scaleXY = isNaN(scale) ? 0.45 : scale

  // Add a signature image

  const svgPath = await randomSvgPath()

  // draw 1 stroke
  signaturePage.moveTo(x,y)
  signaturePage.drawSvgPath(await randomSvgPath(), {scale: scaleXY, borderWidth:4})
  
  // draw 2nd stroke
  signaturePage.moveTo(x,y)
  signaturePage.drawSvgPath(await randomSvgPath(), {scale: scaleXY, borderWidth:2})
  
  // draw 3rd stroke
  // signaturePage.moveTo(105,535)
  // signaturePage.drawSvgPath(await randomSvgPath(), {scale: 0.45, borderWidth:3})
  return signaturePage;
}

