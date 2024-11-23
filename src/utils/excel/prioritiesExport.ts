import { PriorityRatings } from '../../types';
import { ExcelData } from './types';

export const getPrioritiesExport = (data: PriorityRatings): Partial<ExcelData> => ({
  mandant: {
    name: 'Mandant',
    data: [
      { label: 'Prioritäten', value: '' },
      { label: 'Optimale Ausschöpfung staatlicher Vergünstigungen', value: data.stateSubsidies },
      { label: 'Reduzierung von Steuern und Sozialabgaben', value: data.taxReduction },
      { label: 'Einsparung unnötiger Beiträge', value: data.unnecessaryContributions },
      { label: 'Finanzielle Sicherung der Kinder', value: data.childrenEducation },
      { label: 'Verfügbares Geld', value: data.disposableIncome },
      { label: 'Vermögensaufbau', value: data.wealthBuilding },
      { label: 'Erhaltung Lebensstandard im Rentenalter', value: data.retirementStandard },
      { label: 'Schaffung von Wohneigentum statt Miete', value: data.homeOwnership },
      { label: 'Schutz der Kapitalanlagen gegen Kaufkraftverlust', value: data.capitalProtection },
      { label: 'Hohe Leistung im Krankheitsfall', value: data.illnessProtection },
      { label: 'Einkommenssicherung bei Krankheit bzw. Erwerbsminderung', value: data.disabilityProtection },
      { label: 'Absicherung der Familie', value: data.familyProtection },
      { label: 'Absicherung des Vermögens', value: data.assetProtection },
      { label: 'Schaffung von Zusatzeinkommen', value: data.additionalIncome },
      { label: 'Fokus der Konzeptstrategie', value: data.conceptStrategy },
    ]
  },
  partner: {
    name: 'Partner',
    data: []
  }
});