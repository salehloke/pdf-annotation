import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import { promises as fs } from 'fs';

// reusable functions
import { rotatePage } from "./rotate-page.js";
import { signTrustee1 } from "./sign-trustee1.js";
import { signTrustee2 } from "./sign-trustee2.js";
import { signPolicyHolder } from "./sign-policyholder.js";
import { signWitness } from "./sign-witness.js";

import {category1_scenario6} from "./category1-scenario6.js"
import {category1_scenario7} from "./category1-scenario7.js"
import { GLOBAL_CONFIG } from "./signature-config.js";




const formType1 = GLOBAL_CONFIG.NON_MUSLIM_NOMINATION_WITH_DATA
const formType2 = GLOBAL_CONFIG.MUSLIM_NOMINATION_WITH_DATA
const formType3 = GLOBAL_CONFIG.UNSIGNED_DIGITAL_FORM_PORTRAIT_NO_DATA // empty form
const formType4 = GLOBAL_CONFIG.UNSIGNED_MANUAL_SCANNED_PORTRAIT_NO_DATA

console.log('start')

// NON-MUSLIM + DIGITAL FORM + WITH DATA
category1_scenario6(formType1.pdfPath, formType1.decription, 10);
category1_scenario7(formType1.pdfPath, formType1.decription, 10);
