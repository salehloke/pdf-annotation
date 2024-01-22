import { PDFDocument, StandardFonts, degrees } from "pdf-lib";

export async function rotatePage(signaturePage,rotationAngle, pdfDoc ){

  signaturePage.setRotation(degrees(rotationAngle));

   return signaturePage
}
