import { promises as fs } from 'fs';

export async function createFolderIfNotExists(folderPath) {
    try {
      await fs.mkdir(folderPath, { recursive: true });
      // console.log(`Folder "${folderPath}" created successfully (or already exists).`);
    } catch (error) {
      console.error(`Error creating folder "${folderPath}":`, error);
    }
  }
  
//   // Usage
//   const folderPath = 'path/to/your/folder'; // Replace with the desired folder path
//   createFolderIfNotExists(folderPath);