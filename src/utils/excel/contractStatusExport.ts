import { ContractStatus } from '../../types';
import { ExcelData } from './types';

const contractLabels: { [key: string]: string } = {
  privateLiability: 'Privathaftpflicht',
  householdGoods: 'Hausrat',
  building: 'Gebäude',
  vehicle1: 'KFZ 1',
  vehicle2: 'KFZ 2',
  legalProtection1: 'Rechtsschutz 1',
  legalProtection2: 'Rechtsschutz 2',
  healthInsurance: 'GKV/PKV',
  supplementaryHealth: 'KV-Zusatz',
  sicknessDailyBenefit: 'Krankentagegeld',
  travelHealth: 'Auslandsreise-KV',
  occupationalDisability: 'BU/DU/EU',
  nursingCare: 'Pflege/3D/Multirente Grundfähigkeiten',
  accidentInsurance: 'Unfallversicherung',
  riskLife: 'Risikoleben',
  commercialInsurance: 'BHV/Inhalt/Firmengebäude Maschinen etc.',
  loan1: 'Kredite/Darlehen/Leasing 1',
  loan2: 'Kredite/Darlehen/Leasing 2',
  buildingSociety1: 'Bausparvertrag 1',
  buildingSociety2: 'Bausparvertrag 2',
  wealthBuilding1: 'Vermögensaufbau 1*',
  wealthBuilding2: 'Vermögensaufbau 2*',
  wealthBuilding3: 'Vermögensaufbau 3*',
  privateRetirement: 'AV (privat)',
  companyRetirement: 'AV (bAV/Riester)',
  realEstate: 'Immobilienbesitz',
  other1: 'Sonstige',
  other2: 'Sonstige'
};

export const getContractStatusExport = (data: ContractStatus): Partial<ExcelData> => {
  const contracts = Object.entries(data).map(([key, value]) => ({
    label: contractLabels[key] || key,
    policyholder: value.policyholder || '',
    contractNumber: value.contractNumber || '',
    details: value.details || '',
    reason: value.reason || '',
    submitted: value.submitted ? 'ja' : 'nein'
  }));

  return {
    mandant: {
      name: 'Mandant',
      data: [
        { label: 'IST-Vertragsstand', value: '' },
        ...contracts.map(contract => ({ 
          label: contract.label, 
          value: `${contract.policyholder} | ${contract.contractNumber} | ${contract.details} | ${contract.reason} | ${contract.submitted}`
        }))
      ]
    },
    partner: {
      name: 'Partner',
      data: []
    }
  };
};