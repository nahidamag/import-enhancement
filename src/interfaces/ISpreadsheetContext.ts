import { IField } from './IDataStructure';

export type MappingCellFormFields =
  | 'DataType'
  | 'RowNumber'
  | 'ColNumber'
  | 'CellLocation';

export interface ICellMappingForm {
  CellLocation: string;
}

export interface ISpreadSheetRenderOutputData extends ICellMappingForm {
  RowNumber: string;
  ColNumber: string;
}

export interface IMappingFieldValues extends ISpreadSheetRenderOutputData {
  DataType: string;
}

export interface IAssignMappedFieldData {
  fieldKey: string;
  fieldValue: IMappingFieldValues;
}

export interface IMappedFieldsData {
  [key: string]: IMappingFieldValues;
}

export interface IInitialValue {
  fileName: string;
  isFileUploaded: boolean;
  data: null;
  mappingField: IField | null;
  mappedFieldsData: null | IMappedFieldsData;
  selectedCellInfo: null | ISpreadSheetRenderOutputData;
  assignData: (data: any) => void;
  assignFileName: (fileName: string) => void;
  toggleFileUploadState: () => void;
  assignMappingField: (field: IField | null) => void;
  assignMappedFieldsData: (fieldObj: IAssignMappedFieldData) => void;
  assignSelectedCellInfo: (
    cellInfo: ISpreadSheetRenderOutputData | null
  ) => void;
  removeMappedFieldData: (key: string) => void;
}
