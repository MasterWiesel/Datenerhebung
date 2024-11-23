import React from 'react';
import { ContractStatus } from '../types';

interface ContractStatusPageProps {
  data: ContractStatus;
  onUpdate: (data: ContractStatus) => void;
}

export const ContractStatusPage: React.FC<ContractStatusPageProps> = ({
  data,
  onUpdate,
}) => {
  const updateContract = (contractType: keyof ContractStatus, field: string, value: string) => {
    onUpdate({
      ...data,
      [contractType]: {
        ...data[contractType],
        [field]: value
      }
    });
  };

  const contracts = [
    { key: 'privateLiability', label: 'Privathaftpflicht' },
    { key: 'householdGoods', label: 'Hausrat' },
    { key: 'building', label: 'Gebäude' },
    { key: 'vehicle1', label: 'KFZ 1' },
    { key: 'vehicle2', label: 'KFZ 2' },
    { key: 'legalProtection1', label: 'Rechtsschutz 1' },
    { key: 'legalProtection2', label: 'Rechtsschutz 2' },
    { key: 'healthInsurance', label: 'GKV/PKV' },
    { key: 'supplementaryHealth', label: 'KV-Zusatz' },
    { key: 'sicknessDailyBenefit', label: 'Krankentagegeld' },
    { key: 'travelHealth', label: 'Auslandsreise-KV' },
    { key: 'occupationalDisability', label: 'BU/DU/EU' },
    { key: 'nursingCare', label: 'Pflege/3D/Multirente Grundfähigkeiten' },
    { key: 'accidentInsurance', label: 'Unfallversicherung' },
    { key: 'riskLife', label: 'Risikoleben' },
    { key: 'commercialInsurance', label: 'BHV/Inhalt/Firmengebäude Maschinen etc.' },
    { key: 'loan1', label: 'Kredite/Darlehen/Leasing 1' },
    { key: 'loan2', label: 'Kredite/Darlehen/Leasing 2' },
    { key: 'buildingSociety1', label: 'Bausparvertrag 1' },
    { key: 'buildingSociety2', label: 'Bausparvertrag 2' },
    { key: 'wealthBuilding1', label: 'Vermögensaufbau 1*' },
    { key: 'wealthBuilding2', label: 'Vermögensaufbau 2*' },
    { key: 'wealthBuilding3', label: 'Vermögensaufbau 3*' },
    { key: 'privateRetirement', label: 'AV (privat)' },
    { key: 'companyRetirement', label: 'AV (bAV/Riester)' },
    { key: 'realEstate', label: 'Immobilienbesitz' },
    { key: 'other1', label: 'Sonstige' },
    { key: 'other2', label: 'Sonstige' }
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">IST-Vertragsstand</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500 w-48">Vertragsart</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Versicherungsnehmer</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">
                Gesellschaft/<br/>Vertragsnummer
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Details/Schäden</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">
                Grund<br/>des Vertrages
              </th>
              <th className="px-4 py-2 text-center text-sm font-medium text-gray-500 w-24">
                Vertrag<br/>übergeben
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {contracts.map(({ key, label }) => (
              <tr key={key} className={key.startsWith('other') ? 'bg-white' : 'bg-blue-50'}>
                <td className="px-4 py-2 text-sm text-gray-900">{label}</td>
                <td className="px-4 py-2">
                  <input
                    type="text"
                    value={data[key]?.policyholder || ''}
                    onChange={(e) => updateContract(key, 'policyholder', e.target.value)}
                    className="w-full px-2 py-1 border border-gray-300 rounded-md"
                  />
                </td>
                <td className="px-4 py-2">
                  <input
                    type="text"
                    value={data[key]?.contractNumber || ''}
                    onChange={(e) => updateContract(key, 'contractNumber', e.target.value)}
                    className="w-full px-2 py-1 border border-gray-300 rounded-md"
                  />
                </td>
                <td className="px-4 py-2">
                  <input
                    type="text"
                    value={data[key]?.details || ''}
                    onChange={(e) => updateContract(key, 'details', e.target.value)}
                    className="w-full px-2 py-1 border border-gray-300 rounded-md"
                  />
                </td>
                <td className="px-4 py-2">
                  <input
                    type="text"
                    value={data[key]?.reason || ''}
                    onChange={(e) => updateContract(key, 'reason', e.target.value)}
                    className="w-full px-2 py-1 border border-gray-300 rounded-md"
                  />
                </td>
                <td className="px-4 py-2 text-center">
                  <input
                    type="checkbox"
                    checked={data[key]?.submitted || false}
                    onChange={(e) => updateContract(key, 'submitted', e.target.checked ? 'true' : '')}
                    className="h-4 w-4 text-blue-600 rounded border-gray-300"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};