

import { promises as fsPromises } from 'fs';
import archiver from 'archiver';

export async function compressFolder(folderPath, outputPath) {
  try {
    
    const archive = archiver('zip', { zlib: { level: 9 } });

    // Create a write stream for the output file
    // const output = await fsPromises.open(outputPath, 'w');
    const output = await fsPromises.writeFile(outputPath, 'w');

    // Pipe the archive data to the output file
    await archive.pipe(output);

    // Add the entire folder to the archive
    await archive.directory(folderPath, false);

    output.on('close', function() {
      console.log(archive.pointer() + ' total bytes');
      console.log('archiver has been finalized and the output file descriptor has closed.');
    });

    // Finalize the archive and close the write stream
    await archive.finalize();
    console.log(`Folder "${folderPath}" compressed successfully to "${outputPath}".`);
  } catch (error) {
    console.error(`Error compressing folder "${folderPath}":`, error);
  }
}

// // Usage
// const folderPath = 'path/to/your/folder'; // Replace with the path to your folder
// const outputPath = 'path/to/output/archive.zip'; // Replace with the desired output path

// compressFolder(folderPath, outputPath);
