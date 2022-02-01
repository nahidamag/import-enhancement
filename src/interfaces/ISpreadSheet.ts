export interface ISpreadSheetData {
  cell: string;
  rowNumber: number;
  columnNumber: number;
  value: string;
}

export type SpreadSheetFinalData = {
  [key: string]: ISpreadSheetData[];
};

export interface ISheetnameValuePair {
  sheetName: string;
  value: any;
}

export interface IWorkbook {
  Sheets: any;
  SheetNames: string[];
}
