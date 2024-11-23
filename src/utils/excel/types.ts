export interface ExcelRow {
  label: string;
  value: any;
}

export interface ExcelSheet {
  name: string;
  data: ExcelRow[];
}

export interface ExcelData {
  mandant: ExcelSheet;
  partner: ExcelSheet;
}