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
    { isBLPassed: false, signatureOfTrustee1: false, signatureOfTrustee2: false, signatureOfWitness: false, signatureOfPolicyHolder: false,  pageRotation: 0 }, 
    { isBLPassed: false, signatureOfTrustee1: false, signatureOfTrustee2: false, signatureOfWitness: false, signatureOfPolicyHolder: true,  pageRotation: 0 },
    { isBLPassed: false, signatureOfTrustee1: false, signatureOfTrustee2: false, signatureOfWitness: true, signatureOfPolicyHolder: false,  pageRotation: 0 },
    { isBLPassed: false, signatureOfTrustee1: false, signatureOfTrustee2: false, signatureOfWitness: true, signatureOfPolicyHolder: true,  pageRotation: 0 },
    { isBLPassed: false, signatureOfTrustee1: false, signatureOfTrustee2: true, signatureOfWitness: false, signatureOfPolicyHolder: false,  pageRotation: 0 }, // 5
    { isBLPassed: false, signatureOfTrustee1: false, signatureOfTrustee2: true, signatureOfWitness: false, signatureOfPolicyHolder: true,  pageRotation: 0 },
    { isBLPassed: false, signatureOfTrustee1: false, signatureOfTrustee2: true, signatureOfWitness: true, signatureOfPolicyHolder: false,  pageRotation: 0 },
    { isBLPassed: false, signatureOfTrustee1: false, signatureOfTrustee2: true, signatureOfWitness: true, signatureOfPolicyHolder: true,  pageRotation: 0 },
    { isBLPassed: false, signatureOfTrustee1: true, signatureOfTrustee2: false, signatureOfWitness: false, signatureOfPolicyHolder: false,  pageRotation: 0 },
    { isBLPassed: false, signatureOfTrustee1: true, signatureOfTrustee2: false, signatureOfWitness: false, signatureOfPolicyHolder: true,  pageRotation: 0 }, // 10
    { isBLPassed: false, signatureOfTrustee1: true, signatureOfTrustee2: false, signatureOfWitness: true, signatureOfPolicyHolder: false,  pageRotation: 0 },
    { isBLPassed: false, signatureOfTrustee1: true, signatureOfTrustee2: false, signatureOfWitness: true, signatureOfPolicyHolder: true,  pageRotation: 0 },
    { isBLPassed: false, signatureOfTrustee1: true, signatureOfTrustee2: true, signatureOfWitness: false, signatureOfPolicyHolder: false,  pageRotation: 0 },
    { isBLPassed: false, signatureOfTrustee1: true, signatureOfTrustee2: true, signatureOfWitness: false, signatureOfPolicyHolder: true,  pageRotation: 0 },
    { isBLPassed: false, signatureOfTrustee1: true, signatureOfTrustee2: true, signatureOfWitness: true, signatureOfPolicyHolder: false,  pageRotation: 0 }, // 15
    { isBLPassed: false, signatureOfTrustee1: true, signatureOfTrustee2: true, signatureOfWitness: true, signatureOfPolicyHolder: true,  pageRotation: 0 }, // 16
    { isBLPassed: false, signatureOfTrustee1: true, signatureOfTrustee2: true, signatureOfWitness: true, signatureOfPolicyHolder: true,  pageRotation: 90 }, // 17
    { isBLPassed: false, signatureOfTrustee1: true, signatureOfTrustee2: true, signatureOfWitness: true, signatureOfPolicyHolder: true,  pageRotation: 180 }, // 18
    { isBLPassed: false, signatureOfTrustee1: true, signatureOfTrustee2: true, signatureOfWitness: true, signatureOfPolicyHolder: true,  pageRotation: 270 }, // 19
    { isBLPassed: false, signatureOfTrustee1: false, signatureOfTrustee2: false, signatureOfWitness: false, signatureOfPolicyHolder: false,  pageRotation: 0 }, 
    { isBLPassed: false, signatureOfTrustee1: false, signatureOfTrustee2: false, signatureOfWitness: false, signatureOfPolicyHolder: true,  pageRotation: 0 },
    { isBLPassed: false, signatureOfTrustee1: false, signatureOfTrustee2: false, signatureOfWitness: true, signatureOfPolicyHolder: false,  pageRotation: 0 },
    { isBLPassed: true, signatureOfTrustee1: false, signatureOfTrustee2: false, signatureOfWitness: true, signatureOfPolicyHolder: true,  pageRotation: 0 }, // 23
    { isBLPassed: true, signatureOfTrustee1: false, signatureOfTrustee2: false, signatureOfWitness: true, signatureOfPolicyHolder: true,  pageRotation: 90 }, // 24
    { isBLPassed: true, signatureOfTrustee1: false, signatureOfTrustee2: false, signatureOfWitness: true, signatureOfPolicyHolder: true,  pageRotation: 180 }, // 25
    { isBLPassed: true, signatureOfTrustee1: false, signatureOfTrustee2: false, signatureOfWitness: true, signatureOfPolicyHolder: true,  pageRotation: 270 }, // 26
    { isBLPassed: true, signatureOfTrustee1: false, signatureOfTrustee2: true, signatureOfWitness: false, signatureOfPolicyHolder: false,  pageRotation: 0 },
    { isBLPassed: true, signatureOfTrustee1: false, signatureOfTrustee2: true, signatureOfWitness: false, signatureOfPolicyHolder: true,  pageRotation: 0 },
    { isBLPassed: true, signatureOfTrustee1: false, signatureOfTrustee2: true, signatureOfWitness: true, signatureOfPolicyHolder: false,  pageRotation: 0 },
    { isBLPassed: true, signatureOfTrustee1: false, signatureOfTrustee2: true, signatureOfWitness: true, signatureOfPolicyHolder: true,  pageRotation: 0 }, // 30
    { isBLPassed: true, signatureOfTrustee1: true, signatureOfTrustee2: false, signatureOfWitness: false, signatureOfPolicyHolder: false,  pageRotation: 0 }, 
    { isBLPassed: true, signatureOfTrustee1: true, signatureOfTrustee2: false, signatureOfWitness: false, signatureOfPolicyHolder: true,  pageRotation: 0 },
    { isBLPassed: true, signatureOfTrustee1: true, signatureOfTrustee2: false, signatureOfWitness: true, signatureOfPolicyHolder: false,  pageRotation: 0 },
    { isBLPassed: true, signatureOfTrustee1: true, signatureOfTrustee2: false, signatureOfWitness: true, signatureOfPolicyHolder: true,  pageRotation: 0 },
    { isBLPassed: true, signatureOfTrustee1: true, signatureOfTrustee2: true, signatureOfWitness: false, signatureOfPolicyHolder: false,  pageRotation: 0 }, // 35
    { isBLPassed: true, signatureOfTrustee1: true, signatureOfTrustee2: true, signatureOfWitness: false, signatureOfPolicyHolder: true,  pageRotation: 0 }, 
    { isBLPassed: true, signatureOfTrustee1: true, signatureOfTrustee2: true, signatureOfWitness: true, signatureOfPolicyHolder: false,  pageRotation: 0 },
    { isBLPassed: true, signatureOfTrustee1: true, signatureOfTrustee2: true, signatureOfWitness: true, signatureOfPolicyHolder: true, pageRotation: 0 }, 
    { isBLPassed: true, signatureOfTrustee1: true, signatureOfTrustee2: true, signatureOfWitness: true, signatureOfPolicyHolder: true, pageRotation: 90 }, 
    { isBLPassed: true, signatureOfTrustee1: true, signatureOfTrustee2: true, signatureOfWitness: true, signatureOfPolicyHolder: true, pageRotation: 180 },  // 40
    { isBLPassed: true, signatureOfTrustee1: true, signatureOfTrustee2: true, signatureOfWitness: true, signatureOfPolicyHolder: true, pageRotation: 270 } 
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


export const dummyFormData = {
  pages: [
    {
      // page 1
      policyNo: '11-631662-483157-5',
      policyOwner: 'Mrs. Gail Mayert Renee Maggio',
      policyOwnerICNo: '980314-92-2232',
      isNoChild: undefined,
      isSingle: true,
    },
    {
      // page 2
      nominee1_name: 'Ismael Yost Martin Harber',
      nominee1_gender: 'male',
      nominee1_IDDesc: 'IC',
      nominee1_IDNumber: '960918-34-2007',
      nominee1_newIcNo: '960918-34-2007',
      nominee1_dateOfBirth: '18/09/1960',
      nominee1_nationality: 'Malaysia',
      nominee1_occupation: 'Regional Infrastructure Producer',
      nominee1_nameOfEmployer: 'Lueilwitz and Sons',
      nominee1_natureOfBusiness: 'technology',
      nominee1_relationshipToPolicyOwner: 'Family',
      nominee1_banksName: 'Maybank',
      nominee1_share: '20%',
      nominee1_mailingAddress: '577 N Locust Street Suite 369, /n North Dakota, /n 77491',
      
      nominee2_name: 'Carlos Dietrich Levi Hettinger',
      nominee2_gender: 'male',
      nominee2_IDDesc: 'IC',
      nominee2_IDNumber: '981018-17-4998',
      nominee2_newIcNo: '981018-17-4998',
      nominee2_dateOfBirth: '18/10/1983',
      nominee2_nationality: 'Malaysia',
      nominee2_occupation: 'Future Integration Associate',
      nominee2_nameOfEmployer: "O'Hara Inc",
      nominee2_natureOfBusiness: 'technology',
      nominee2_relationshipToPolicyOwner: 'Family',
      nominee2_banksName: 'Maybank',
      nominee2_share: '20%',
      nominee2_mailingAddress: '8489 The Mount Apt. 962, /n Mississippi, /n 23903',
      
      nominee3_name: 'Betty Volkman Gladys Roberts V',
      nominee3_gender: 'female',
      nominee3_IDDesc: 'IC',
      nominee3_IDNumber: '960908-25-3381',
      nominee3_newIcNo: '960908-25-3381',
      nominee3_dateOfBirth: '8/09/1961',
      nominee3_nationality: 'Malaysia',
      nominee3_occupation: 'Dynamic Response Producer',
      nominee3_nameOfEmployer: 'Wyman, Crona and Hauck',
      nominee3_natureOfBusiness: 'technology',
      nominee3_relationshipToPolicyOwner: 'Family',
      nominee3_banksName: 'Maybank',
      nominee3_share: '20%',
      nominee3_mailingAddress: '6536 Belle Club Suite 911, /n California, /n 54436',
    },
    
    {
      // page 3
      nominee1_residentialAddress: '577 N Locust Street Suite 369, /n North Dakota, /n 77491',
      nominee1_contactNumberHome: '(721) 736-6467 x414',
      nominee1_contactNumberOffice: '691.289.2761',
      nominee1_contactNumberMobile: '680.831.9187 x57887',
      nominee1_purposeOfNomination: 'N/A',

      nominee2_residentialAddress: '8489 The Mount Apt. 962, /n Mississippi, /n 23903',
      nominee2_contactNumberHome: '(694) 651-4227',
      nominee2_contactNumberOffice: '455-547-7245 x67476',
      nominee2_contactNumberMobile: '964.808.2875',
      nominee2_purposeOfNomination: 'N/A',
      
      nominee3_residentialAddress: '6536 Belle Club Suite 911, /n California, /n 54436',
      nominee3_contactNumberHome: '(910) 526-1695 x8547',
      nominee3_contactNumberOffice: '(428) 827-0774 x890',
      nominee3_contactNumberMobile: '919-846-5975 x054',
      nominee3_purposeOfNomination: 'N/A',

      trustee1_name: 'Ismael Yost Martin Harber',
      trustee1_gender: 'male',
      trustee1_IDDesc: 'IC',
      trustee1_IDNumber: '960918-34-2007',
      
      trustee2_name: 'Ismael Yost Martin Harber',
      trustee2_gender: 'male',
      trustee2_IDDesc: 'IC',
      trustee2_IDNumber: '960918-34-2007',
    },
    {
      // page 4
      trustee1_newIcNo: '960918-34-2007',
      trustee1_newIcNo: '960918-34-2007',
      trustee1_dateOfBirth: '18/10/1983',
      trustee1_nationality: 'Malaysia',
      trustee1_occupation: 'Future Integration Associate',
      trustee1_nameOfEmployer: "O'Hara Inc",
      trustee1_natureOfBusiness: 'technology',
      trustee1_relationshipToPolicyOwner: 'Family',
      trustee1_banksName: 'Maybank',
      trustee1_share: '20%',
      trustee1_mailingAddress: '8489 The Mount Apt. 962, /n Mississippi, /n 23903',
      trustee1_residentialAddress: '6536 Belle Club Suite 911, /n California, /n 54436',
      trustee1_contactNumberHome: '(910) 526-1695 x8547',
      trustee1_contactNumberOffice: '(428) 827-0774 x890',
      trustee1_contactNumberMobile: '919-846-5975 x054',
      trustee1_purposeOfNomination: 'N/A',

      trustee2_newIcNo: '960918-34-2007',
      trustee2_dateOfBirth: '18/10/1983',
      trustee2_nationality: 'Malaysia',
      trustee2_occupation: 'Future Integration Associate',
      trustee2_nameOfEmployer: "O'Hara Inc",
      trustee2_natureOfBusiness: 'technology',
      trustee2_relationshipToPolicyOwner: 'Family',
      trustee2_banksName: 'Maybank',
      trustee2_share: '20%',
      trustee2_mailingAddress: '8489 The Mount Apt. 962, /n Mississippi, /n 23903',
      trustee2_residentialAddress: '6536 Belle Club Suite 911, /n California, /n 54436',
      trustee2_contactNumberHome: '(910) 526-1695 x8547',
      trustee2_contactNumberOffice: '(428) 827-0774 x890',
      trustee2_contactNumberMobile: '919-846-5975 x054',
      trustee2_purposeOfNomination: 'N/A',

    },
    {
      // page 5
      trustee1_name: 'name signature',
      trustee2_name: 'trustee2 name',
      policyholder_name: 'policyholder name',
      policyholder_icNo: '91284768234y7y',
      policyholder_address1: 'address1',
      policyholder_address2: 'address2',
      policyholder_address3: 'address3',
      policyholder_address4: 'address4',
      policyholder_telNo: '74234912346',

      witness1_name: 'witness name',
      witness1_icNo: '91234798y57234',
      witness1_address1: 'address1',
      witness1_address2: 'address2',
      witness1_address3: 'address3',
      witness1_address4: 'address4',
      witness1_telNo: '74234912346',

    }
  ],
  
};
