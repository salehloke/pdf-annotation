export const GLOBAL_CONFIG = {
  MUSLIM_NOMINATION_WITH_DATA: {
    decription: "formtype1",
    pdfPath: "./shared/pdf-samples/non_muslim_nomination_form_with_data.pdf"
  },
  NON_MUSLIM_NOMINATION_WITH_DATA: {
    decription: "formtype2",
    pdfPath: "./shared/pdf-samples/non_muslim_nomination_form_with_data.pdf"
  },
  UNSIGNED_MANUAL_SCANNED_PORTRAIT_NO_DATA: {
    decription: "formtype3",
    pdfPath: "./shared/pdf-samples/unsigned_manual.pdf"
  },
  UNSIGNED_DIGITAL_FORM_PORTRAIT_NO_DATA: {
    decription: "formtype4",
    pdfPath: "./shared/pdf-samples/unsigned-nomination-form.pdf"
  },
  UNSIGNED_DIGITAL_FORM_PORTRAIT_NO_DATA_AUTOFILL: {
    decription: "formtype5",
    pdfPath: "./shared/pdf-samples/unsigned-nomination-form_2.pdf"
  },

  category: [
    {        name: 'category1', isMuslim: false, isDigital: true    },
    {        name: 'category2', isMuslim: true, isDigital: true    },
    {        name: 'category3', isMuslim: false, isDigital: false    },
    {        name: 'category4', isMuslim: true, isDigital: false    }
  ],

  scenario:[
    { signatureOfTrustee1: false, signatureOfTrustee2: false, signatureOfWitness: false, signatureOfPolicyHolder: false, isBLPassed: false, isApproved: false, pageRotation: 0 }, 
    { signatureOfTrustee1: true, signatureOfTrustee2: false, signatureOfWitness: false, signatureOfPolicyHolder: false, isBLPassed: false, isApproved: false, pageRotation: 0 },
    { signatureOfTrustee1: false, signatureOfTrustee2: true, signatureOfWitness: false, signatureOfPolicyHolder: false, isBLPassed: false, isApproved: false, pageRotation: 0 },
    { signatureOfTrustee1: true, signatureOfTrustee2: true, signatureOfWitness: false, signatureOfPolicyHolder: false, isBLPassed: false, isApproved: false, pageRotation: 0 },
    { signatureOfTrustee1: false, signatureOfTrustee2: false, signatureOfWitness: true, signatureOfPolicyHolder: false, isBLPassed: false, isApproved: false, pageRotation: 0 },
    { signatureOfTrustee1: true, signatureOfTrustee2: false, signatureOfWitness: true, signatureOfPolicyHolder: false, isBLPassed: false, isApproved: false, pageRotation: 0 },
    { signatureOfTrustee1: false, signatureOfTrustee2: true, signatureOfWitness: true, signatureOfPolicyHolder: false, isBLPassed: false, isApproved: false, pageRotation: 0 },
    { signatureOfTrustee1: true, signatureOfTrustee2: true, signatureOfWitness: true, signatureOfPolicyHolder: false, isBLPassed: false, isApproved: false, pageRotation: 0 },
    { signatureOfTrustee1: false, signatureOfTrustee2: false, signatureOfWitness: false, signatureOfPolicyHolder: true, isBLPassed: false, isApproved: false, pageRotation: 0 },
    { signatureOfTrustee1: true, signatureOfTrustee2: false, signatureOfWitness: false, signatureOfPolicyHolder: true, isBLPassed: false, isApproved: false, pageRotation: 0 },
    { signatureOfTrustee1: false, signatureOfTrustee2: true, signatureOfWitness: false, signatureOfPolicyHolder: true, isBLPassed: false, isApproved: false, pageRotation: 0 },
    { signatureOfTrustee1: true, signatureOfTrustee2: true, signatureOfWitness: false, signatureOfPolicyHolder: true, isBLPassed: false, isApproved: false, pageRotation: 0 },
    { signatureOfTrustee1: false, signatureOfTrustee2: false, signatureOfWitness: true, signatureOfPolicyHolder: true, isBLPassed: false, isApproved: false, pageRotation: 0 },
    { signatureOfTrustee1: true, signatureOfTrustee2: false, signatureOfWitness: true, signatureOfPolicyHolder: true, isBLPassed: false, isApproved: false, pageRotation: 0 },
    { signatureOfTrustee1: false, signatureOfTrustee2: true, signatureOfWitness: true, signatureOfPolicyHolder: true, isBLPassed: false, isApproved: false, pageRotation: 0 }, // 15
    { signatureOfTrustee1: true, signatureOfTrustee2: true, signatureOfWitness: true, signatureOfPolicyHolder: true, isBLPassed: false, isApproved: false, pageRotation: 0 },
    { signatureOfTrustee1: false, signatureOfTrustee2: false, signatureOfWitness: false, signatureOfPolicyHolder: false, isBLPassed: true, isApproved: false, pageRotation: 0 },
    { signatureOfTrustee1: true, signatureOfTrustee2: false, signatureOfWitness: false, signatureOfPolicyHolder: false, isBLPassed: true, isApproved: false, pageRotation: 0 },
    { signatureOfTrustee1: false, signatureOfTrustee2: true, signatureOfWitness: false, signatureOfPolicyHolder: false, isBLPassed: true, isApproved: false, pageRotation: 0 },
    { signatureOfTrustee1: true, signatureOfTrustee2: true, signatureOfWitness: false, signatureOfPolicyHolder: false, isBLPassed: true, isApproved: false, pageRotation: 0 }, // 20
    { signatureOfTrustee1: false, signatureOfTrustee2: false, signatureOfWitness: true, signatureOfPolicyHolder: false, isBLPassed: true, isApproved: false, pageRotation: 0 },
    { signatureOfTrustee1: true, signatureOfTrustee2: false, signatureOfWitness: true, signatureOfPolicyHolder: false, isBLPassed: true, isApproved: false, pageRotation: 0 },
    { signatureOfTrustee1: false, signatureOfTrustee2: true, signatureOfWitness: true, signatureOfPolicyHolder: false, isBLPassed: true, isApproved: false, pageRotation: 0 },
    { signatureOfTrustee1: true, signatureOfTrustee2: true, signatureOfWitness: true, signatureOfPolicyHolder: false, isBLPassed: true, isApproved: false, pageRotation: 0 },
    { signatureOfTrustee1: false, signatureOfTrustee2: false, signatureOfWitness: false, signatureOfPolicyHolder: true, isBLPassed: true, isApproved: false, pageRotation: 0 }, // 25
    { signatureOfTrustee1: true, signatureOfTrustee2: false, signatureOfWitness: false, signatureOfPolicyHolder: true, isBLPassed: true, isApproved: false, pageRotation: 0 },
    { signatureOfTrustee1: false, signatureOfTrustee2: true, signatureOfWitness: false, signatureOfPolicyHolder: true, isBLPassed: true, isApproved: false, pageRotation: 0 },
    { signatureOfTrustee1: true, signatureOfTrustee2: true, signatureOfWitness: false, signatureOfPolicyHolder: true, isBLPassed: true, isApproved: false, pageRotation: 0 },
    { signatureOfTrustee1: false, signatureOfTrustee2: false, signatureOfWitness: true, signatureOfPolicyHolder: true, isBLPassed: true, isApproved: false, pageRotation: 0 },
    { signatureOfTrustee1: true, signatureOfTrustee2: false, signatureOfWitness: true, signatureOfPolicyHolder: true, isBLPassed: true, isApproved: false, pageRotation: 0 }, // 30
    { signatureOfTrustee1: false, signatureOfTrustee2: true, signatureOfWitness: true, signatureOfPolicyHolder: true, isBLPassed: true, isApproved: false, pageRotation: 0 },
    { signatureOfTrustee1: true, signatureOfTrustee2: true, signatureOfWitness: true, signatureOfPolicyHolder: true, isBLPassed: true, isApproved: true, pageRotation: 0 }, // 
    { signatureOfTrustee1: true, signatureOfTrustee2: true, signatureOfWitness: true, signatureOfPolicyHolder: true, isBLPassed: true, isApproved: true, pageRotation: 90 }, // 
    { signatureOfTrustee1: true, signatureOfTrustee2: true, signatureOfWitness: true, signatureOfPolicyHolder: true, isBLPassed: true, isApproved: true, pageRotation: 180 }, // 
    { signatureOfTrustee1: true, signatureOfTrustee2: true, signatureOfWitness: true, signatureOfPolicyHolder: true, isBLPassed: true, isApproved: true, pageRotation: 270 } // 
  ],
  

  SIGNATURE_IMAGES_ARR: [
    {
      imagePath: "./shared/signature-png/person1_type5.png"
    },
    {
      imagePath: "./shared/signature-png/person2.png"
    },
    {
      imagePath: "./shared/signature-png/person3.png"
    },
    {
      imagePath: "./shared/signature-png/person4.png"
    },
    {
      imagePath: "./shared/signature-png/person5.png"
    },
    {
      imagePath: "./shared/signature-png/person6.png"
    },
    {
      imagePath: "./shared/signature-png/person7.png"
    },
    {
      imagePath: "./shared/signature-png/person8.png"
    },
    {
      imagePath: "./shared/signature-png/person9.png"
    },
    {
      imagePath: "./shared/signature-png/person10.png"
    },
    {
      imagePath: "./shared/signature-png/person11.png"
    },
    {
      imagePath: "./shared/signature-png/person12.png"
    },
    {
      imagePath: "./shared/signature-png/person13.png"
    },
    {
      imagePath: "./shared/signature-png/person14.png"
    },
    {
      imagePath: "./shared/signature-png/person15.png"
    },
    {
      imagePath: "./shared/signature-png/person16.png"
    },
    {
      imagePath: "./shared/signature-png/person17.png"
    },
    {
      imagePath: "./shared/signature-png/person18.png"
    },
    {
      imagePath: "./shared/signature-png/person19.png"
    },
    {
      imagePath: "./shared/signature-png/person20.png"
    }
  ]
};
