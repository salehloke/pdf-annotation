import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import { promises as fs } from "fs";

export async function signaturePageAnnotate(numberOfTrustee, form, formData) {
  try {
    // console.log(`trustee${numberOfTrustee}`)
    // console.log(`trustee${numberOfTrustee}_annotated`, formData[`trustee${numberOfTrustee}_name`])
    // page2
    /** TRUSTEE  */
    const trustee_name = form.getTextField(`trustee${numberOfTrustee}_name`);
    trustee_name.enableMultiline();
    trustee_name.setText(formData[`trustee${numberOfTrustee}_name`]);

    const witness_name = form.getTextField(`witness1_name`);
    witness_name.enableMultiline();
    witness_name.setText(formData[`witness1_name`]);
    const witness_icNo = form.getTextField(`witness1_icNo`);
    witness_icNo.setText(formData[`witness1_icNo`]);
    const witness_address1 = form.getTextField(`witness1_address1`);
    witness_address1.setText(formData[`witness1_address1`]);
    const witness_address2 = form.getTextField(`witness1_address2`);
    witness_address2.setText(formData[`witness1_address2`]);
    const witness_address3 = form.getTextField(`witness1_address3`);
    witness_address3.setText(formData[`witness1_address3`]);
    const witness_address4 = form.getTextField(`witness1_address4`);
    witness_address4.setText(formData[`witness1_address4`]);
    const witness_telNo = form.getTextField(`witness1_tellNo`);
    witness_telNo.setText(formData[`witness1_tellNo`]);

    const policyholder_name = form.getTextField(`policyholder_name`);
    policyholder_name.enableMultiline();
    policyholder_name.setText(formData[`policyholder_name`]);
    const policyholder_icNo = form.getTextField(`policyholder_icNo`);
    policyholder_icNo.setText(formData[`policyholder_icNo`]);
    const policyholder_address1 = form.getTextField(`policyholder_address1`);
    policyholder_address1.setText(formData[`policyholder_address1`]);
    const policyholder_address2 = form.getTextField(`policyholder_address2`);
    policyholder_address2.setText(formData[`policyholder_address2`]);
    const policyholder_address3 = form.getTextField(`policyholder_address3`);
    policyholder_address3.setText(formData[`policyholder_address3`]);
    const policyholder_address4 = form.getTextField(`policyholder_address4`);
    policyholder_address4.setText(formData[`policyholder_address4`]);
    const policyholder_telNo = form.getTextField(`policyholder_telNo`);
    policyholder_telNo.setText(formData[`policyholder_telNo`]);
  } catch (error) {}
}
