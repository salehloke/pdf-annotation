import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import { promises as fs } from "fs";

// reusable functions
import { rotatePage } from "./shared/annotate-utils/rotate-page.js";
import { signTrustee1 } from "./shared/signature-utils/sign-trustee1.js";
import { signTrustee2 } from "./shared/signature-utils/sign-trustee2.js";
import { signPolicyHolder } from "./shared/signature-utils/sign-policyholder.js";
import { signWitness } from "./shared/signature-utils/sign-witness.js";
import { GLOBAL_CONFIG } from "./signature-config.js";
import { logFormData } from "./shared/logger/sample-data-logger.js";


// CATEGORY 3
// import { dynamicTestCaseGenerator } from "./dynamic-generator.js";
import { dynamicTestCaseGenerator } from "./dynamic-generator.js";

const formType1 = GLOBAL_CONFIG.NON_MUSLIM_NOMINATION_WITH_DATA;
const formType2 = GLOBAL_CONFIG.MUSLIM_NOMINATION_WITH_DATA;
const formType3 = GLOBAL_CONFIG.UNSIGNED_MANUAL_SCANNED_PORTRAIT_NO_DATA; // empty form
const formType4 = GLOBAL_CONFIG.UNSIGNED_DIGITAL_FORM_PORTRAIT_NO_DATA;
const formType5 = GLOBAL_CONFIG.UNSIGNED_DIGITAL_FORM_PORTRAIT_NO_DATA_AUTOFILL;
// const formType5 = GLOBAL_CONFIG.UNSIGNED_MANUAL_SCANNED_PORTRAIT_NO_DATA;


// annotateForm(formType5.pdfPath, formType5.decription, 20)
// NON-MUSLIM + MANUAL SCANNED
// category3_scenario35(formType3.pdfPath, formType3.decription, 20);

// 
// 
/**
 * NON-MUSLIM + DIGITAL FORM: APPROVED CASES
 * Category 1 + scenario 38
 */
dynamicTestCaseGenerator(1, 38, 1);


// await logFormData()

