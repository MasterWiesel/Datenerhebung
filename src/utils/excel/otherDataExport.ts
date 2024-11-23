import { OtherData } from '../../types';
import { ExcelData } from './types';

export const getOtherDataExport = (data: OtherData): Partial<ExcelData> => {
  const createPersonData = (type: 'mandant' | 'partner') => {
    const person = data[type];
    return [
      { label: 'Sonstiges', value: '' },
      { label: 'SV-Nummer', value: person.svNumber },
      { label: 'Steuernummer', value: person.taxNumber },
      { label: 'Steuer-ID', value: person.taxId },
      { label: 'Kindergeld Nummer', value: person.childBenefit.number },
      { label: 'Familienkasse', value: person.childBenefit.familyFund },
      { label: 'Ausweis', value: '' },
      { label: 'Typ', value: person.idDocument.type },
      { label: 'Nummer', value: person.idDocument.number },
      { label: 'Gültig bis', value: person.idDocument.validUntil },
      { label: 'Ausstellende Behörde', value: person.idDocument.authority },
      { label: 'Kopie vorhanden', value: person.idDocument.hasCopy ? 'ja' : 'nein' },
    ];
  };

  const housingData = [
    { label: '', value: '' },
    { label: 'Derzeitige Wohnsituation', value: '' },
    { label: 'Wohnfläche', value: `${data.housing.livingSpace} m²` },
    { label: 'Anzahl Räume', value: data.housing.numberOfRooms },
    { label: 'Gebäudetyp', value: [
      data.housing.buildingType.singleFamily ? 'EFH' : '',
      data.housing.buildingType.singleFamilyWithApartment ? 'EFH mit ELW' : '',
      data.housing.buildingType.semiDetached ? 'RH' : '',
      data.housing.buildingType.apartment ? 'MFH' : ''
    ].filter(Boolean).join(', ') },
    { label: 'Eigentumsverhältnis', value: [
      data.housing.ownership.owned ? 'Eigentum' : '',
      data.housing.ownership.rented ? 'Miete' : '',
      data.housing.ownership.sharedProperty ? 'WG' : ''
    ].filter(Boolean).join(', ') },
    { label: 'Kfz-Abstellplatz', value: [
      data.housing.parking.street ? 'Straße' : '',
      data.housing.parking.carport ? 'Carport' : '',
      data.housing.parking.garage ? 'Garage' : '',
      data.housing.parking.fixedSpot ? 'fester Stellplatz' : '',
      data.housing.parking.other
    ].filter(Boolean).join(', ') },
    { label: 'Fahrräder', value: data.housing.specialRisks.bicycleCount },
    { label: 'Elementarschadenrisiko', value: data.housing.specialRisks.elementaryDamageRisk },
    { label: 'Bauart Wände', value: [
      data.housing.construction.walls.massive ? 'massiv' : '',
      data.housing.construction.walls.type1 ? 'FT I,II' : '',
      data.housing.construction.walls.other
    ].filter(Boolean).join(', ') },
    { label: 'Bauart Dach', value: [
      data.housing.construction.roof.hard ? 'hart' : '',
      data.housing.construction.roof.other
    ].filter(Boolean).join(', ') },
    { label: 'Haustiere', value: data.housing.pets },
    { label: '', value: '' },
    { label: 'Derzeitige Betreuung', value: '' },
    { label: 'Steuerberater Name', value: data.currentSupport.taxConsultant.name },
    { label: 'Steuerberater Firma/Tel', value: data.currentSupport.taxConsultant.companyAndPhone },
    { label: 'Rechtsanwalt Name', value: data.currentSupport.lawyer.name },
    { label: 'Rechtsanwalt Firma/Tel', value: data.currentSupport.lawyer.companyAndPhone },
    { label: 'Vertreter Name', value: data.currentSupport.representative.name },
    { label: 'Vertreter Firma/Tel', value: data.currentSupport.representative.companyAndPhone },
    { label: 'Letzte Finanzprüfung', value: data.currentSupport.lastFinancialReview },
  ];

  return {
    mandant: {
      name: 'Mandant',
      data: [...createPersonData('mandant'), ...housingData]
    },
    partner: {
      name: 'Partner',
      data: createPersonData('partner')
    }
  };
};