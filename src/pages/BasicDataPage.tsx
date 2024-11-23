import React from 'react';
import { FormField } from '../components/FormField';
import { HeaderData } from '../types';

interface BasicDataPageProps {
  data: HeaderData;
  onUpdate: (field: keyof HeaderData, value: string) => void;
}

export const BasicDataPage: React.FC<BasicDataPageProps> = ({ 
  data, 
  onUpdate,
}) => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Grunddaten</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <FormField
          label="Name Mandant"
          value={data.mandantName}
          onChange={(value) => onUpdate('mandantName', value)}
        />
        <FormField
          label="Name Makler"
          value={data.maklerName}
          onChange={(value) => onUpdate('maklerName', value)}
        />
        <FormField
          label="Erhoben am"
          type="date"
          value={data.dateCollected}
          onChange={(value) => onUpdate('dateCollected', value)}
        />
      </div>
    </div>
  );
};