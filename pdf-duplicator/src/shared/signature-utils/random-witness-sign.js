import { promises as fs } from "fs";
import { randomSvgPath } from "./draw-sign-path.js";
import { faker } from '@faker-js/faker';

export async function drawRandomSignatureWitness(
  signaturePage,
  coordinateX, 
  coordinateY,
  scale
) {
  
  const x = isNaN(coordinateX) ? 115 : coordinateX    
  const y = isNaN(coordinateY)  ? 535 : coordinateY  
  const scaleXY = isNaN(scale) ? 0.45 : scale
  const xRandomizer = faker.number.int({max:50, min: -30})
  const yRandomizer = faker.number.int({max:10, min:0})
  // Add a signature image

  // draw 1 stroke
  signaturePage.moveTo(x + xRandomizer,y + yRandomizer)
  signaturePage.drawSvgPath(await randomSvgPath(), {scale: scaleXY, borderWidth:3})
  
  // draw 2nd stroke
  signaturePage.moveTo(x + xRandomizer,y + yRandomizer)
  signaturePage.drawSvgPath(await randomSvgPath(), {scale: scaleXY, borderWidth:2})
  
  // draw 3rd stroke
  // signaturePage.moveTo(105,535)
  // signaturePage.drawSvgPath(await randomSvgPath(), {scale: 0.45, borderWidth:3})
  return signaturePage;
}

