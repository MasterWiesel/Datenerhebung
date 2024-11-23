import * as XLSX from 'xlsx';

export const exportToExcel = (allData: any) => {
  const { headerData, priorityRatings, wishesData, planningCriteria, stateSubsidies, clientData, financialData, otherData } = allData;

  // Prepare Mandant data
  const mandantData = [
    ['Name Mandant', headerData.mandantName],
    ['Name Makler', headerData.maklerName],
    ['Erhoben am', headerData.dateCollected],
    [''],
    ['Prioritäten'],
    ['Optimale Ausschöpfung staatlicher Vergünstigungen', priorityRatings?.stateSubsidies || ''],
    ['Reduzierung von Steuern und Sozialabgaben', priorityRatings?.taxReduction || ''],
    ['Einsparung unnötiger Beiträge', priorityRatings?.unnecessaryContributions || ''],
    // Weitere Prioritäten hier...
    [''],
    ['Wünsche'],
    ['Kurzfristige Wünsche (0-3 Jahre)'],
    ...(wishesData?.shortTerm?.wishes?.map(wish => ['', wish.text]) || []),
    [''],
    ['Mittelfristige Wünsche (3-10 Jahre)'],
    ...(wishesData?.mediumTerm?.wishes?.map(wish => ['', wish.text]) || []),
    [''],
    ['Langfristige Wünsche (ab 10 Jahre)'],
    ...(wishesData?.longTerm?.wishes?.map(wish => ['', wish.text]) || []),
    [''],
    ['Einnahmen'],
    ['Bruttoeinkommen monatlich', financialData.mandant.income.monthlyGrossIncome],
    ['Nettoeinkommen monatlich', financialData.mandant.income.monthlyNetIncome],
    // Weitere Einnahmen hier...
    [''],
    ['Ausgaben (monatlich)'],
    ['Miete warm', financialData.mandant.expenses.rentWarm.monthly],
    ['Strom/Gas', financialData.mandant.expenses.powerGas.monthly],
    // Weitere monatliche Ausgaben hier...
    [''],
    ['Ausgaben (jährlich)'],
    ['Miete warm', financialData.mandant.expenses.rentWarm.yearly],
    ['Strom/Gas', financialData.mandant.expenses.powerGas.yearly],
    // Weitere jährliche Ausgaben hier...
    [''],
    ['Kontakt/Kommunikation/Bankverbindung'],
    ['Adresse', clientData.mandant.contact.address],
    ['Telefon privat', clientData.mandant.contact.phonePrivate],
    // Weitere Kontaktinformationen hier...
    [''],
    ['Sonstiges'],
    ['SV-Nummer', otherData.mandant.svNumber],
    ['Steuernummer', otherData.mandant.taxNumber],
    ['Steuer-ID', otherData.mandant.taxId],
    // Weitere sonstige Daten hier...
  ];

  // Partner data follows the same structure as Mandant data
  const partnerData = [
    ['Einnahmen'],
    ['Bruttoeinkommen monatlich', financialData.partner.income.monthlyGrossIncome],
    ['Nettoeinkommen monatlich', financialData.partner.income.monthlyNetIncome],
    // Weitere Einnahmen hier...
    [''],
    ['Ausgaben (monatlich)'],
    ['Miete warm', financialData.partner.expenses.rentWarm.monthly],
    ['Strom/Gas', financialData.partner.expenses.powerGas.monthly],
    // Weitere monatliche Ausgaben hier...
    [''],
    ['Ausgaben (jährlich)'],
    ['Miete warm', financialData.partner.expenses.rentWarm.yearly],
    ['Strom/Gas', financialData.partner.expenses.powerGas.yearly],
    // Weitere jährliche Ausgaben hier...
    [''],
    ['Kontakt/Kommunikation/Bankverbindung'],
    ['Adresse', clientData.partner.contact.address],
    ['Telefon privat', clientData.partner.contact.phonePrivate],
    // Weitere Kontaktinformationen hier...
    [''],
    ['Sonstiges'],
    ['SV-Nummer', otherData.partner.svNumber],
    ['Steuernummer', otherData.partner.taxNumber],
    ['Steuer-ID', otherData.partner.taxId],
    // Weitere sonstige Daten hier...
  ];

  // Create workbook
  const workbook = XLSX.utils.book_new();
  
  // Create worksheets
  const mandantWs = XLSX.utils.aoa_to_sheet(mandantData);
  const partnerWs = XLSX.utils.aoa_to_sheet(partnerData);
  
  // Set column widths
  const wscols = [{ wch: 50 }, { wch: 70 }];
  mandantWs['!cols'] = wscols;
  partnerWs['!cols'] = wscols;

  // Add worksheets to workbook
  XLSX.utils.book_append_sheet(workbook, mandantWs, 'Mandant');
  XLSX.utils.book_append_sheet(workbook, partnerWs, 'Partner');

  // Generate Excel file
  const fileName = `${headerData.mandantName}_DE.xlsx`;
  XLSX.writeFile(workbook, fileName);
};
