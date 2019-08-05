const data = [
  {
    "name": "Personal Documents",
    "documents": [
      {
        "id": 1,
        "mandatory": true,
        "name": "Passport Copy - Front",
        "document_order": 1,
        "__typename": "Document",
        "expiryDate": "Expiry Date 05 May 2019",
        "exists": true
      },
      {
        "id": 38,
        "mandatory": true,
        "name": "Passport Copy - Back",
        "document_order": 2,
        "__typename": "Document"
      },
      {
        "id": 2,
        "mandatory": false,
        "name": "Family Book",
        "document_order": 3,
        "__typename": "Document"
      },
      {
        "id": 3,
        "mandatory": true,
        "name": "Emirates ID - Front",
        "document_order": 4,
        "__typename": "Document",
        "expiryDate": "Expiry Date 05 May 2019",
        "exists": true
      },
      {
        "id": 40,
        "mandatory": true,
        "name": "Emirates ID - Back",
        "document_order": 5,
        "__typename": "Document"
      },
      {
        "id": 4,
        "mandatory": false,
        "name": "Guardian Passport Copy - Front",
        "document_order": 6,
        "__typename": "Document"
      },
      {
        "id": 39,
        "mandatory": false,
        "name": "Guardian Passport Copy - Back",
        "document_order": 7,
        "__typename": "Document"
      },
      {
        "id": 5,
        "mandatory": true,
        "name": "Guardian Form",
        "document_order": 8,
        "__typename": "Document"
      },
      {
        "id": 6,
        "mandatory": false,
        "name": "Security Clearance Form",
        "document_order": 9,
        "__typename": "Document"
      },
      {
        "id": 7,
        "mandatory": false,
        "name": "Security Clearance Result",
        "document_order": 10,
        "__typename": "Document"
      },
      {
        "id": 9,
        "mandatory": false,
        "name": "Passport Photo",
        "document_order": 11,
        "__typename": "Document"
      },
      {
        "id": 8,
        "mandatory": false,
        "name": "Spouse Security Clearance",
        "document_order": 12,
        "__typename": "Document"
      }
    ],
    "__typename": "Document_Type"
  },
  {
    "name": "Past Academics",
    "documents": [
      {
        "id": 10,
        "mandatory": false,
        "name": "University Transcript",
        "document_order": 1,
        "__typename": "Document"
      },
      {
        "id": 11,
        "mandatory": false,
        "name": "CV",
        "document_order": 2,
        "__typename": "Document"
      },
      {
        "id": 14,
        "mandatory": false,
        "name": "Grade 12 School Transcript",
        "document_order": 3,
        "__typename": "Document"
      },
      {
        "id": 13,
        "mandatory": false,
        "name": "Grade 11 School Transcript",
        "document_order": 4,
        "__typename": "Document"
      },
      {
        "id": 12,
        "mandatory": false,
        "name": "Grade 10 School Transcript",
        "document_order": 5,
        "__typename": "Document"
      },
      {
        "id": 15,
        "mandatory": false,
        "name": "IELTS",
        "document_order": 6,
        "__typename": "Document"
      },
      {
        "id": 16,
        "mandatory": false,
        "name": "TOEFL",
        "document_order": 7,
        "__typename": "Document"
      },
      {
        "id": 17,
        "mandatory": false,
        "name": "Other Certificates/ Training",
        "document_order": 8,
        "__typename": "Document"
      }
    ],
    "__typename": "Document_Type"
  },
  {
    "name": "Recruitment Documents",
    "documents": [
      {
        "id": 20,
        "mandatory": false,
        "name": "Interview Sheet with Result",
        "document_order": 2,
        "__typename": "Document"
      },
      {
        "id": 21,
        "mandatory": false,
        "name": "Psychometric Assessment Results",
        "document_order": 3,
        "__typename": "Document"
      },
      {
        "id": 22,
        "mandatory": false,
        "name": "Medical Result",
        "document_order": 4,
        "__typename": "Document"
      },
      {
        "id": 23,
        "mandatory": false,
        "name": "Certificate of Good Conduct",
        "document_order": 5,
        "__typename": "Document"
      },
      {
        "id": 24,
        "mandatory": false,
        "name": "Client Bank Form",
        "document_order": 6,
        "__typename": "Document"
      },
      {
        "id": 25,
        "mandatory": false,
        "name": "Bank Letter",
        "document_order": 7,
        "__typename": "Document"
      },
      {
        "id": 26,
        "mandatory": false,
        "name": "University Acceptance Letter",
        "document_order": 8,
        "__typename": "Document"
      }
    ],
    "__typename": "Document_Type"
  },
  {
    "name": "Scholarship Letters",
    "documents": [
      {
        "id": 42,
        "mandatory": false,
        "name": "AAAA",
        "document_order": null,
        "__typename": "Document"
      },
      {
        "id": 27,
        "mandatory": false,
        "name": "Financial Guarantee Letter to the University",
        "document_order": 1,
        "__typename": "Document"
      },
      {
        "id": 28,
        "mandatory": false,
        "name": "Financial Guarantee Letter to the US Embassy",
        "document_order": 2,
        "__typename": "Document"
      },
      {
        "id": 29,
        "mandatory": false,
        "name": "Medical Request Letters",
        "document_order": 3,
        "__typename": "Document"
      },
      {
        "id": 30,
        "mandatory": false,
        "name": "National Service Letters",
        "document_order": 4,
        "__typename": "Document"
      },
      {
        "id": 19,
        "mandatory": false,
        "name": "Signed Scholarship Undertaking",
        "document_order": 9,
        "__typename": "Document"
      }
    ],
    "__typename": "Document_Type"
  },
  {
    "name": "Performance Management",
    "documents": [
      {
        "id": 31,
        "mandatory": false,
        "name": "University Transcripts",
        "document_order": 1,
        "__typename": "Document"
      },
      {
        "id": 32,
        "mandatory": false,
        "name": "Warning Letters",
        "document_order": 2,
        "__typename": "Document"
      },
      {
        "id": 33,
        "mandatory": false,
        "name": "Bonus Letters",
        "document_order": 3,
        "__typename": "Document"
      },
      {
        "id": 34,
        "mandatory": false,
        "name": "Termination Related Documentation",
        "document_order": 4,
        "__typename": "Document"
      }
    ],
    "__typename": "Document_Type"
  },
  {
    "name": "Other Correspondence",
    "documents": [
      {
        "id": 35,
        "mandatory": false,
        "name": "University English Assessment",
        "document_order": 1,
        "__typename": "Document"
      },
      {
        "id": 36,
        "mandatory": false,
        "name": "Minutes Of Meeting With Students",
        "document_order": 2,
        "__typename": "Document"
      }
    ],
    "__typename": "Document_Type"
  }
]

export default data;