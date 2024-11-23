import * as XLSX from 'xlsx';
import { ExcelData, ExcelSheet } from './types';
import { getBasicDataExport } from './basicDataExport';
import { getPrioritiesExport } from './prioritiesExport';
import { getWishesExport } from './wishesExport';
import { getFinancialExport } from './financialExport';
import { getOtherDataExport } from './otherDataExport';
import { getIncomeSecurityExport } from './incomeSecurityExport';
import { getContractStatusExport } from './contractStatusExport';
import { getFinalQuestionsExport } from './finalQuestionsExport';

const mergeExcelData = (...dataSets: Partial<ExcelData>[]): ExcelData => {
  const result: ExcelData = {
    mandant: { name: 'Mandant', data: [] },
    partner: { name: 'Partner', data: [] }
  };

  dataSets.forEach(dataSet => {
    if (dataSet.mandant) {
      result.mandant.data.push(...dataSet.mandant.data);
    }
    if (dataSet.partner) {
      result.partner.data.push(...dataSet.partner.data);
    }
  });

  return result;
};

const convertSheetToAoa = (sheet: ExcelSheet) => {
  return sheet.data.map(row => [row.label, row.value]);
};

export const exportToExcel = (allData: any) => {
  const excelData = mergeExcelData(
    getBasicDataExport(allData.headerData),
    getPrioritiesExport(allData.priorityRatings),
    getWishesExport(allData.wishesData, allData.planningCriteria, allData.stateSubsidies),
    getFinancialExport(allData.financialData),
    getOtherDataExport(allData.otherData),
    getIncomeSecurityExport(allData.incomeSecurity, allData.retirementPlanning),
    getContractStatusExport(allData.contractStatus),
    getFinalQuestionsExport(allData.finalQuestions)
  );
  
  const workbook = XLSX.utils.book_new();
  
  // Convert sheets to AOA format and add to workbook
  const mandantWs = XLSX.utils.aoa_to_sheet(convertSheetToAoa(excelData.mandant));
  const partnerWs = XLSX.utils.aoa_to_sheet(convertSheetToAoa(excelData.partner));
  
  // Set column widths
  const wscols = [{ wch: 50 }, { wch: 70 }];
  mandantWs['!cols'] = wscols;
  partnerWs['!cols'] = wscols;

  // Add worksheets to workbook
  XLSX.utils.book_append_sheet(workbook, mandantWs, 'Mandant');
  XLSX.utils.book_append_sheet(workbook, partnerWs, 'Partner');

  // Generate Excel file
  const fileName = `${allData.headerData.mandantName}_DE.xlsx`;
  XLSX.writeFile(workbook, fileName);
};