import { FinalQuestions } from '../../types';
import { ExcelData } from './types';

export const getFinalQuestionsExport = (data: FinalQuestions): Partial<ExcelData> => ({
  mandant: {
    name: 'Mandant',
    data: [
      { label: 'Abschließende Fragen', value: '' },
      { label: 'Monatliche Sparrate', value: data.savings.mandant.monthly },
      { label: 'Einmaliger Sparbetrag', value: data.savings.mandant.oneTime },
      { label: '', value: '' },
      { label: 'Termine', value: '' },
      { label: 'Übergabetermin', value: data.appointments.handover },
      { label: 'Termin Risikobefragung', value: data.appointments.riskAssessment },
      { label: 'Konzept-Termin', value: data.appointments.concept }
    ]
  },
  partner: {
    name: 'Partner',
    data: [
      { label: 'Abschließende Fragen', value: '' },
      { label: 'Monatliche Sparrate', value: data.savings.partner.monthly },
      { label: 'Einmaliger Sparbetrag', value: data.savings.partner.oneTime }
    ]
  }
});