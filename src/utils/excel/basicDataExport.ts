import { HeaderData } from '../../types';
import { ExcelData } from './types';

export const getBasicDataExport = (data: HeaderData): Partial<ExcelData> => ({
  mandant: {
    name: 'Mandant',
    data: [
      { label: 'Name Mandant', value: data.mandantName },
      { label: 'Name Makler', value: data.maklerName },
      { label: 'Erhoben am', value: data.dateCollected },
    ]
  },
  partner: {
    name: 'Partner',
    data: []
  }
});