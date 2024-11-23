import { IncomeSecurity, RetirementPlanning } from '../../types';
import { ExcelData } from './types';

export const getIncomeSecurityExport = (
  incomeSecurity: IncomeSecurity,
  retirementPlanning: RetirementPlanning
): Partial<ExcelData> => ({
  mandant: {
    name: 'Mandant',
    data: [
      { label: 'Einkommenssicherung', value: '' },
      { label: 'Absicherung der Arbeitskraft notwendig', value: incomeSecurity.mandant.needsWorkforceProtection ? 'ja' : 'nein' },
      { label: 'Monate finanziell überbrückbar', value: incomeSecurity.mandant.monthsCovered },
      { label: 'Gesundheitliche Beeinträchtigungen', value: incomeSecurity.mandant.healthIssues },
      { label: 'Erkrankungen in den letzten 5 Jahren', value: incomeSecurity.mandant.recentIllnesses },
      { label: 'Stationäre Aufenthalte', value: incomeSecurity.mandant.hospitalStays },
      { label: 'Arbeit mit gefährlichen Stoffen', value: incomeSecurity.mandant.hazardousWork },
      { label: 'Größe', value: incomeSecurity.mandant.height },
      { label: 'Gewicht', value: incomeSecurity.mandant.weight },
      { label: 'Raucher', value: incomeSecurity.mandant.isSmoker ? 'ja' : 'nein' },
      { label: '', value: '' },
      { label: 'Altersversorgung', value: '' },
      { label: 'Berufseintritt', value: retirementPlanning.mandant.careerStartDate },
      { label: 'Gewünschter Renteneintritt', value: retirementPlanning.mandant.desiredRetirementAge },
      { label: 'Benötigtes mtl. Nettoeinkommen', value: retirementPlanning.mandant.requiredMonthlyIncome }
    ]
  },
  partner: {
    name: 'Partner',
    data: [
      { label: 'Einkommenssicherung', value: '' },
      { label: 'Absicherung der Arbeitskraft notwendig', value: incomeSecurity.partner.needsWorkforceProtection ? 'ja' : 'nein' },
      { label: 'Monate finanziell überbrückbar', value: incomeSecurity.partner.monthsCovered },
      { label: 'Gesundheitliche Beeinträchtigungen', value: incomeSecurity.partner.healthIssues },
      { label: 'Erkrankungen in den letzten 5 Jahren', value: incomeSecurity.partner.recentIllnesses },
      { label: 'Stationäre Aufenthalte', value: incomeSecurity.partner.hospitalStays },
      { label: 'Arbeit mit gefährlichen Stoffen', value: incomeSecurity.partner.hazardousWork },
      { label: 'Größe', value: incomeSecurity.partner.height },
      { label: 'Gewicht', value: incomeSecurity.partner.weight },
      { label: 'Raucher', value: incomeSecurity.partner.isSmoker ? 'ja' : 'nein' },
      { label: '', value: '' },
      { label: 'Altersversorgung', value: '' },
      { label: 'Berufseintritt', value: retirementPlanning.partner.careerStartDate },
      { label: 'Gewünschter Renteneintritt', value: retirementPlanning.partner.desiredRetirementAge },
      { label: 'Benötigtes mtl. Nettoeinkommen', value: retirementPlanning.partner.requiredMonthlyIncome }
    ]
  }
});