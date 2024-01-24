import { createLogger, format, transports } from 'winston';
import { dummyFormData } from '../../signature-config.js';
import { generateFormData } from '../annotate-utils/random-generator.js';
const { combine, timestamp, label, prettyPrint } = format;

export async function logFormData() {
    // Log to the console
  
    // Configure Winston
    const logger = createLogger({
      // level: 'info',
      format: format.simple(),
      // format: format.combine(
      //   label({ label: 'Sample Data' }),
      //   timestamp(),
      //   prettyPrint()
      // ),
      transports: [
        new transports.Console(),
        new transports.File({
          filename: `sampleData.json`,
          // format: format.simple()
        }),
      ]
    });
    // const remapped = await remapFormData()
    const sampleData = await generateFormData(true)
    const remapped = await remapFormData(sampleData)
    const stringified = JSON.stringify(remapped)
  
    logger.info(stringified)
    
  }
  
  
  export async function remapFormData(jsonObject){
    const formData = dummyFormData.pages
    let newFormData = jsonObject
    for (const key in jsonObject){
      if(jsonObject.hasOwnProperty(key)) {
        const value = jsonObject[key]
        
        const keySubstring = key.toString()
        const isBoolean = keySubstring.slice(0,2) === "is" ? true: false 
        // console.log(jsonObject)
        
        if(isBoolean){
          console.log('key', key)
          if(value=== true){
            jsonObject[key] = "yes"

          } else {
            jsonObject[key] = "no"

          }
          // jsonObject[key].value = "yes"
        }else {
          // jsonObject[key].value = "no"
        }
      }
    }
  
    
    return jsonObject
  }