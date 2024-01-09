import { PDFDocument, rgb } from "pdf-lib";

import { promises as fs } from 'fs';

// const { PDFDocument, rgb } = require('@pdf-lib/pdf-lib');
// const fs = require('fs').promises;


// Usage
const inputPath = '../shared/pdf-samples/unsigned-nomination-form.pdf';
const outputFolder = '../shared/output-sample-data';
const count = 5;

console.log('start')
modifyAndSavePDFs(inputPath, outputFolder, count);
console.log('End')
