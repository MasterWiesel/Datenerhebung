import React from 'react';
import { IncomeSecurity, RetirementPlanning } from '../types';

interface IncomeSecurityPageProps {
  incomeSecurity: IncomeSecurity;
  onUpdateIncomeSecurity: (data: IncomeSecurity) => void;
  retirementPlanning: RetirementPlanning;
  onUpdateRetirementPlanning: (data: RetirementPlanning) => void;
}

export const IncomeSecurityPage: React.FC<IncomeSecurityPageProps> = ({
  incomeSecurity,
  onUpdateIncomeSecurity,
  retirementPlanning,
  onUpdateRetirementPlanning
}) => {
  const illnessList = [
    'Herzen/Kreislauf',
    'Atmungsorgane',
    'Rücken/Gelenke',
    'Bänder/Muskeln',
    'Psyche',
    'Allergien'
  ];

  return (
    <div className="space-y-8">
      {/* Income Security Section */}
      <div>
        <h2 className="text-xl font-semibold text-gray-800 mb-6">Einkommenssicherung</h2>
        <div className="space-y-4">
          {/* Protection Need */}
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-4">
              <div className="text-sm text-gray-700">
                Halten Sie die Absicherung Ihrer Arbeitskraft für notwendig?
              </div>
            </div>
            <div className="col-span-4 flex justify-center space-x-4">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  checked={incomeSecurity.mandant.needsWorkforceProtection}
                  onChange={() => onUpdateIncomeSecurity({
                    ...incomeSecurity,
                    mandant: { ...incomeSecurity.mandant, needsWorkforceProtection: true }
                  })}
                  className="form-radio"
                />
                <span className="ml-2">ja</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  checked={!incomeSecurity.mandant.needsWorkforceProtection}
                  onChange={() => onUpdateIncomeSecurity({
                    ...incomeSecurity,
                    mandant: { ...incomeSecurity.mandant, needsWorkforceProtection: false }
                  })}
                  className="form-radio"
                />
                <span className="ml-2">nein</span>
              </label>
            </div>
            <div className="col-span-4 flex justify-center space-x-4">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  checked={incomeSecurity.partner.needsWorkforceProtection}
                  onChange={() => onUpdateIncomeSecurity({
                    ...incomeSecurity,
                    partner: { ...incomeSecurity.partner, needsWorkforceProtection: true }
                  })}
                  className="form-radio"
                />
                <span className="ml-2">ja</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  checked={!incomeSecurity.partner.needsWorkforceProtection}
                  onChange={() => onUpdateIncomeSecurity({
                    ...incomeSecurity,
                    partner: { ...incomeSecurity.partner, needsWorkforceProtection: false }
                  })}
                  className="form-radio"
                />
                <span className="ml-2">nein</span>
              </label>
            </div>
          </div>

          {/* Other Fields */}
          {[
            {
              label: 'Wie viele Monate können Sie aus Ihren Rücklagen finanziell überbrücken?',
              mandantField: 'monthsCovered',
              partnerField: 'monthsCovered'
            },
            {
              label: 'Haben Sie gesundheitliche Beeinträchtigungen, die beachtet werden müssen?',
              mandantField: 'healthIssues',
              partnerField: 'healthIssues'
            }
          ].map(({ label, mandantField, partnerField }) => (
            <div key={mandantField} className="grid grid-cols-12 gap-4">
              <div className="col-span-4">
                <div className="text-sm text-gray-700">{label}</div>
              </div>
              <div className="col-span-4">
                <input
                  type="text"
                  value={incomeSecurity.mandant[mandantField]}
                  onChange={(e) => onUpdateIncomeSecurity({
                    ...incomeSecurity,
                    mandant: { ...incomeSecurity.mandant, [mandantField]: e.target.value }
                  })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="col-span-4">
                <input
                  type="text"
                  value={incomeSecurity.partner[partnerField]}
                  onChange={(e) => onUpdateIncomeSecurity({
                    ...incomeSecurity,
                    partner: { ...incomeSecurity.partner, [partnerField]: e.target.value }
                  })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>
            </div>
          ))}

          {/* Illness Section */}
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-4">
              <div className="text-sm text-gray-700">
                <div>In den letzten 5 Jahren Erkrankung:</div>
                <div className="mt-1 text-xs text-gray-600">
                  {illnessList.map((illness) => (
                    <div key={illness}>{illness}</div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-span-4">
              <input
                type="text"
                value={incomeSecurity.mandant.recentIllnesses}
                onChange={(e) => onUpdateIncomeSecurity({
                  ...incomeSecurity,
                  mandant: { ...incomeSecurity.mandant, recentIllnesses: e.target.value }
                })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="col-span-4">
              <input
                type="text"
                value={incomeSecurity.partner.recentIllnesses}
                onChange={(e) => onUpdateIncomeSecurity({
                  ...incomeSecurity,
                  partner: { ...incomeSecurity.partner, recentIllnesses: e.target.value }
                })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
          </div>

          {/* Hospital Stays and Hazardous Work */}
          {[
            {
              label: 'In den letzten 10 Jahren stationäre Aufenthalte?',
              mandantField: 'hospitalStays',
              partnerField: 'hospitalStays'
            },
            {
              label: 'Arbeiten Sie mit gefährlichen/toxischen Stoffen?',
              mandantField: 'hazardousWork',
              partnerField: 'hazardousWork'
            }
          ].map(({ label, mandantField, partnerField }) => (
            <div key={mandantField} className="grid grid-cols-12 gap-4">
              <div className="col-span-4">
                <div className="text-sm text-gray-700">{label}</div>
              </div>
              <div className="col-span-4">
                <input
                  type="text"
                  value={incomeSecurity.mandant[mandantField]}
                  onChange={(e) => onUpdateIncomeSecurity({
                    ...incomeSecurity,
                    mandant: { ...incomeSecurity.mandant, [mandantField]: e.target.value }
                  })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="col-span-4">
                <input
                  type="text"
                  value={incomeSecurity.partner[partnerField]}
                  onChange={(e) => onUpdateIncomeSecurity({
                    ...incomeSecurity,
                    partner: { ...incomeSecurity.partner, [partnerField]: e.target.value }
                  })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>
            </div>
          ))}

          {/* Height/Weight */}
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-4">
              <div className="text-sm text-gray-700">Größe/Gewicht</div>
            </div>
            <div className="col-span-4 flex space-x-2">
              <div className="relative flex-1">
                <input
                  type="text"
                  value={incomeSecurity.mandant.height}
                  onChange={(e) => onUpdateIncomeSecurity({
                    ...incomeSecurity,
                    mandant: { ...incomeSecurity.mandant, height: e.target.value }
                  })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md pr-8"
                  placeholder="Größe"
                />
                <span className="absolute right-3 top-2 text-gray-500">cm</span>
              </div>
              <div className="relative flex-1">
                <input
                  type="text"
                  value={incomeSecurity.mandant.weight}
                  onChange={(e) => onUpdateIncomeSecurity({
                    ...incomeSecurity,
                    mandant: { ...incomeSecurity.mandant, weight: e.target.value }
                  })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md pr-8"
                  placeholder="Gewicht"
                />
                <span className="absolute right-3 top-2 text-gray-500">kg</span>
              </div>
            </div>
            <div className="col-span-4 flex space-x-2">
              <div className="relative flex-1">
                <input
                  type="text"
                  value={incomeSecurity.partner.height}
                  onChange={(e) => onUpdateIncomeSecurity({
                    ...incomeSecurity,
                    partner: { ...incomeSecurity.partner, height: e.target.value }
                  })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md pr-8"
                  placeholder="Größe"
                />
                <span className="absolute right-3 top-2 text-gray-500">cm</span>
              </div>
              <div className="relative flex-1">
                <input
                  type="text"
                  value={incomeSecurity.partner.weight}
                  onChange={(e) => onUpdateIncomeSecurity({
                    ...incomeSecurity,
                    partner: { ...incomeSecurity.partner, weight: e.target.value }
                  })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md pr-8"
                  placeholder="Gewicht"
                />
                <span className="absolute right-3 top-2 text-gray-500">kg</span>
              </div>
            </div>
          </div>

          {/* Smoker Status */}
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-4">
              <div className="text-sm text-gray-700">Sind Sie Raucher?</div>
            </div>
            <div className="col-span-4 flex justify-center space-x-4">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  checked={incomeSecurity.mandant.isSmoker}
                  onChange={() => onUpdateIncomeSecurity({
                    ...incomeSecurity,
                    mandant: { ...incomeSecurity.mandant, isSmoker: true }
                  })}
                  className="form-radio"
                />
                <span className="ml-2">ja</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  checked={!incomeSecurity.mandant.isSmoker}
                  onChange={() => onUpdateIncomeSecurity({
                    ...incomeSecurity,
                    mandant: { ...incomeSecurity.mandant, isSmoker: false }
                  })}
                  className="form-radio"
                />
                <span className="ml-2">nein</span>
              </label>
            </div>
            <div className="col-span-4 flex justify-center space-x-4">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  checked={incomeSecurity.partner.isSmoker}
                  onChange={() => onUpdateIncomeSecurity({
                    ...incomeSecurity,
                    partner: { ...incomeSecurity.partner, isSmoker: true }
                  })}
                  className="form-radio"
                />
                <span className="ml-2">ja</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  checked={!incomeSecurity.partner.isSmoker}
                  onChange={() => onUpdateIncomeSecurity({
                    ...incomeSecurity,
                    partner: { ...incomeSecurity.partner, isSmoker: false }
                  })}
                  className="form-radio"
                />
                <span className="ml-2">nein</span>
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Retirement Planning Section */}
      <div>
        <h2 className="text-xl font-semibold text-gray-800 mb-6">
          Sicherstellung Altersversorgung (erworbene Ansprüche)
        </h2>
        <div className="space-y-4">
          {/* Career Start Date */}
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-4">
              <div className="text-sm text-gray-700">
                Datum Berufseintritt (nach Ausbildung)
              </div>
            </div>
            <div className="col-span-4">
              <input
                type="date"
                value={retirementPlanning.mandant.careerStartDate}
                onChange={(e) => onUpdateRetirementPlanning({
                  ...retirementPlanning,
                  mandant: { ...retirementPlanning.mandant, careerStartDate: e.target.value }
                })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="col-span-4">
              <input
                type="date"
                value={retirementPlanning.partner.careerStartDate}
                onChange={(e) => onUpdateRetirementPlanning({
                  ...retirementPlanning,
                  partner: { ...retirementPlanning.partner, careerStartDate: e.target.value }
                })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
          </div>

          {/* Desired Retirement Age */}
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-4">
              <div className="text-sm text-gray-700">
                Gewünschter Renteneintritt
              </div>
            </div>
            <div className="col-span-4">
              <input
                type="text"
                value={retirementPlanning.mandant.desiredRetirementAge}
                onChange={(e) => onUpdateRetirementPlanning({
                  ...retirementPlanning,
                  mandant: { ...retirementPlanning.mandant, desiredRetirementAge: e.target.value }
                })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="mit dem ... Lebensjahr"
              />
            </div>
            <div className="col-span-4">
              <input
                type="text"
                value={retirementPlanning.partner.desiredRetirementAge}
                onChange={(e) => onUpdateRetirementPlanning({
                  ...retirementPlanning,
                  partner: { ...retirementPlanning.partner, desiredRetirementAge: e.target.value }
                })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="mit dem ... Lebensjahr"
              />
            </div>
          </div>

          {/* Required Monthly Income */}
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-4">
              <div className="text-sm text-gray-700">
                Benötigtes mtl. Nettoeinkommen, wenn Renteneintritt heute wäre
              </div>
            </div>
            <div className="col-span-4">
              <div className="relative">
                <input
                  type="text"
                  value={retirementPlanning.mandant.requiredMonthlyIncome}
                  onChange={(e) => onUpdateRetirementPlanning({
                    ...retirementPlanning,
                    mandant: { ...retirementPlanning.mandant, requiredMonthlyIncome: e.target.value }
                  })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md pr-8"
                />
                <span className="absolute right-3 top-2 text-gray-500">€</span>
              </div>
            </div>
            <div className="col-span-4">
              <div className="relative">
                <input
                  type="text"
                  value={retirementPlanning.partner.requiredMonthlyIncome}
                  onChange={(e) => onUpdateRetirementPlanning({
                    ...retirementPlanning,
                    partner: { ...retirementPlanning.partner, requiredMonthlyIncome: e.target.value }
                  })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md pr-8"
                />
                <span className="absolute right-3 top-2 text-gray-500">€</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};