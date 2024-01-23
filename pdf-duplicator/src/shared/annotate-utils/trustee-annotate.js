import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import { promises as fs } from "fs";


export async function annotateTrustee(numberOfTrustee,form,formData) {
  try {
    // console.log(`trustee${numberOfTrustee}`)
    // console.log(`trustee${numberOfTrustee}_annotated`, formData[`trustee${numberOfTrustee}_name`])
    // page2
    /** TRUSTEE  */
    
    const trustee_name = form.getTextField(`trustee${numberOfTrustee}_name`)
    const trustee_gender = form.getTextField(`trustee${numberOfTrustee}_gender`)
    const trustee_IDDesc = form.getTextField(`trustee${numberOfTrustee}_idDescription`)
    const trustee_IDNumber = form.getTextField(`trustee${numberOfTrustee}_idNumber`)
    const trustee_newIcNo = form.getTextField(`trustee${numberOfTrustee}_newIcNumber`)
    const trustee_dateOfBirth = form.getTextField(`trustee${numberOfTrustee}_dateOfBirth`)
    const trustee_nationality = form.getTextField(`trustee${numberOfTrustee}_nationality`)
    const trustee_occupation = form.getTextField(`trustee${numberOfTrustee}_occupation`)
    const trustee_nameOfEmployer = form.getTextField(`trustee${numberOfTrustee}_nameOfEmployer`)
    const trustee_natureOfBusiness = form.getTextField(`trustee${numberOfTrustee}_natureOfBusiness`)
    const trustee_banksName = form.getTextField(`trustee${numberOfTrustee}_banksName`)
    const trustee_savingsAccountNumber = form.getTextField(`trustee${numberOfTrustee}_savingsAccountNumber`)
    const trustee_mailingAddress = form.getTextField(`trustee${numberOfTrustee}_mailingAddress`)
    const trustee_residentialAddress = form.getTextField(`trustee${numberOfTrustee}_residentialAddress`)
    const trustee_contactNumberHome = form.getTextField(`trustee${numberOfTrustee}_contactNumberHome`)
    const trustee_contactNumberOffice = form.getTextField(`trustee${numberOfTrustee}_contactNumberOffice`)
    const trustee_contactNumberMobile = form.getTextField(`trustee${numberOfTrustee}_contactNumberMobile`)
    const trustee_reasonForAppointmentOfTrustee = form.getTextField(`trustee${numberOfTrustee}_reasonForAppointmentOfTrustee`)
    trustee_name.enableMultiline()
    trustee_mailingAddress.enableMultiline()
    trustee_residentialAddress.enableMultiline()
    trustee_reasonForAppointmentOfTrustee.enableMultiline()

    trustee_name.setText(formData[`trustee${numberOfTrustee}_name`])
    trustee_gender.setText(formData[`trustee${numberOfTrustee}_gender`])
    trustee_IDDesc.setText(formData[`trustee${numberOfTrustee}_idDescription`])
    trustee_IDNumber.setText(formData[`trustee${numberOfTrustee}_idNumber`])
    trustee_newIcNo.setText(formData[`trustee${numberOfTrustee}_newIcNumber`])
    trustee_dateOfBirth.setText(formData[`trustee${numberOfTrustee}_dateOfBirth`])
    trustee_nationality.setText(formData[`trustee${numberOfTrustee}_nationality`])
    trustee_occupation.setText(formData[`trustee${numberOfTrustee}_occupation`])
    trustee_nameOfEmployer.setText(formData[`trustee${numberOfTrustee}_nameOfEmployer`])
    trustee_natureOfBusiness.setText(formData[`trustee${numberOfTrustee}_natureOfBusiness`])
    trustee_banksName.setText(formData[`trustee${numberOfTrustee}_banksName`])
    trustee_savingsAccountNumber.setText(formData[`trustee${numberOfTrustee}_savingsAccountNumber`])
    trustee_mailingAddress.setText(formData[`trustee${numberOfTrustee}_mailingAddress`])
    trustee_residentialAddress.setText(formData[`trustee${numberOfTrustee}_residentialAddress`])
    trustee_contactNumberHome.setText(formData[`trustee${numberOfTrustee}_contactNumberHome`])
    trustee_contactNumberOffice.setText(formData[`trustee${numberOfTrustee}_contactNumberOffice`])
    trustee_contactNumberMobile.setText(formData[`trustee${numberOfTrustee}_contactNumberMobile`])
    trustee_reasonForAppointmentOfTrustee.setText(formData[`trustee${numberOfTrustee}_reasonForAppointmentOfTrustee`])
  } catch (error) {
  }
}

