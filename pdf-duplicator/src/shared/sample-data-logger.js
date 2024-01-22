import { createLogger, format, transports } from 'winston';
import { dummyFormData } from '../signature-config.js';

export async function logFormData() {
    // Log to the console
  
    // Configure Winston
    const logger = createLogger({
      level: 'info',
      format: format.simple(),
      transports: [
        new transports.Console(),
        new transports.File({ filename: `sampleData.json` })
      ]
    });
    const remapped = await remapFormData()
    const stringified = JSON.stringify(remapped)
  
    logger.info(stringified)
    
  }
  
  
  export async function remapFormData(){
    const formData = dummyFormData.pages
    let newFormData = []
  
    formData.forEach((elements,index) => {
      for (const key in elements){
        if(elements.hasOwnProperty(key)) {
          const value = elements[key]
          const newObj = {
            pageNo: index+1,
            PlaceHolderText: `${key}`,
            Value: `${value}`,
  
          }
          newFormData.push(newObj)
        }
      }
    });
    return newFormData
  }