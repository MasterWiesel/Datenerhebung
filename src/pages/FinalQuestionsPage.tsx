import React from 'react';
import { FinalQuestions } from '../types';
import { FileDown } from 'lucide-react';
import { exportToExcel } from '../utils/excel';

interface FinalQuestionsPageProps {
  data: FinalQuestions;
  onUpdate: (data: FinalQuestions) => void;
  allFormData: any;
}

export const FinalQuestionsPage: React.FC<FinalQuestionsPageProps> = ({
  data,
  onUpdate,
  allFormData
}) => {
  const handleExportExcel = () => {
    exportToExcel(allFormData);
  };

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold text-gray-900">Abschließende Fragen</h1>

      {/* Savings Section */}
      <div className="space-y-6">
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="bg-blue-50">
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
                  Wie viel wollen Sie zusätzlich für Ihre Wünsche<br />
                  und Ziele sparen?
                </th>
                <th className="px-4 py-2 text-center text-sm font-medium text-gray-700">
                  monatlich gesamt
                </th>
                <th className="px-4 py-2 text-center text-sm font-medium text-gray-700">
                  einmalig
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2">Mandant</td>
                <td className="px-4 py-2">
                  <div className="relative">
                    <input
                      type="text"
                      value={data.savings.mandant.monthly}
                      onChange={(e) => onUpdate({
                        ...data,
                        savings: {
                          ...data.savings,
                          mandant: { ...data.savings.mandant, monthly: e.target.value }
                        }
                      })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md pr-8"
                    />
                    <span className="absolute right-3 top-2 text-gray-500">€</span>
                  </div>
                </td>
                <td className="px-4 py-2">
                  <div className="relative">
                    <input
                      type="text"
                      value={data.savings.mandant.oneTime}
                      onChange={(e) => onUpdate({
                        ...data,
                        savings: {
                          ...data.savings,
                          mandant: { ...data.savings.mandant, oneTime: e.target.value }
                        }
                      })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md pr-8"
                    />
                    <span className="absolute right-3 top-2 text-gray-500">€</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2">Partner</td>
                <td className="px-4 py-2">
                  <div className="relative">
                    <input
                      type="text"
                      value={data.savings.partner.monthly}
                      onChange={(e) => onUpdate({
                        ...data,
                        savings: {
                          ...data.savings,
                          partner: { ...data.savings.partner, monthly: e.target.value }
                        }
                      })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md pr-8"
                    />
                    <span className="absolute right-3 top-2 text-gray-500">€</span>
                  </div>
                </td>
                <td className="px-4 py-2">
                  <div className="relative">
                    <input
                      type="text"
                      value={data.savings.partner.oneTime}
                      onChange={(e) => onUpdate({
                        ...data,
                        savings: {
                          ...data.savings,
                          partner: { ...data.savings.partner, oneTime: e.target.value }
                        }
                      })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md pr-8"
                    />
                    <span className="absolute right-3 top-2 text-gray-500">€</span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Appointments Section */}
      <div className="grid grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Übergabetermin
          </label>
          <input
            type="date"
            value={data.appointments.handover}
            onChange={(e) => onUpdate({
              ...data,
              appointments: { ...data.appointments, handover: e.target.value }
            })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Termin Risikobefragung
          </label>
          <input
            type="date"
            value={data.appointments.riskAssessment}
            onChange={(e) => onUpdate({
              ...data,
              appointments: { ...data.appointments, riskAssessment: e.target.value }
            })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Konzept-Termin
          </label>
          <input
            type="date"
            value={data.appointments.concept}
            onChange={(e) => onUpdate({
              ...data,
              appointments: { ...data.appointments, concept: e.target.value }
            })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
      </div>

      {/* Export Button */}
      <div className="flex justify-end mt-8">
        <button
          onClick={handleExportExcel}
          className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          <FileDown className="w-4 h-4 mr-2" />
          Excel-Export
        </button>
      </div>
    </div>
  );
};