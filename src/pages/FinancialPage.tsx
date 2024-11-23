import React from 'react';
import { FinancialData } from '../types';
import { FormField } from '../components/FormField';

interface FinancialPageProps {
  data: FinancialData;
  onUpdate: (data: FinancialData) => void;
}

const MoneyInput: React.FC<{
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}> = ({ value, onChange, placeholder }) => (
  <div className="relative">
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full px-3 py-2 border border-gray-300 rounded-md pr-8"
      placeholder={placeholder}
    />
    <span className="absolute right-3 top-2 text-gray-500">€</span>
  </div>
);

const IncomeSection: React.FC<{
  type: 'mandant' | 'partner';
  data: FinancialData;
  onUpdate: (data: FinancialData) => void;
}> = ({ type, data, onUpdate }) => {
  const income = data[type].income;

  const updateIncome = (field: keyof typeof income, value: any) => {
    onUpdate({
      ...data,
      [type]: {
        ...data[type],
        income: {
          ...income,
          [field]: value
        }
      }
    });
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 gap-4">
        <div className="flex items-center space-x-4">
          <label className="w-1/2">Bruttoeinkommen monatlich</label>
          <MoneyInput
            value={income.monthlyGrossIncome}
            onChange={(value) => updateIncome('monthlyGrossIncome', value)}
          />
        </div>
        <div className="flex items-center space-x-4">
          <label className="w-1/2">Nettoeinkommen monatlich</label>
          <MoneyInput
            value={income.monthlyNetIncome}
            onChange={(value) => updateIncome('monthlyNetIncome', value)}
          />
        </div>
        <div className="flex items-center space-x-4">
          <label className="w-1/2">Bruttojahreseinkommen ohne Sonderzahlungen</label>
          <MoneyInput
            value={income.yearlyGrossIncomeWithoutSpecial}
            onChange={(value) => updateIncome('yearlyGrossIncomeWithoutSpecial', value)}
          />
        </div>
        <div className="flex items-center space-x-4">
          <label className="w-1/2">Sonderzahlungen jährlich (inkl. Urlaubs- und Weihnachtsgeld)</label>
          <MoneyInput
            value={income.yearlySpecialPayments}
            onChange={(value) => updateIncome('yearlySpecialPayments', value)}
          />
        </div>
        <div className="flex items-center space-x-4">
          <label className="w-1/2">Anzahl aller Zahlungen/Bundesland</label>
          <input
            type="text"
            value={income.numberOfPayments}
            onChange={(e) => updateIncome('numberOfPayments', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="flex items-center space-x-4">
          <label className="w-1/2">Kindergeld/Unterhalt</label>
          <MoneyInput
            value={income.childBenefitMaintenance}
            onChange={(value) => updateIncome('childBenefitMaintenance', value)}
          />
        </div>
        <div className="flex items-center space-x-4">
          <label className="w-1/2">Sonstige Einkünfte (Zinsen, Wohngeld, Renten, Mieten, ...)</label>
          <MoneyInput
            value={income.otherIncome}
            onChange={(value) => updateIncome('otherIncome', value)}
          />
        </div>

        <div className="space-y-2">
          <label className="block">Steuertabelle (Grund-/Splitting-Tab./Kirchensteuerpflicht)</label>
          <div className="flex space-x-4">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                checked={income.taxTable.basic}
                onChange={(e) => updateIncome('taxTable', { ...income.taxTable, basic: e.target.checked })}
                className="form-checkbox"
              />
              <span className="ml-2">Grund</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                checked={income.taxTable.splitting}
                onChange={(e) => updateIncome('taxTable', { ...income.taxTable, splitting: e.target.checked })}
                className="form-checkbox"
              />
              <span className="ml-2">Splitting</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                checked={income.taxTable.churchTax}
                onChange={(e) => updateIncome('taxTable', { ...income.taxTable, churchTax: e.target.checked })}
                className="form-checkbox"
              />
              <span className="ml-2">KSt</span>
            </label>
            <input
              type="text"
              value={income.taxTable.percentage}
              onChange={(e) => updateIncome('taxTable', { ...income.taxTable, percentage: e.target.value })}
              className="w-16 px-2 py-1 border border-gray-300 rounded-md"
              placeholder="%"
            />
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <label className="w-1/2">Jahr/zu versteuerndes Einkommen (ZVE)</label>
          <MoneyInput
            value={income.yearlyTaxableIncome}
            onChange={(value) => updateIncome('yearlyTaxableIncome', value)}
          />
        </div>

        <div className="flex items-center space-x-4">
          <label className="w-1/2">Wünschen Sie eine Lohnkostenoptimierung?</label>
          <div className="flex space-x-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                checked={!income.wantsSalaryOptimization}
                onChange={() => updateIncome('wantsSalaryOptimization', false)}
                className="form-radio"
              />
              <span className="ml-2">nein</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                checked={income.wantsSalaryOptimization}
                onChange={() => updateIncome('wantsSalaryOptimization', true)}
                className="form-radio"
              />
              <span className="ml-2">ja</span>
            </label>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <label className="w-1/2">Kopie Lohn-/Gehaltszettel liegt bei</label>
          <div className="flex space-x-4">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                checked={income.paystubCopyAvailable}
                onChange={(e) => updateIncome('paystubCopyAvailable', e.target.checked)}
                className="form-checkbox"
              />
              <span className="ml-2">ja</span>
            </label>
            {income.paystubCopyAvailable && (
              <div className="flex items-center space-x-2">
                <span>bis</span>
                <input
                  type="text"
                  value={income.paystubCopyUntil}
                  onChange={(e) => updateIncome('paystubCopyUntil', e.target.value)}
                  className="w-32 px-2 py-1 border border-gray-300 rounded-md"
                />
              </div>
            )}
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <label className="w-1/2">letzter Einkommensteuerbescheid/Jahr</label>
          <div className="flex space-x-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                checked={!income.lastTaxAssessment.available}
                onChange={() => updateIncome('lastTaxAssessment', { available: false, date: '' })}
                className="form-radio"
              />
              <span className="ml-2">nein</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                checked={income.lastTaxAssessment.available}
                onChange={() => updateIncome('lastTaxAssessment', { available: true, date: income.lastTaxAssessment.date })}
                className="form-radio"
              />
              <span className="ml-2">ja, von</span>
            </label>
            {income.lastTaxAssessment.available && (
              <input
                type="text"
                value={income.lastTaxAssessment.date}
                onChange={(e) => updateIncome('lastTaxAssessment', { available: true, date: e.target.value })}
                className="w-32 px-2 py-1 border border-gray-300 rounded-md"
              />
            )}
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <label className="w-1/2">Erwarten Sie in nächster Zeit eine Auszahlung (Schenkung/Erbschaft/Versicherung - Zeitpunkt/Höhe)</label>
          <div className="flex space-x-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                checked={!income.expectedPayout.expected}
                onChange={() => updateIncome('expectedPayout', { expected: false, amount: '', date: '' })}
                className="form-radio"
              />
              <span className="ml-2">nein</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                checked={income.expectedPayout.expected}
                onChange={() => updateIncome('expectedPayout', { expected: true, amount: income.expectedPayout.amount, date: income.expectedPayout.date })}
                className="form-radio"
              />
              <span className="ml-2">ja,</span>
            </label>
            {income.expectedPayout.expected && (
              <>
                <MoneyInput
                  value={income.expectedPayout.amount}
                  onChange={(value) => updateIncome('expectedPayout', { ...income.expectedPayout, amount: value })}
                />
                <span>am</span>
                <input
                  type="text"
                  value={income.expectedPayout.date}
                  onChange={(e) => updateIncome('expectedPayout', { ...income.expectedPayout, date: e.target.value })}
                  className="w-32 px-2 py-1 border border-gray-300 rounded-md"
                />
              </>
            )}
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <label className="w-1/2">Was haben Sie mit der Auszahlung vor?</label>
          <textarea
            value={income.payoutPlans}
            onChange={(e) => updateIncome('payoutPlans', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            rows={3}
          />
        </div>

        <div className="flex items-center space-x-4">
          <label className="w-1/2">Schufaintrag zu beachten</label>
          <div className="flex space-x-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                checked={!income.schoolEntryRelevant}
                onChange={() => updateIncome('schoolEntryRelevant', false)}
                className="form-radio"
              />
              <span className="ml-2">nein</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                checked={income.schoolEntryRelevant}
                onChange={() => updateIncome('schoolEntryRelevant', true)}
                className="form-radio"
              />
              <span className="ml-2">ja,</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

const ExpenseSection: React.FC<{
  type: 'mandant' | 'partner';
  data: FinancialData;
  onUpdate: (data: FinancialData) => void;
}> = ({ type, data, onUpdate }) => {
  const expenses = data[type].expenses;

  const updateExpense = (field: keyof typeof expenses, value: any) => {
    onUpdate({
      ...data,
      [type]: {
        ...data[type],
        expenses: {
          ...expenses,
          [field]: value
        }
      }
    });
  };

  return (
    <div className="space-y-4">
      <h3 className="font-medium text-gray-700">monatliche und jährliche Ausgaben und Aufwendungen für gemeinsamen Haushalt</h3>
      <table className="w-full">
        <thead>
          <tr>
            <th className="text-left">Ausgaben</th>
            <th className="text-right w-1/4">monatlich</th>
            <th className="text-right w-1/4">jährlich</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Miete warm</td>
            <td className="p-1">
              <MoneyInput
                value={expenses.rentWarm.monthly}
                onChange={(value) => updateExpense('rentWarm', { ...expenses.rentWarm, monthly: value })}
              />
            </td>
            <td className="p-1">
              <MoneyInput
                value={expenses.rentWarm.yearly}
                onChange={(value) => updateExpense('rentWarm', { ...expenses.rentWarm, yearly: value })}
              />
            </td>
          </tr>
          <tr>
            <td>Strom/Gas</td>
            <td className="p-1">
              <MoneyInput
                value={expenses.powerGas.monthly}
                onChange={(value) => updateExpense('powerGas', { ...expenses.powerGas, monthly: value })}
              />
            </td>
            <td className="p-1">
              <MoneyInput
                value={expenses.powerGas.yearly}
                onChange={(value) => updateExpense('powerGas', { ...expenses.powerGas, yearly: value })}
              />
            </td>
          </tr>
          <tr>
            <td>Lebenshaltungskosten (Lebensmittel, Kleidung, Kosmetik etc.)</td>
            <td className="p-1">
              <MoneyInput
                value={expenses.livingCosts.monthly}
                onChange={(value) => updateExpense('livingCosts', { ...expenses.livingCosts, monthly: value })}
              />
            </td>
            <td className="p-1">
              <MoneyInput
                value={expenses.livingCosts.yearly}
                onChange={(value) => updateExpense('livingCosts', { ...expenses.livingCosts, yearly: value })}
              />
            </td>
          </tr>
          <tr>
            <td>Kommunikation (Festnetz, Mobil, Internet etc.)</td>
            <td className="p-1">
              <MoneyInput
                value={expenses.communication.monthly}
                onChange={(value) => updateExpense('communication', { ...expenses.communication, monthly: value })}
              />
            </td>
            <td className="p-1">
              <MoneyInput
                value={expenses.communication.yearly}
                onChange={(value) => updateExpense('communication', { ...expenses.communication, yearly: value })}
              />
            </td>
          </tr>
          <tr>
            <td>Urlaubskosten/Hobby/Freizeit/Verein</td>
            <td className="p-1">
              <MoneyInput
                value={expenses.vacation.monthly}
                onChange={(value) => updateExpense('vacation', { ...expenses.vacation, monthly: value })}
              />
            </td>
            <td className="p-1">
              <MoneyInput
                value={expenses.vacation.yearly}
                onChange={(value) => updateExpense('vacation', { ...expenses.vacation, yearly: value })}
              />
            </td>
          </tr>
          <tr>
            <td>Auto (Kraftstoff, KFZ-Steuer etc.)</td>
            <td className="p-1">
              <MoneyInput
                value={expenses.car.monthly}
                onChange={(value) => updateExpense('car', { ...expenses.car, monthly: value })}
              />
            </td>
            <td className="p-1">
              <MoneyInput
                value={expenses.car.yearly}
                onChange={(value) => updateExpense('car', { ...expenses.car, yearly: value })}
              />
            </td>
          </tr>
          <tr>
            <td>Kinder (Kita, Ausbildung, Unterhalt, Hobby etc.)</td>
            <td className="p-1">
              <MoneyInput
                value={expenses.children.monthly}
                onChange={(value) => updateExpense('children', { ...expenses.children, monthly: value })}
              />
            </td>
            <td className="p-1">
              <MoneyInput
                value={expenses.children.yearly}
                onChange={(value) => updateExpense('children', { ...expenses.children, yearly: value })}
              />
            </td>
          </tr>
          <tr>
            <td>Abo/Zeitung/GEZ/Medien/TV</td>
            <td className="p-1">
              <MoneyInput
                value={expenses.subscriptions.monthly}
                onChange={(value) => updateExpense('subscriptions', { ...expenses.subscriptions, monthly: value })}
              />
            </td>
            <td className="p-1">
              <MoneyInput
                value={expenses.subscriptions.yearly}
                onChange={(value) => updateExpense('subscriptions', { ...expenses.subscriptions, yearly: value })}
              />
            </td>
          </tr>
          <tr>
            <td>sonstiges (private Anschaffungen etc.)</td>
            <td className="p-1">
              <MoneyInput
                value={expenses.other.monthly}
                onChange={(value) => updateExpense('other', { ...expenses.other, monthly: value })}
              />
            </td>
            <td className="p-1">
              <MoneyInput
                value={expenses.other.yearly}
                onChange={(value) => updateExpense('other', { ...expenses.other, yearly: value })}
              />
            </td>
          </tr>
          <tr className="font-bold">
            <td>Summe</td>
            <td className="p-1">
              <MoneyInput
                value={expenses.total.monthly}
                onChange={(value) => updateExpense('total', { ...expenses.total, monthly: value })}
              />
            </td>
            <td className="p-1">
              <MoneyInput
                value={expenses.total.yearly}
                onChange={(value) => updateExpense('total', { ...expenses.total, yearly: value })}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export const FinancialPage: React.FC<FinancialPageProps> = ({
  data,
  onUpdate,
}) => {
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold text-gray-900">Einnahmen und Ausgaben</h1>

      <div className="grid grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Mandant</h2>
          <IncomeSection type="mandant" data={data} onUpdate={onUpdate} />
          <ExpenseSection type="mandant" data={data} onUpdate={onUpdate} />
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Partner</h2>
          <IncomeSection type="partner" data={data} onUpdate={onUpdate} />
          <ExpenseSection type="partner" data={data} onUpdate={onUpdate} />
        </div>
      </div>
    </div>
  );
};