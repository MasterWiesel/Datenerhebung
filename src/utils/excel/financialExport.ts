import { FinancialData } from '../../types';
import { ExcelData } from './types';

export const getFinancialExport = (data: FinancialData): Partial<ExcelData> => {
  const createPersonData = (type: 'mandant' | 'partner') => {
    const person = data[type];
    return [
      { label: 'Einnahmen', value: '' },
      { label: 'Bruttoeinkommen monatlich', value: person.income.monthlyGrossIncome },
      { label: 'Nettoeinkommen monatlich', value: person.income.monthlyNetIncome },
      { label: 'Bruttojahreseinkommen ohne Sonderzahlungen', value: person.income.yearlyGrossIncomeWithoutSpecial },
      { label: 'Sonderzahlungen jährlich', value: person.income.yearlySpecialPayments },
      { label: 'Anzahl aller Zahlungen/Bundesland', value: person.income.numberOfPayments },
      { label: 'Kindergeld/Unterhalt', value: person.income.childBenefitMaintenance },
      { label: 'Sonstige Einkünfte', value: person.income.otherIncome },
      { label: 'Steuertabelle', value: [
        person.income.taxTable.basic ? 'Grund' : '',
        person.income.taxTable.splitting ? 'Splitting' : '',
        person.income.taxTable.churchTax ? 'KSt' : '',
        person.income.taxTable.percentage ? `${person.income.taxTable.percentage}%` : ''
      ].filter(Boolean).join(', ') },
      { label: 'Jahr/zu versteuerndes Einkommen (ZVE)', value: person.income.yearlyTaxableIncome },
      { label: 'Wünschen Sie eine Lohnkostenoptimierung?', value: person.income.wantsSalaryOptimization ? 'ja' : 'nein' },
      { label: 'Kopie Lohn-/Gehaltszettel liegt bei', value: person.income.paystubCopyAvailable ? `ja, bis ${person.income.paystubCopyUntil}` : 'nein' },
      { label: 'Letzter Einkommensteuerbescheid/Jahr', value: person.income.lastTaxAssessment.available ? `ja, von ${person.income.lastTaxAssessment.date}` : 'nein' },
      { label: 'Erwarten Sie eine Auszahlung?', value: person.income.expectedPayout.expected ? `ja, ${person.income.expectedPayout.amount}€ am ${person.income.expectedPayout.date}` : 'nein' },
      { label: 'Was haben Sie mit der Auszahlung vor?', value: person.income.payoutPlans },
      { label: 'Schufaintrag zu beachten', value: person.income.schoolEntryRelevant ? 'ja' : 'nein' },
      { label: '', value: '' },
      { label: 'Ausgaben', value: '' },
      { label: 'Miete warm', value: `${person.expenses.rentWarm.monthly} / ${person.expenses.rentWarm.yearly}` },
      { label: 'Strom/Gas', value: `${person.expenses.powerGas.monthly} / ${person.expenses.powerGas.yearly}` },
      { label: 'Lebenshaltungskosten', value: `${person.expenses.livingCosts.monthly} / ${person.expenses.livingCosts.yearly}` },
      { label: 'Kommunikation', value: `${person.expenses.communication.monthly} / ${person.expenses.communication.yearly}` },
      { label: 'Urlaubskosten/Hobby/Freizeit', value: `${person.expenses.vacation.monthly} / ${person.expenses.vacation.yearly}` },
      { label: 'Auto', value: `${person.expenses.car.monthly} / ${person.expenses.car.yearly}` },
      { label: 'Kinder', value: `${person.expenses.children.monthly} / ${person.expenses.children.yearly}` },
      { label: 'Abo/Zeitung/GEZ/Medien', value: `${person.expenses.subscriptions.monthly} / ${person.expenses.subscriptions.yearly}` },
      { label: 'Sonstiges', value: `${person.expenses.other.monthly} / ${person.expenses.other.yearly}` },
      { label: 'Summe', value: `${person.expenses.total.monthly} / ${person.expenses.total.yearly}` },
    ];
  };

  return {
    mandant: {
      name: 'Mandant',
      data: createPersonData('mandant')
    },
    partner: {
      name: 'Partner',
      data: createPersonData('partner')
    }
  };
};