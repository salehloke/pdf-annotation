import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import { promises as fs } from "fs";


export async function annotateTrustee(numberOfTrustee,form,formData) {
  try {
    // console.log(`trustee${numberOfTrustee}`)
    // console.log(`trustee${numberOfTrustee}_annotated`, formData[`trustee${numberOfTrustee}_name`])
    // page2
    /** TRUSTEE 1 */
    
    const trustee1_name = form.getTextField(`trustee${numberOfTrustee}_name`)
    trustee1_name.enableMultiline()
    const trustee1_gender = form.getTextField(`trustee${numberOfTrustee}_gender`)
    const trustee1_IDDesc = form.getTextField(`trustee${numberOfTrustee}_idDescription`)
    const trustee1_IDNumber = form.getTextField(`trustee${numberOfTrustee}_idNumber`)
    const trustee1_newIcNo = form.getTextField(`trustee${numberOfTrustee}_newIcNumber`)
    const trustee1_dateOfBirth = form.getTextField(`trustee${numberOfTrustee}_dateOfBirth`)
    const trustee1_nationality = form.getTextField(`trustee${numberOfTrustee}_nationality`)
    const trustee1_occupation = form.getTextField(`trustee${numberOfTrustee}_occupation`)
    const trustee1_nameOfEmployer = form.getTextField(`trustee${numberOfTrustee}_nameOfEmployer`)
    const trustee1_natureOfBusiness = form.getTextField(`trustee${numberOfTrustee}_natureOfBusiness`)
    const trustee1_banksName = form.getTextField(`trustee${numberOfTrustee}_banksName`)
    const trustee1_savingsAccountNumber = form.getTextField(`trustee${numberOfTrustee}_savingsAccountNumber`)
    const trustee1_mailingAddress = form.getTextField(`trustee${numberOfTrustee}_mailingAddress`)
    const trustee1_residentialAddress = form.getTextField(`trustee${numberOfTrustee}_residentialAddress`)
    const trustee1_contactNumberHome = form.getTextField(`trustee${numberOfTrustee}_contactNumberHome`)
    const trustee1_contactNumberOffice = form.getTextField(`trustee${numberOfTrustee}_contactNumberOffice`)
    const trustee1_contactNumberMobile = form.getTextField(`trustee${numberOfTrustee}_contactNumberMobile`)
    const trustee1_reasonForAppointmentOfTrustee = form.getTextField(`trustee${numberOfTrustee}_reasonForAppointmentOfTrustee`)
    trustee1_name.setText(formData[`trustee${numberOfTrustee}_name`])
    trustee1_gender.setText(formData[`trustee${numberOfTrustee}_gender`])
    trustee1_IDDesc.setText(formData[`trustee${numberOfTrustee}_idDescription`])
    trustee1_IDNumber.setText(formData[`trustee${numberOfTrustee}_idNumber`])
    trustee1_newIcNo.setText(formData[`trustee${numberOfTrustee}_newIcNumber`])
    trustee1_dateOfBirth.setText(formData[`trustee${numberOfTrustee}_dateOfBirth`])
    trustee1_nationality.setText(formData[`trustee${numberOfTrustee}_nationality`])
    trustee1_occupation.setText(formData[`trustee${numberOfTrustee}_occupation`])
    trustee1_nameOfEmployer.setText(formData[`trustee${numberOfTrustee}_nameOfEmployer`])
    trustee1_natureOfBusiness.setText(formData[`trustee${numberOfTrustee}_natureOfBusiness`])
    trustee1_banksName.setText(formData[`trustee${numberOfTrustee}_banksName`])
    trustee1_savingsAccountNumber.setText(formData[`trustee${numberOfTrustee}_savingsAccountNumber`])
    trustee1_mailingAddress.setText(formData[`trustee${numberOfTrustee}_mailingAddress`])
    trustee1_residentialAddress.setText(formData[`trustee${numberOfTrustee}_residentialAddress`])
    trustee1_contactNumberHome.setText(formData[`trustee${numberOfTrustee}_contactNumberHome`])
    trustee1_contactNumberOffice.setText(formData[`trustee${numberOfTrustee}_contactNumberOffice`])
    trustee1_contactNumberMobile.setText(formData[`trustee${numberOfTrustee}_contactNumberMobile`])
    trustee1_reasonForAppointmentOfTrustee.setText(formData[`trustee${numberOfTrustee}_reasonForAppointmentOfTrustee`])
  } catch (error) {
  }
}

