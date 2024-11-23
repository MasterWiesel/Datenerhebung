import React from 'react';
import { OtherData } from '../types';
import { FormField } from '../components/FormField';

interface OtherDataPageProps {
  data: OtherData;
  onUpdate: (data: OtherData) => void;
  allFormData: any;
}

const PersonSection: React.FC<{
  type: 'mandant' | 'partner';
  data: OtherData;
  onUpdate: (data: OtherData) => void;
}> = ({ type, data, onUpdate }) => {
  const person = data[type];

  const updatePerson = (field: string, value: any) => {
    onUpdate({
      ...data,
      [type]: {
        ...data[type],
        [field]: value
      }
    });
  };

  return (
    <div className="space-y-4">
      <FormField
        label="SV-Nummer"
        value={person.svNumber}
        onChange={(value) => updatePerson('svNumber', value)}
      />
      <FormField
        label="Steuernummer"
        value={person.taxNumber}
        onChange={(value) => updatePerson('taxNumber', value)}
      />
      <FormField
        label="Steuer-ID"
        value={person.taxId}
        onChange={(value) => updatePerson('taxId', value)}
      />
      
      <div className="space-y-2">
        <h3 className="font-medium text-gray-700">Kindergeld</h3>
        <div className="grid grid-cols-2 gap-4">
          <FormField
            label="Nummer"
            value={person.childBenefit.number}
            onChange={(value) => updatePerson('childBenefit', { ...person.childBenefit, number: value })}
          />
          <FormField
            label="Familienkasse"
            value={person.childBenefit.familyFund}
            onChange={(value) => updatePerson('childBenefit', { ...person.childBenefit, familyFund: value })}
          />
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="font-medium text-gray-700">Ausweis</h3>
        <div className="flex items-center space-x-4 mb-2">
          <label className="inline-flex items-center">
            <input
              type="radio"
              checked={person.idDocument.type === 'DPA'}
              onChange={() => updatePerson('idDocument', { ...person.idDocument, type: 'DPA' })}
              className="form-radio"
            />
            <span className="ml-2">DPA</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              checked={person.idDocument.type === 'passport'}
              onChange={() => updatePerson('idDocument', { ...person.idDocument, type: 'passport' })}
              className="form-radio"
            />
            <span className="ml-2">Reisepass</span>
          </label>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <FormField
            label="Nummer"
            value={person.idDocument.number}
            onChange={(value) => updatePerson('idDocument', { ...person.idDocument, number: value })}
          />
          <FormField
            label="Gültig bis"
            value={person.idDocument.validUntil}
            onChange={(value) => updatePerson('idDocument', { ...person.idDocument, validUntil: value })}
          />
        </div>
        <FormField
          label="Ausstellende Behörde"
          value={person.idDocument.authority}
          onChange={(value) => updatePerson('idDocument', { ...person.idDocument, authority: value })}
        />
        <div className="flex items-center">
          <input
            type="checkbox"
            checked={person.idDocument.hasCopy}
            onChange={(e) => updatePerson('idDocument', { ...person.idDocument, hasCopy: e.target.checked })}
            className="form-checkbox"
          />
          <span className="ml-2">Kopie vorhanden</span>
        </div>
      </div>
    </div>
  );
};

const HousingSection: React.FC<{
  data: OtherData;
  onUpdate: (data: OtherData) => void;
}> = ({ data, onUpdate }) => {
  const updateHousing = (field: string, value: any) => {
    onUpdate({
      ...data,
      housing: {
        ...data.housing,
        [field]: value
      }
    });
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-800">Derzeitige Wohnsituation</h2>
      
      <div className="grid grid-cols-2 gap-4">
        <FormField
          label="Wohnfläche (m²)"
          value={data.housing.livingSpace}
          onChange={(value) => updateHousing('livingSpace', value)}
        />
        <FormField
          label="Anzahl Räume"
          value={data.housing.numberOfRooms}
          onChange={(value) => updateHousing('numberOfRooms', value)}
        />
      </div>

      <div className="space-y-2">
        <h3 className="font-medium text-gray-700">Gebäudetyp</h3>
        <div className="grid grid-cols-2 gap-2">
          {[
            { key: 'singleFamily', label: 'EFH' },
            { key: 'singleFamilyWithApartment', label: 'EFH mit ELW' },
            { key: 'semiDetached', label: 'RH' },
            { key: 'apartment', label: 'MFH' }
          ].map(({ key, label }) => (
            <label key={key} className="inline-flex items-center">
              <input
                type="checkbox"
                checked={data.housing.buildingType[key]}
                onChange={(e) => updateHousing('buildingType', {
                  ...data.housing.buildingType,
                  [key]: e.target.checked
                })}
                className="form-checkbox"
              />
              <span className="ml-2">{label}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="font-medium text-gray-700">Eigentumsverhältnis</h3>
        <div className="flex space-x-4">
          {[
            { key: 'owned', label: 'Eigentum' },
            { key: 'rented', label: 'Miete' },
            { key: 'sharedProperty', label: 'WG' }
          ].map(({ key, label }) => (
            <label key={key} className="inline-flex items-center">
              <input
                type="checkbox"
                checked={data.housing.ownership[key]}
                onChange={(e) => updateHousing('ownership', {
                  ...data.housing.ownership,
                  [key]: e.target.checked
                })}
                className="form-checkbox"
              />
              <span className="ml-2">{label}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="font-medium text-gray-700">Kfz-Abstellplatz</h3>
        <div className="grid grid-cols-2 gap-2">
          {[
            { key: 'street', label: 'Straße' },
            { key: 'carport', label: 'Carport' },
            { key: 'garage', label: 'Garage' },
            { key: 'fixedSpot', label: 'fester Stellplatz' }
          ].map(({ key, label }) => (
            <label key={key} className="inline-flex items-center">
              <input
                type="checkbox"
                checked={data.housing.parking[key]}
                onChange={(e) => updateHousing('parking', {
                  ...data.housing.parking,
                  [key]: e.target.checked
                })}
                className="form-checkbox"
              />
              <span className="ml-2">{label}</span>
            </label>
          ))}
          <FormField
            label="Sonstiges"
            value={data.housing.parking.other}
            onChange={(value) => updateHousing('parking', {
              ...data.housing.parking,
              other: value
            })}
          />
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="font-medium text-gray-700">Sonderrisiken</h3>
        <div className="grid grid-cols-2 gap-4">
          <FormField
            label="Fahrrad vorhanden (Anzahl/Wert)"
            value={data.housing.specialRisks.bicycleCount}
            onChange={(value) => updateHousing('specialRisks', {
              ...data.housing.specialRisks,
              bicycleCount: value
            })}
          />
          <FormField
            label="Elementarschadenrisiko"
            value={data.housing.specialRisks.elementaryDamageRisk}
            onChange={(value) => updateHousing('specialRisks', {
              ...data.housing.specialRisks,
              elementaryDamageRisk: value
            })}
          />
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="font-medium text-gray-700">Bauart</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h4 className="text-sm font-medium text-gray-600 mb-2">Wände</h4>
            <div className="space-y-2">
              {[
                { key: 'massive', label: 'massiv' },
                { key: 'type1', label: 'FT I,II' }
              ].map(({ key, label }) => (
                <label key={key} className="inline-flex items-center">
                  <input
                    type="checkbox"
                    checked={data.housing.construction.walls[key]}
                    onChange={(e) => updateHousing('construction', {
                      ...data.housing.construction,
                      walls: {
                        ...data.housing.construction.walls,
                        [key]: e.target.checked
                      }
                    })}
                    className="form-checkbox"
                  />
                  <span className="ml-2">{label}</span>
                </label>
              ))}
              <FormField
                label="Sonstiges"
                value={data.housing.construction.walls.other}
                onChange={(value) => updateHousing('construction', {
                  ...data.housing.construction,
                  walls: {
                    ...data.housing.construction.walls,
                    other: value
                  }
                })}
              />
            </div>
          </div>
          <div>
            <h4 className="text-sm font-medium text-gray-600 mb-2">Dach</h4>
            <div className="space-y-2">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  checked={data.housing.construction.roof.hard}
                  onChange={(e) => updateHousing('construction', {
                    ...data.housing.construction,
                    roof: {
                      ...data.housing.construction.roof,
                      hard: e.target.checked
                    }
                  })}
                  className="form-checkbox"
                />
                <span className="ml-2">hart</span>
              </label>
              <FormField
                label="Sonstiges"
                value={data.housing.construction.roof.other}
                onChange={(value) => updateHousing('construction', {
                  ...data.housing.construction,
                  roof: {
                    ...data.housing.construction.roof,
                    other: value
                  }
                })}
              />
            </div>
          </div>
        </div>
      </div>

      <FormField
        label="Haustiere (Name, Rasse, Alter)"
        value={data.housing.pets}
        onChange={(value) => updateHousing('pets', value)}
      />
    </div>
  );
};

const SupportSection: React.FC<{
  data: OtherData;
  onUpdate: (data: OtherData) => void;
}> = ({ data, onUpdate }) => {
  const updateSupport = (field: string, value: any) => {
    onUpdate({
      ...data,
      currentSupport: {
        ...data.currentSupport,
        [field]: value
      }
    });
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-800">Derzeitige Betreuung</h2>
      
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <FormField
            label="Welcher Steuerberater betreut Sie? (Vorname/Nachname)"
            value={data.currentSupport.taxConsultant.name}
            onChange={(value) => updateSupport('taxConsultant', {
              ...data.currentSupport.taxConsultant,
              name: value
            })}
          />
          <FormField
            label="Firma/Tel."
            value={data.currentSupport.taxConsultant.companyAndPhone}
            onChange={(value) => updateSupport('taxConsultant', {
              ...data.currentSupport.taxConsultant,
              companyAndPhone: value
            })}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <FormField
            label="Welcher Rechtsanwalt betreut Sie? (Vorname/Nachname)"
            value={data.currentSupport.lawyer.name}
            onChange={(value) => updateSupport('lawyer', {
              ...data.currentSupport.lawyer,
              name: value
            })}
          />
          <FormField
            label="Firma/Tel."
            value={data.currentSupport.lawyer.companyAndPhone}
            onChange={(value) => updateSupport('lawyer', {
              ...data.currentSupport.lawyer,
              companyAndPhone: value
            })}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <FormField
            label="Welcher Vertreter betreut Sie? (Vorname/Nachname)"
            value={data.currentSupport.representative.name}
            onChange={(value) => updateSupport('representative', {
              ...data.currentSupport.representative,
              name: value
            })}
          />
          <FormField
            label="Firma/Tel."
            value={data.currentSupport.representative.companyAndPhone}
            onChange={(value) => updateSupport('representative', {
              ...data.currentSupport.representative,
              companyAndPhone: value
            })}
          />
        </div>

        <FormField
          label="Wann wurde Ihre finanzielle Situation zuletzt geprüft?"
          type="date"
          value={data.currentSupport.lastFinancialReview}
          onChange={(value) => updateSupport('lastFinancialReview', value)}
        />
      </div>
    </div>
  );
};

export const OtherDataPage: React.FC<OtherDataPageProps> = ({
  data,
  onUpdate,
  allFormData
}) => {
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold text-gray-900">Sonstiges</h1>

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

      <HousingSection data={data} onUpdate={onUpdate} />
      <SupportSection data={data} onUpdate={onUpdate} />
    </div>
  );
};