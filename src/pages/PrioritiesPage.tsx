import React from 'react';
import { PriorityRating } from '../components/PriorityRating';
import { PriorityRatings } from '../types';

interface PrioritiesPageProps {
  data: PriorityRatings;
  onUpdate: (field: keyof PriorityRatings, value: number) => void;
}

export const PrioritiesPage: React.FC<PrioritiesPageProps> = ({ data, onUpdate }) => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Prioritäten</h1>
      
      <div className="space-y-2">
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Wie wichtig sind Ihnen nachfolgende Themen?
          </h2>
          <div className="flex justify-between text-sm text-gray-600 mb-2 px-4">
            <span>weniger wichtig</span>
            <span>sehr wichtig</span>
          </div>
        </div>
        
        <PriorityRating
          label="Optimale Ausschöpfung staatlicher Vergünstigungen"
          value={data.stateSubsidies}
          onChange={(value) => onUpdate('stateSubsidies', value)}
        />
        <PriorityRating
          label="Reduzierung von Steuern und Sozialabgaben"
          value={data.taxReduction}
          onChange={(value) => onUpdate('taxReduction', value)}
        />
        <PriorityRating
          label="Einsparung unnötiger Beiträge bei Krediten und Versicherungen"
          value={data.unnecessaryContributions}
          onChange={(value) => onUpdate('unnecessaryContributions', value)}
        />
        <PriorityRating
          label="Finanzielle Sicherung von Aus- und Fortbildung der Kinder"
          value={data.childrenEducation}
          onChange={(value) => onUpdate('childrenEducation', value)}
        />
        <PriorityRating
          label="Verfügbares Geld für Auto, Urlaub und Hobbys"
          value={data.disposableIncome}
          onChange={(value) => onUpdate('disposableIncome', value)}
        />
        <PriorityRating
          label="Auf- und Ausbau von Vermögen (finanzielle Unabhängigkeit)"
          value={data.wealthBuilding}
          onChange={(value) => onUpdate('wealthBuilding', value)}
        />
        <PriorityRating
          label="Erhaltung Lebensstandard im Rentenalter"
          value={data.retirementStandard}
          onChange={(value) => onUpdate('retirementStandard', value)}
        />
        <PriorityRating
          label="Schaffung von Wohneigentum statt Miete"
          value={data.homeOwnership}
          onChange={(value) => onUpdate('homeOwnership', value)}
        />
        <PriorityRating
          label="Schutz der Kapitalanlagen gegen Kaufkraftverlust"
          value={data.capitalProtection}
          onChange={(value) => onUpdate('capitalProtection', value)}
        />
        <PriorityRating
          label="Hohe Leistung im Krankheitsfall"
          value={data.illnessProtection}
          onChange={(value) => onUpdate('illnessProtection', value)}
        />
        <PriorityRating
          label="Einkommenssicherung bei Krankheit bzw. Erwerbsminderung"
          value={data.disabilityProtection}
          onChange={(value) => onUpdate('disabilityProtection', value)}
        />
        <PriorityRating
          label="Absicherung der Familie"
          value={data.familyProtection}
          onChange={(value) => onUpdate('familyProtection', value)}
        />
        <PriorityRating
          label="Absicherung des Vermögens"
          value={data.assetProtection}
          onChange={(value) => onUpdate('assetProtection', value)}
        />
        <PriorityRating
          label="Schaffung von Zusatzeinkommen"
          value={data.additionalIncome}
          onChange={(value) => onUpdate('additionalIncome', value)}
        />

        <div className="mt-8 pt-6 border-t border-gray-200">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Fokus der Konzeptstrategie
          </h2>
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">Versicherung</span>
              <span className="text-sm font-medium text-gray-700">Vermögensaufbau</span>
            </div>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((number) => (
                <button
                  key={number}
                  onClick={() => onUpdate('conceptStrategy', number)}
                  className={`flex-1 py-1 text-sm font-medium rounded ${
                    data.conceptStrategy === number
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-blue-100'
                  }`}
                >
                  {number}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};