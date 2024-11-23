import { WishesData, PlanningCriteria, StateSubsidies } from '../../types';
import { ExcelData } from './types';

export const getWishesExport = (
  wishesData: WishesData,
  planningCriteria: PlanningCriteria,
  stateSubsidies: StateSubsidies
): Partial<ExcelData> => ({
  mandant: {
    name: 'Mandant',
    data: [
      { label: 'Wünsche', value: '' },
      { label: 'Kurzfristige Wünsche (0-3 Jahre)', value: '' },
      ...wishesData.shortTerm.wishes.map(wish => ({ label: '', value: wish.text })),
      { label: '', value: '' },
      { label: 'Mittelfristige Wünsche (3-10 Jahre)', value: '' },
      ...wishesData.mediumTerm.wishes.map(wish => ({ label: '', value: wish.text })),
      { label: '', value: '' },
      { label: 'Langfristige Wünsche (ab 10 Jahre)', value: '' },
      ...wishesData.longTerm.wishes.map(wish => ({ label: '', value: wish.text })),
      { label: '', value: '' },
      { label: 'Planungskriterien', value: '' },
      { label: 'Wurden bisher Anträge abgelehnt?', value: planningCriteria.rejectedApplications.mandant ? 'ja' : 'nein' },
      { label: 'Sind Sie mit Ihrer Mietsituation zufrieden?', value: planningCriteria.satisfiedWithRent.mandant ? 'ja' : 'nein' },
      { label: 'Absicht zur Selbständigkeit?', value: planningCriteria.plansSelfEmployment.mandant ? 'ja' : 'nein' },
      { label: 'Testament vorhanden?', value: planningCriteria.hasWill.mandant ? 'ja' : 'nein' },
      { label: 'Patientenverfügung vorhanden?', value: planningCriteria.hasLivingWill.mandant ? 'ja' : 'nein' },
      { label: 'Versicherungen gekündigt?', value: planningCriteria.hasCancelledInsurance.mandant ? 'ja' : 'nein' },
      { label: 'Möchten Ersparnisse investieren?', value: planningCriteria.wantsToInvestSavings.mandant ? 'ja' : 'nein' },
      { label: '', value: '' },
      { label: 'Staatliche Förderungen', value: '' },
      { label: 'Riester/Rürup/bAV', value: stateSubsidies.riesterRuerupPension.mandant ? 'ja' : 'nein' },
      { label: 'Eigenheimzulage/Wohnungsbauprämie', value: stateSubsidies.housingSubsidy.mandant ? 'ja' : 'nein' },
      { label: 'Denkmalschutzabschreibung', value: stateSubsidies.monumentProtection.mandant ? 'ja' : 'nein' },
      { label: 'Abschreibung Neubau', value: stateSubsidies.newBuildingDepreciation.mandant ? 'ja' : 'nein' },
      { label: 'SAB oder KfW Darlehen', value: stateSubsidies.developmentLoan.mandant ? 'ja' : 'nein' },
      { label: 'VWL/Arbeitgeberanteil', value: stateSubsidies.employerBenefits.mandant.active ? `ja (${stateSubsidies.employerBenefits.mandant.amount} €)` : 'nein' },
    ]
  },
  partner: {
    name: 'Partner',
    data: [
      { label: 'Planungskriterien', value: '' },
      { label: 'Wurden bisher Anträge abgelehnt?', value: planningCriteria.rejectedApplications.partner ? 'ja' : 'nein' },
      { label: 'Sind Sie mit Ihrer Mietsituation zufrieden?', value: planningCriteria.satisfiedWithRent.partner ? 'ja' : 'nein' },
      { label: 'Absicht zur Selbständigkeit?', value: planningCriteria.plansSelfEmployment.partner ? 'ja' : 'nein' },
      { label: 'Testament vorhanden?', value: planningCriteria.hasWill.partner ? 'ja' : 'nein' },
      { label: 'Patientenverfügung vorhanden?', value: planningCriteria.hasLivingWill.partner ? 'ja' : 'nein' },
      { label: 'Versicherungen gekündigt?', value: planningCriteria.hasCancelledInsurance.partner ? 'ja' : 'nein' },
      { label: 'Möchten Ersparnisse investieren?', value: planningCriteria.wantsToInvestSavings.partner ? 'ja' : 'nein' },
      { label: '', value: '' },
      { label: 'Staatliche Förderungen', value: '' },
      { label: 'Riester/Rürup/bAV', value: stateSubsidies.riesterRuerupPension.partner ? 'ja' : 'nein' },
      { label: 'Eigenheimzulage/Wohnungsbauprämie', value: stateSubsidies.housingSubsidy.partner ? 'ja' : 'nein' },
      { label: 'Denkmalschutzabschreibung', value: stateSubsidies.monumentProtection.partner ? 'ja' : 'nein' },
      { label: 'Abschreibung Neubau', value: stateSubsidies.newBuildingDepreciation.partner ? 'ja' : 'nein' },
      { label: 'SAB oder KfW Darlehen', value: stateSubsidies.developmentLoan.partner ? 'ja' : 'nein' },
      { label: 'VWL/Arbeitgeberanteil', value: stateSubsidies.employerBenefits.partner.active ? `ja (${stateSubsidies.employerBenefits.partner.amount} €)` : 'nein' },
    ]
  }
});