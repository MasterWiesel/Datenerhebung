import React, { useRef } from 'react';
import { FinancialConceptOrder, HeaderData } from '../types';
import { FileDown } from 'lucide-react';
import html2pdf from 'html2pdf.js';

interface FinancialConceptOrderPageProps {
  data: FinancialConceptOrder;
  onUpdate: (data: FinancialConceptOrder) => void;
  headerData: HeaderData;
}

export const FinancialConceptOrderPage: React.FC<FinancialConceptOrderPageProps> = ({
  data,
  onUpdate,
  headerData
}) => {
  const contentRef = useRef<HTMLDivElement>(null);

  const handleDownloadPDF = () => {
    const element = contentRef.current;
    if (!element) return;

    const opt = {
      margin: [10, 10],
      filename: `${headerData.mandantName || 'finanzkonzept'}-auftrag.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(element).save();
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Auftrag zur Erstellung Ihres Finanzkonzeptes</h1>
      </div>

      <div ref={contentRef} className="space-y-8 bg-white p-8">
        <h1 className="text-2xl font-bold text-gray-900 text-center mb-8">
          Auftrag zur Erstellung Ihres Finanzkonzeptes
        </h1>

        {/* Client Information */}
        <div className="space-y-4">
          <input
            type="text"
            value={data.clientName}
            onChange={(e) => onUpdate({ ...data, clientName: e.target.value })}
            className="w-full px-3 py-2 border-b border-gray-300 focus:border-blue-500 outline-none"
            placeholder="Name"
          />
          <input
            type="text"
            value={data.clientAddress}
            onChange={(e) => onUpdate({ ...data, clientAddress: e.target.value })}
            className="w-full px-3 py-2 border-b border-gray-300 focus:border-blue-500 outline-none"
            placeholder="Adresse"
          />
          <input
            type="text"
            value={data.clientDetails}
            onChange={(e) => onUpdate({ ...data, clientDetails: e.target.value })}
            className="w-full px-3 py-2 border-b border-gray-300 focus:border-blue-500 outline-none"
            placeholder="Weitere Details"
          />

          <div className="text-center text-sm text-gray-600 my-4">
            - nachstehend Auftraggeber genannt -
          </div>
          <div className="text-center text-sm text-gray-600 my-4">
            und
          </div>

          <input
            type="text"
            value={data.brokerName}
            onChange={(e) => onUpdate({ ...data, brokerName: e.target.value })}
            className="w-full px-3 py-2 border-b border-gray-300 focus:border-blue-500 outline-none"
            placeholder="Name"
          />
          <input
            type="text"
            value={data.brokerAddress}
            onChange={(e) => onUpdate({ ...data, brokerAddress: e.target.value })}
            className="w-full px-3 py-2 border-b border-gray-300 focus:border-blue-500 outline-none"
            placeholder="Adresse"
          />
          <input
            type="text"
            value={data.brokerDetails}
            onChange={(e) => onUpdate({ ...data, brokerDetails: e.target.value })}
            className="w-full px-3 py-2 border-b border-gray-300 focus:border-blue-500 outline-none"
            placeholder="Weitere Details"
          />

          <div className="text-center text-sm text-gray-600 my-4">
            - nachstehend Finanzmakler genannt -
          </div>
        </div>

        <div className="text-sm text-gray-700 leading-relaxed">
          Der Auftraggeber beauftragt den Finanzmakler bzw. mit diesem in Untervollmacht vertraglich gebundene Vermittler bzw. Service-gesellschaften mit der Erstellung eines Finanzkonzeptes. Hierzu stellt der Auftraggeber dem Finanzmakler alle notwendigen Daten zur Verfügung. Die vorgenannte Beauftragung löst keine Verpflichtung zum Abschluss von Verträgen oder zum Kauf von Produkten für den Auftraggeber aus.
        </div>

        {/* Cost Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Dienstleistung</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Kostenbeteiligung</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Fälligkeit</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Zahlung</th>
                <th className="px-4 py-2 text-center text-sm font-medium text-gray-500 w-16"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2">Erstellung Finanzkonzept</td>
                <td className="px-4 py-2">+ 5 Empfehlungen</td>
                <td className="px-4 py-2">nach Vereinbarung</td>
                <td className="px-4 py-2">nach Vereinbarung</td>
                <td className="px-4 py-2 text-center">
                  <input
                    type="radio"
                    checked={data.costOption === 'recommendations'}
                    onChange={() => onUpdate({ ...data, costOption: 'recommendations' })}
                    className="form-radio"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Special Agreements */}
        <div className="space-y-2">
          <div className="font-medium text-gray-700">Besondere Vereinbarungen:</div>
          <textarea
            value={data.specialAgreements}
            onChange={(e) => onUpdate({ ...data, specialAgreements: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md h-40"
            placeholder="Besondere Vereinbarungen hier eingeben..."
          />
        </div>

        {/* Data Protection Consent */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">
            Einwilligungsklauseln nach dem Bundesdatenschutzgesetz (BDSG)
          </h2>
          <div className="text-sm text-gray-700 leading-relaxed">
            Der Mandant erklärt sich damit einverstanden, dass die Daten unter Beachtung der Vorschriften des Bundesdatenschutzgesetzes zum Zwecke der Weiterverarbeitung bei dem Finanzmakler - auch elektronisch - gespeichert und an vom Finanzmakler empfohlene Produktanbieter und/oder mit diesem vertraglich verbundene Vermittler oder Servicegesellschaften zur Antrags- und Vertragsverarbeitung und ggf. Archivierung weitergeleitet werden. Diese Einwilligung gilt auch unabhängig vom Zustandekommen eines Vertrages sowie für entsprechende Prüfungen bei anderweitig beantragten Verträgen und bei künftigen Anträgen. Jederzeit widerrufbar willigt der Mandant ein, dass der Finanzmakler seine allgemeinen Antrags-, Vertrags-, und Leistungsdaten für die Betreuung und Beratung im Rahmen des Maklermandats nutzen darf.
          </div>
          <div className="flex items-center space-x-2">
            <div className="text-sm text-gray-700">Die Erstinformation des Finanzmaklers gem. § 11 VersVermV ist dem Kunden übergeben worden am</div>
            <input
              type="text"
              value={data.initialInformationDate || ''}
              onChange={(e) => onUpdate({ ...data, initialInformationDate: e.target.value })}
              className="flex-1 px-3 py-2 border-b border-gray-300 focus:border-blue-500 outline-none"
              placeholder="Datum"
            />
          </div>
        </div>

        {/* Signature Fields */}
        <div className="mt-16">
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-2">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={data.place}
                  onChange={(e) => onUpdate({ ...data, place: e.target.value })}
                  className="flex-1 px-3 py-2 border-b border-gray-300 focus:border-blue-500 outline-none"
                  placeholder="Ort"
                />
                <input
                  type="date"
                  value={data.date}
                  onChange={(e) => onUpdate({ ...data, date: e.target.value })}
                  className="flex-1 px-3 py-2 border-b border-gray-300 focus:border-blue-500 outline-none"
                />
              </div>
              <div className="text-sm text-gray-600">Ort, Datum</div>
            </div>
            <div className="space-y-2">
              <div className="border-b border-gray-300 mt-8"></div>
              <div className="text-sm text-gray-600">Auftraggeber</div>
              <br></br>
               <button
          onClick={handleDownloadPDF}
          className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          <FileDown className="w-4 h-4 mr-2" />
          Als PDF speichern
        </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};