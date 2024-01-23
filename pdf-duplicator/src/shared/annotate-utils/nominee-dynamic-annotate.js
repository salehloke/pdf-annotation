import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import { promises as fs } from "fs";


// Folder functions
// import { GLOBAL_CONFIG } from "../../signature-config";


export async function anotateNomineeDynamic(numberOfNominee,form,formData) {
  try {
    // console.log(`nominee${numberOfNominee}`)
    // console.log(`nominee${numberOfNominee}_annotated`, formData[`nominee${numberOfNominee}_name`])
    // page2
    /** NOMINEE 1 */
    const nominee_name = form.getTextField(`nominee${numberOfNominee}_name`)
    const nominee_gender = form.getTextField(`nominee${numberOfNominee}_gender`)
    const nominee_IDDesc = form.getTextField(`nominee${numberOfNominee}_IDDesc`)
    const nominee_IDNumber = form.getTextField(`nominee${numberOfNominee}_IDNumber`)
    const nominee_newIcNo = form.getTextField(`nominee${numberOfNominee}_newIcNo`)
    const nominee_dateOfBirth = form.getTextField(`nominee${numberOfNominee}_dateOfBirth`)
    const nominee_nationality = form.getTextField(`nominee${numberOfNominee}_nationality`)
    const nominee_occupation = form.getTextField(`nominee${numberOfNominee}_occupation`)
    const nominee_nameOfEmployer = form.getTextField(`nominee${numberOfNominee}_nameOfEmployer`)
    const nominee_natureOfBusiness = form.getTextField(`nominee${numberOfNominee}_natureOfBusiness`)
    const nominee_relationshipToPolicyOwner = form.getTextField(`nominee${numberOfNominee}_relationshipToPolicyOwner`)
    const nominee_banksName = form.getTextField(`nominee${numberOfNominee}_banksName`)
    const nominee_share = form.getTextField(`nominee${numberOfNominee}_share`)
    const nominee_savingsAccountNumber = form.getTextField(`nominee${numberOfNominee}_savingsAccountNumber`)
    const nominee_mailingAddress = form.getTextField(`nominee${numberOfNominee}_mailingAddress`)
    const nominee_residentialAddress = form.getTextField(`nominee${numberOfNominee}_residentialAddress`)
    const nominee_contactNumberHome = form.getTextField(`nominee${numberOfNominee}_contactNumberHome`)
    const nominee_contactNumberOffice = form.getTextField(`nominee${numberOfNominee}_contactNumberOffice`)
    const nominee_contactNumberMobile = form.getTextField(`nominee${numberOfNominee}_contactNumberMobile`)
    const nominee_purposeOfNomination = form.getTextField(`nominee${numberOfNominee}_purposeOfNomination`)
    nominee_name.enableMultiline()
    nominee_mailingAddress.enableMultiline()
    nominee_residentialAddress.enableMultiline()
    nominee_purposeOfNomination.enableMultiline()

    // ----------------


    nominee_name.setText(formData[`nominee${numberOfNominee}_name`])
    nominee_gender.setText(formData[`nominee${numberOfNominee}_gender`])
    nominee_IDDesc.setText(formData[`nominee${numberOfNominee}_IDDesc`])
    nominee_IDNumber.setText(formData[`nominee${numberOfNominee}_IDNumber`])
    nominee_newIcNo.setText(formData[`nominee${numberOfNominee}_newIcNo`])
    nominee_dateOfBirth.setText(formData[`nominee${numberOfNominee}_dateOfBirth`])
    nominee_nationality.setText(formData[`nominee${numberOfNominee}_nationality`])
    nominee_occupation.setText(formData[`nominee${numberOfNominee}_occupation`])
    nominee_nameOfEmployer.setText(formData[`nominee${numberOfNominee}_nameOfEmployer`])
    nominee_natureOfBusiness.setText(formData[`nominee${numberOfNominee}_natureOfBusiness`])
    nominee_relationshipToPolicyOwner.setText(formData[`nominee${numberOfNominee}_relationshipToPolicyOwner`])
    nominee_banksName.setText(formData[`nominee${numberOfNominee}_banksName`])
    nominee_mailingAddress.setText(formData[`nominee${numberOfNominee}_mailingAddress`])
    nominee_residentialAddress.setText(formData[`nominee${numberOfNominee}_residentialAddress`])
    nominee_contactNumberHome.setText(formData[`nominee${numberOfNominee}_contactNumberHome`])
    nominee_contactNumberOffice.setText(formData[`nominee${numberOfNominee}_contactNumberOffice`])
    nominee_contactNumberMobile.setText(formData[`nominee${numberOfNominee}_contactNumberMobile`])
    nominee_purposeOfNomination.setText(formData[`nominee${numberOfNominee}_purposeOfNomination`])
    nominee_savingsAccountNumber.setText(formData[`nominee${numberOfNominee}_savingsAccountNumber`])
    nominee_share.setText(formData[`nominee${numberOfNominee}_share`])
  } catch (error) {
  }
}

