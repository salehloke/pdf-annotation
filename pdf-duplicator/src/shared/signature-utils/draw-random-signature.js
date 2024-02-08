import { promises as fs } from "fs";
import { randomSvgPath } from "./draw-sign-path.js";
import { faker } from '@faker-js/faker';

export async function drawRandomSignature(
  signaturePage,
  coordinateX, 
  coordinateY,
  scale
) {

  const x = isNaN(coordinateX) ? 370 : coordinateX
  const y = isNaN(coordinateY) ? 620 : coordinateY  
  const scaleXY = isNaN(scale) ? 0.35 : scale
  const xRandomizer = 0
  // const xRandomizer = faker.number.int({max:30, min: -30})
  const yRandomizer = faker.number.int({max:10, min:0})
  // Add a signature image

  if(signaturePage){

    // draw 1 stroke
    signaturePage.moveTo(x + xRandomizer,y + yRandomizer)
    signaturePage.drawSvgPath(await randomSvgPath(), {scale: scaleXY, borderWidth:3})
    
    // draw 2nd stroke
    signaturePage.moveTo(x + xRandomizer,y + yRandomizer)
    signaturePage.drawSvgPath(await randomSvgPath(), {scale: scaleXY, borderWidth:2})
  }
  
  // draw 3rd stroke
  // signaturePage.moveTo(105,535)
  // signaturePage.drawSvgPath(await randomSvgPath(), {scale: 0.45, borderWidth:3})
  return signaturePage;
}

