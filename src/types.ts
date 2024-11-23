export type FormPage = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

export interface HeaderData {
  mandantName: string;
  maklerName: string;
  dateCollected: string;
}

export interface PriorityRatings {
  stateSubsidies: number;
  taxReduction: number;
  unnecessaryContributions: number;
  childrenEducation: number;
  disposableIncome: number;
  wealthBuilding: number;
  retirementStandard: number;
  homeOwnership: number;
  capitalProtection: number;
  illnessProtection: number;
  disabilityProtection: number;
  familyProtection: number;
  assetProtection: number;
  additionalIncome: number;
  conceptStrategy: number;
}

export interface WishesData {
  shortTerm: {
    wishes: { text: string }[];
  };
  mediumTerm: {
    wishes: { text: string }[];
  };
  longTerm: {
    wishes: { text: string }[];
  };
}

export interface PlanningCriteria {
  hobbies?: {
    mandant: string;
    partner: string;
  };
  clubMemberships?: {
    mandant: string;
    partner: string;
  };
  rejectedApplications: { mandant: boolean; partner: boolean };
  satisfiedWithRent: { mandant: boolean; partner: boolean };
  plansSelfEmployment: { mandant: boolean; partner: boolean };
  hasWill: { mandant: boolean; partner: boolean };
  hasLivingWill: { mandant: boolean; partner: boolean };
  hasCancelledInsurance: { mandant: boolean; partner: boolean };
  wantsToInvestSavings: { mandant: boolean; partner: boolean };
}

export interface StateSubsidies {
  riesterRuerupPension: { mandant: boolean; partner: boolean };
  housingSubsidy: { mandant: boolean; partner: boolean };
  monumentProtection: { mandant: boolean; partner: boolean };
  newBuildingDepreciation: { mandant: boolean; partner: boolean };
  developmentLoan: { mandant: boolean; partner: boolean };
  employerBenefits: {
    mandant: { active: boolean; amount: number };
    partner: { active: boolean; amount: number };
  };
}

export interface PersonalData {
  title: string;
  name: string;
  firstName: string;
  birthName: string;
  familyStatus: string;
  nationality: string;
  birthDate: string;
  birthPlace: string;
}

export interface ContactData {
  address: string;
  phonePrivate: string;
  faxPrivate: string;
  mobile: string;
  phoneWork: string;
  email: string;
  bank: string;
  iban: string;
  bic: string;
  balance: string;
  onlineBanking: boolean;
}

export interface CareerData {
  learnedProfession: string;
  currentActivity: string;
  isAcademic: boolean;
  employmentType: {
    employed: boolean;
    publicService: boolean;
    civilServant: boolean;
    worker: boolean;
    jobSeeking: boolean;
    housePerson: boolean;
    farmer: boolean;
    pensioner: boolean;
    student: boolean;
    apprentice: boolean;
    selfEmployed: boolean;
    freelancer: boolean;
    businessOwner: boolean;
  };
  civilServantDetails: {
    grade: string;
    serviceYears: string;
    allowances: string;
    lifetimeStatus: string;
    waitingPeriod: string;
  };
  industry: string;
  activityDescription: {
    officeWork: string;
    physicalWork: string;
    personnelResponsibility: string;
  };
  employer: string;
  education: string;
}

export interface PersonData {
  personal: PersonalData;
  contact: ContactData;
  career: CareerData;
}

export interface Child {
  title: string;
  name: string;
  firstName: string;
  birthName: string;
  familyStatus: string;
  nationality: string;
  birthDate: string;
  birthPlace: string;
  taxId: string;
}

export interface ClientDataPageData {
  mandant: PersonData;
  partner: PersonData;
  children: Child[];
}

export interface FinancialData {
  mandant: {
    income: {
      monthlyGrossIncome: string;
      monthlyNetIncome: string;
      yearlyGrossIncomeWithoutSpecial: string;
      yearlySpecialPayments: string;
      numberOfPayments: string;
      childBenefitMaintenance: string;
      otherIncome: string;
      taxTable: {
        basic: boolean;
        splitting: boolean;
        churchTax: boolean;
        percentage: string;
      };
      yearlyTaxableIncome: string;
      wantsSalaryOptimization: boolean;
      paystubCopyAvailable: boolean;
      paystubCopyUntil: string;
      lastTaxAssessment: {
        available: boolean;
        date: string;
      };
      expectedPayout: {
        expected: boolean;
        amount: string;
        date: string;
      };
      payoutPlans: string;
      schoolEntryRelevant: boolean;
      balance: string;
    };
    expenses: {
      rentWarm: { monthly: string; yearly: string };
      powerGas: { monthly: string; yearly: string };
      livingCosts: { monthly: string; yearly: string };
      communication: { monthly: string; yearly: string };
      vacation: { monthly: string; yearly: string };
      car: { monthly: string; yearly: string };
      children: { monthly: string; yearly: string };
      subscriptions: { monthly: string; yearly: string };
      other: { monthly: string; yearly: string };
      total: { monthly: string; yearly: string };
    };
  };
  partner: {
    income: {
      monthlyGrossIncome: string;
      monthlyNetIncome: string;
      yearlyGrossIncomeWithoutSpecial: string;
      yearlySpecialPayments: string;
      numberOfPayments: string;
      childBenefitMaintenance: string;
      otherIncome: string;
      taxTable: {
        basic: boolean;
        splitting: boolean;
        churchTax: boolean;
        percentage: string;
      };
      yearlyTaxableIncome: string;
      wantsSalaryOptimization: boolean;
      paystubCopyAvailable: boolean;
      paystubCopyUntil: string;
      lastTaxAssessment: {
        available: boolean;
        date: string;
      };
      expectedPayout: {
        expected: boolean;
        amount: string;
        date: string;
      };
      payoutPlans: string;
      schoolEntryRelevant: boolean;
      balance: string;
    };
    expenses: {
      rentWarm: { monthly: string; yearly: string };
      powerGas: { monthly: string; yearly: string };
      livingCosts: { monthly: string; yearly: string };
      communication: { monthly: string; yearly: string };
      vacation: { monthly: string; yearly: string };
      car: { monthly: string; yearly: string };
      children: { monthly: string; yearly: string };
      subscriptions: { monthly: string; yearly: string };
      other: { monthly: string; yearly: string };
      total: { monthly: string; yearly: string };
    };
  };
}

export interface OtherData {
  mandant: {
    svNumber: string;
    taxNumber: string;
    taxId: string;
    childBenefit: {
      number: string;
      familyFund: string;
    };
    idDocument: {
      type: 'DPA' | 'passport';
      number: string;
      validUntil: string;
      authority: string;
      hasCopy: boolean;
    };
  };
  partner: {
    svNumber: string;
    taxNumber: string;
    taxId: string;
    childBenefit: {
      number: string;
      familyFund: string;
    };
    idDocument: {
      type: 'DPA' | 'passport';
      number: string;
      validUntil: string;
      authority: string;
      hasCopy: boolean;
    };
  };
  currentSupport: {
    taxConsultant: {
      name: string;
      companyAndPhone: string;
    };
    lawyer: {
      name: string;
      companyAndPhone: string;
    };
    representative: {
      name: string;
      companyAndPhone: string;
    };
    lastFinancialReview: string;
  };
  housing: {
    livingSpace: string;
    numberOfRooms: string;
    buildingType: {
      singleFamily: boolean;
      singleFamilyWithApartment: boolean;
      semiDetached: boolean;
      apartment: boolean;
    };
    ownership: {
      owned: boolean;
      rented: boolean;
      sharedProperty: boolean;
    };
    parking: {
      street: boolean;
      carport: boolean;
      garage: boolean;
      fixedSpot: boolean;
      other: string;
    };
    specialRisks: {
      bicycleCount: string;
      elementaryDamageRisk: string;
    };
    construction: {
      walls: {
        massive: boolean;
        type1: boolean;
        type2: boolean;
        other: string;
      };
      roof: {
        hard: boolean;
        other: string;
      };
    };
    pets: string;
  };
}

export interface IncomeSecurity {
  mandant: {
    needsWorkforceProtection: boolean;
    monthsCovered: string;
    healthIssues: string;
    recentIllnesses: string;
    hospitalStays: string;
    hazardousWork: string;
    height: string;
    weight: string;
    isSmoker: boolean;
  };
  partner: {
    needsWorkforceProtection: boolean;
    monthsCovered: string;
    healthIssues: string;
    recentIllnesses: string;
    hospitalStays: string;
    hazardousWork: string;
    height: string;
    weight: string;
    isSmoker: boolean;
  };
}

export interface RetirementPlanning {
  mandant: {
    careerStartDate: string;
    desiredRetirementAge: string;
    requiredMonthlyIncome: string;
  };
  partner: {
    careerStartDate: string;
    desiredRetirementAge: string;
    requiredMonthlyIncome: string;
  };
}

export interface ContractStatus {
  [key: string]: {
    policyholder: string;
    contractNumber: string;
    details: string;
    reason: string;
    submitted: boolean;
  };
}

export interface FinancialConceptOrder {
  clientName: string;
  clientAddress: string;
  clientDetails: string;
  brokerName: string;
  brokerAddress: string;
  brokerDetails: string;
  costOption: 'recommendations';
  specialAgreements: string;
  initialInformationDate: string;
  place: string;
  date: string;
}

export interface FinalQuestions {
  savings: {
    mandant: {
      monthly: string;
      oneTime: string;
    };
    partner: {
      monthly: string;
      oneTime: string;
    };
  };
  appointments: {
    handover: string;
    riskAssessment: string;
    concept: string;
  };
}

// Initial Data
export const initialHeaderData: HeaderData = {
  mandantName: '',
  maklerName: '',
  dateCollected: '',
};

export const initialPriorityRatings: PriorityRatings = {
  stateSubsidies: 0,
  taxReduction: 0,
  unnecessaryContributions: 0,
  childrenEducation: 0,
  disposableIncome: 0,
  wealthBuilding: 0,
  retirementStandard: 0,
  homeOwnership: 0,
  capitalProtection: 0,
  illnessProtection: 0,
  disabilityProtection: 0,
  familyProtection: 0,
  assetProtection: 0,
  additionalIncome: 0,
  conceptStrategy: 0,
};

export const initialWishesData: WishesData = {
  shortTerm: { wishes: [{ text: '' }] },
  mediumTerm: { wishes: [{ text: '' }] },
  longTerm: { wishes: [{ text: '' }] },
};

export const initialPlanningCriteria: PlanningCriteria = {
  hobbies: {
    mandant: '',
    partner: ''
  },
  clubMemberships: {
    mandant: '',
    partner: ''
  },
  rejectedApplications: { mandant: false, partner: false },
  satisfiedWithRent: { mandant: false, partner: false },
  plansSelfEmployment: { mandant: false, partner: false },
  hasWill: { mandant: false, partner: false },
  hasLivingWill: { mandant: false, partner: false },
  hasCancelledInsurance: { mandant: false, partner: false },
  wantsToInvestSavings: { mandant: false, partner: false },
};

export const initialStateSubsidies: StateSubsidies = {
  riesterRuerupPension: { mandant: false, partner: false },
  housingSubsidy: { mandant: false, partner: false },
  monumentProtection: { mandant: false, partner: false },
  newBuildingDepreciation: { mandant: false, partner: false },
  developmentLoan: { mandant: false, partner: false },
  employerBenefits: {
    mandant: { active: false, amount: 0 },
    partner: { active: false, amount: 0 },
  },
};

const initialPersonData: PersonData = {
  personal: {
    title: '',
    name: '',
    firstName: '',
    birthName: '',
    familyStatus: '',
    nationality: '',
    birthDate: '',
    birthPlace: '',
  },
  contact: {
    address: '',
    phonePrivate: '',
    faxPrivate: '',
    mobile: '',
    phoneWork: '',
    email: '',
    bank: '',
    iban: '',
    bic: '',
    balance: '',
    onlineBanking: false,
  },
  career: {
    learnedProfession: '',
    currentActivity: '',
    isAcademic: false,
    employmentType: {
      employed: false,
      publicService: false,
      civilServant: false,
      worker: false,
      jobSeeking: false,
      housePerson: false,
      farmer: false,
      pensioner: false,
      student: false,
      apprentice: false,
      selfEmployed: false,
      freelancer: false,
      businessOwner: false,
    },
    civilServantDetails: {
      grade: '',
      serviceYears: '',
      allowances: '',
      lifetimeStatus: '',
      waitingPeriod: '',
    },
    industry: '',
    activityDescription: {
      officeWork: '',
      physicalWork: '',
      personnelResponsibility: '',
    },
    employer: '',
    education: '',
  },
};

export const initialClientData: ClientDataPageData = {
  mandant: { ...initialPersonData },
  partner: { ...initialPersonData },
  children: [],
};

export const initialFinancialData: FinancialData = {
  mandant: {
    income: {
      monthlyGrossIncome: '',
      monthlyNetIncome: '',
      yearlyGrossIncomeWithoutSpecial: '',
      yearlySpecialPayments: '',
      numberOfPayments: '',
      childBenefitMaintenance: '',
      otherIncome: '',
      taxTable: {
        basic: false,
        splitting: false,
        churchTax: false,
        percentage: ''
      },
      yearlyTaxableIncome: '',
      wantsSalaryOptimization: false,
      paystubCopyAvailable: false,
      paystubCopyUntil: '',
      lastTaxAssessment: {
        available: false,
        date: ''
      },
      expectedPayout: {
        expected: false,
        amount: '',
        date: ''
      },
      payoutPlans: '',
      schoolEntryRelevant: false,
      balance: ''
    },
    expenses: {
      rentWarm: { monthly: '', yearly: '' },
      powerGas: { monthly: '', yearly: '' },
      livingCosts: { monthly: '', yearly: '' },
      communication: { monthly: '', yearly: '' },
      vacation: { monthly: '', yearly: '' },
      car: { monthly: '', yearly: '' },
      children: { monthly: '', yearly: '' },
      subscriptions: { monthly: '', yearly: '' },
      other: { monthly: '', yearly: '' },
      total: { monthly: '', yearly: '' }
    }
  },
  partner: {
    income: {
      monthlyGrossIncome: '',
      monthlyNetIncome: '',
      yearlyGrossIncomeWithoutSpecial: '',
      yearlySpecialPayments: '',
      numberOfPayments: '',
      childBenefitMaintenance: '',
      otherIncome: '',
      taxTable: {
        basic: false,
        splitting: false,
        churchTax: false,
        percentage: ''
      },
      yearlyTaxableIncome: '',
      wantsSalaryOptimization: false,
      paystubCopyAvailable: false,
      paystubCopyUntil: '',
      lastTaxAssessment: {
        available: false,
        date: ''
      },
      expectedPayout: {
        expected: false,
        amount: '',
        date: ''
      },
      payoutPlans: '',
      schoolEntryRelevant: false,
      balance: ''
    },
    expenses: {
      rentWarm: { monthly: '', yearly: '' },
      powerGas: { monthly: '', yearly: '' },
      livingCosts: { monthly: '', yearly: '' },
      communication: { monthly: '', yearly: '' },
      vacation: { monthly: '', yearly: '' },
      car: { monthly: '', yearly: '' },
      children: { monthly: '', yearly: '' },
      subscriptions: { monthly: '', yearly: '' },
      other: { monthly: '', yearly: '' },
      total: { monthly: '', yearly: '' }
    }
  }
};

export const initialOtherData: OtherData = {
  mandant: {
    svNumber: '',
    taxNumber: '',
    taxId: '',
    childBenefit: {
      number: '',
      familyFund: ''
    },
    idDocument: {
      type: 'DPA',
      number: '',
      validUntil: '',
      authority: '',
      hasCopy: false
    }
  },
  partner: {
    svNumber: '',
    taxNumber: '',
    taxId: '',
    childBenefit: {
      number: '',
      familyFund: ''
    },
    idDocument: {
      type: 'DPA',
      number: '',
      validUntil: '',
      authority: '',
      hasCopy: false
    }
  },
  currentSupport: {
    taxConsultant: {
      name: '',
      companyAndPhone: ''
    },
    lawyer: {
      name: '',
      companyAndPhone: ''
    },
    representative: {
      name: '',
      companyAndPhone: ''
    },
    lastFinancialReview: ''
  },
  housing: {
    livingSpace: '',
    numberOfRooms: '',
    buildingType: {
      singleFamily: false,
      singleFamilyWithApartment: false,
      semiDetached: false,
      apartment: false
    },
    ownership: {
      owned: false,
      rented: false,
      sharedProperty: false
    },
    parking: {
      street: false,
      carport: false,
      garage: false,
      fixedSpot: false,
      other: ''
    },
    specialRisks: {
      bicycleCount: '',
      elementaryDamageRisk: ''
    },
    construction: {
      walls: {
        massive: false,
        type1: false,
        type2: false,
        other: ''
      },
      roof: {
        hard: false,
        other: ''
      }
    },
    pets: ''
  }
};

export const initialIncomeSecurity: IncomeSecurity = {
  mandant: {
    needsWorkforceProtection: false,
    monthsCovered: '',
    healthIssues: '',
    recentIllnesses: '',
    hospitalStays: '',
    hazardousWork: '',
    height: '',
    weight: '',
    isSmoker: false
  },
  partner: {
    needsWorkforceProtection: false,
    monthsCovered: '',
    healthIssues: '',
    recentIllnesses: '',
    hospitalStays: '',
    hazardousWork: '',
    height: '',
    weight: '',
    isSmoker: false
  }
};

export const initialRetirementPlanning: RetirementPlanning = {
  mandant: {
    careerStartDate: '',
    desiredRetirementAge: '',
    requiredMonthlyIncome: ''
  },
  partner: {
    careerStartDate: '',
    desiredRetirementAge: '',
    requiredMonthlyIncome: ''
  }
};

export const initialContractStatus: ContractStatus = {};

export const initialFinancialConceptOrder: FinancialConceptOrder = {
  clientName: '',
  clientAddress: '',
  clientDetails: '',
  brokerName: '',
  brokerAddress: '',
  brokerDetails: '',
  costOption: 'recommendations',
  specialAgreements: '',
  initialInformationDate: '',
  place: '',
  date: ''
};

export const initialFinalQuestions: FinalQuestions = {
  savings: {
    mandant: {
      monthly: '',
      oneTime: ''
    },
    partner: {
      monthly: '',
      oneTime: ''
    }
  },
  appointments: {
    handover: '',
    riskAssessment: '',
    concept: ''
  }
};