import React from 'react';
import { FormField } from '../components/FormField';
import { ClientDataPageData } from '../types';

interface CareerPageProps {
  data: ClientDataPageData;
  onUpdate: (data: ClientDataPageData) => void;
}

const PersonSection: React.FC<{
  type: 'mandant' | 'partner';
  data: ClientDataPageData;
  onUpdate: (data: ClientDataPageData) => void;
}> = ({ type, data, onUpdate }) => {
  const updateField = (field: string, value: any) => {
    onUpdate({
      ...data,
      [type]: {
        ...data[type],
        career: {
          ...data[type].career,
          [field]: value
        }
      }
    });
  };

  return (
    <div className="space-y-6">
      <FormField
        label="Erlernter Beruf"
        value={data[type]?.career?.learnedProfession || ''}
        onChange={(value) => updateField('learnedProfession', value)}
      />

      <div className="space-y-4">
        <FormField
          label="Derzeitige Tätigkeit"
          value={data[type]?.career?.currentActivity || ''}
          onChange={(value) => updateField('currentActivity', value)}
        />
        
        <div className="flex items-center">
          <input
            type="checkbox"
            checked={data[type]?.career?.isAcademic || false}
            onChange={(e) => updateField('isAcademic', e.target.checked)}
            className="rounded border-gray-300"
          />
          <span className="ml-2 text-sm text-gray-700">Akad.</span>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {[
            { key: 'employed', label: 'Angest.' },
            { key: 'publicService', label: 'ÖD' },
            { key: 'civilServant', label: 'Beamter' },
            { key: 'worker', label: 'Arbeiter' },
            { key: 'jobSeeking', label: 'arbeitssuchend' },
            { key: 'housePerson', label: 'Hausmann/-frau' },
            { key: 'farmer', label: 'Landwirt' },
            { key: 'pensioner', label: 'Rentner/Pensionär' },
            { key: 'student', label: 'Student' },
            { key: 'apprentice', label: 'Azubi' },
            { key: 'selfEmployed', label: 'selbständig' },
            { key: 'freelancer', label: 'Freiberufler' },
            { key: 'businessOwner', label: 'Gewerbetreibender' }
          ].map(({ key, label }) => (
            <label key={key} className="inline-flex items-center">
              <input
                type="checkbox"
                checked={data[type]?.career?.employmentType?.[key] || false}
                onChange={(e) => updateField('employmentType', {
                  ...data[type]?.career?.employmentType,
                  [key]: e.target.checked
                })}
                className="rounded border-gray-300"
              />
              <span className="ml-2 text-sm">{label}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="font-medium text-gray-700">Beamter</h3>
        <FormField
          label="Besoldungsgruppe/Stufe"
          value={data[type]?.career?.civilServantDetails?.grade || ''}
          onChange={(value) => updateField('civilServantDetails', {
            ...data[type]?.career?.civilServantDetails,
            grade: value
          })}
        />
        <div className="flex space-x-4">
          <FormField
            label="Ruhegehaltsfähige Dienstjahre"
            value={data[type]?.career?.civilServantDetails?.serviceYears || ''}
            onChange={(value) => updateField('civilServantDetails', {
              ...data[type]?.career?.civilServantDetails,
              serviceYears: value
            })}
          />
          <FormField
            label="Zulagen"
            value={data[type]?.career?.civilServantDetails?.allowances || ''}
            onChange={(value) => updateField('civilServantDetails', {
              ...data[type]?.career?.civilServantDetails,
              allowances: value
            })}
          />
        </div>
        <div className="flex space-x-4">
          <FormField
            label="Beamter auf Lebenszeit"
            value={data[type]?.career?.civilServantDetails?.lifetimeStatus || ''}
            onChange={(value) => updateField('civilServantDetails', {
              ...data[type]?.career?.civilServantDetails,
              lifetimeStatus: value
            })}
          />
          <FormField
            label="Wartezeit erfüllt"
            value={data[type]?.career?.civilServantDetails?.waitingPeriod || ''}
            onChange={(value) => updateField('civilServantDetails', {
              ...data[type]?.career?.civilServantDetails,
              waitingPeriod: value
            })}
          />
        </div>
      </div>

      <FormField
        label="Branche"
        value={data[type]?.career?.industry || ''}
        onChange={(value) => updateField('industry', value)}
      />

      <div className="space-y-4">
        <h3 className="font-medium text-gray-700">Beschreibung der Tätigkeit</h3>
        <div className="flex space-x-4">
          <FormField
            label="% Anteil Bürotätigkeit"
            value={data[type]?.career?.activityDescription?.officeWork || ''}
            onChange={(value) => updateField('activityDescription', {
              ...data[type]?.career?.activityDescription,
              officeWork: value
            })}
          />
          <FormField
            label="% Anteil körperl. Tätigkeit"
            value={data[type]?.career?.activityDescription?.physicalWork || ''}
            onChange={(value) => updateField('activityDescription', {
              ...data[type]?.career?.activityDescription,
              physicalWork: value
            })}
          />
        </div>
        <FormField
          label="Personalverantwortung für"
          value={data[type]?.career?.activityDescription?.personnelResponsibility || ''}
          onChange={(value) => updateField('activityDescription', {
            ...data[type]?.career?.activityDescription,
            personnelResponsibility: value
          })}
        />
      </div>

      <FormField
        label="Arbeitgeber/Adr."
        value={data[type]?.career?.employer || ''}
        onChange={(value) => updateField('employer', value)}
      />

      <FormField
        label="Bildungsabschluss"
        value={data[type]?.career?.education || ''}
        onChange={(value) => updateField('education', value)}
      />
    </div>
  );
};

export const CareerPage: React.FC<CareerPageProps> = ({
  data,
  onUpdate
}) => {
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold text-gray-900">Daten zum Beruf</h1>

      <div className="grid grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Mandant</h2>
          <PersonSection type="mandant" data={data} onUpdate={onUpdate} />
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Partner</h2>
          <PersonSection type="partner" data={data} onUpdate={onUpdate} />
        </div>
      </div>
    </div>
  );
};