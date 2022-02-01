import { createContext, useState } from 'react';
import { IField } from '../interfaces/IDataStructure';
import {
  IAssignMappedFieldData,
  IInitialValue,
  IMappedFieldsData,
  ISpreadSheetRenderOutputData
} from '../interfaces/ISpreadsheetContext';

interface IProps {}

const initialValue = {
  fileName: '',
  isFileUploaded: false,
  data: null,
  mappingField: null,
  mappedFieldsData: null,
  selectedCellInfo: null,
  assignData: (data: any) => {},
  assignFileName: (fileName: string) => {},
  toggleFileUploadState: () => {},
  assignMappingField: (field: IField | null) => {},
  assignMappedFieldsData: (fieldObj: IAssignMappedFieldData) => {},
  assignSelectedCellInfo: (cellInfo: ISpreadSheetRenderOutputData | null) => {},
  removeMappedFieldData: (fieldKey: string) => {}
};

export const SpreadsheetContext = createContext<IInitialValue>(initialValue);

const SpreadsheetContextProvider: React.FC<IProps> = ({ children }) => {
  const [fileName, setFileName] = useState('');
  const [mappingField, setMappingField] = useState<IField | null>(null);
  const [data, setData] = useState(null);
  const [isFileUploaded, setIsFileUploaded] = useState(false);
  const [mappedFieldsData, setMappedFieldsData] =
    useState<IMappedFieldsData | null>(null);
  const [selectedCellInfo, setSelectedCellInfo] =
    useState<ISpreadSheetRenderOutputData | null>(null);

  const assignData = (data: any) => {
    setData(data);
  };

  const assignFileName = (fileName: string) => {
    setFileName(fileName);
  };

  const assignMappingField = (field: IField | null) => {
    setMappingField(field);
  };

  const assignMappedFieldsData = (fieldObj: IAssignMappedFieldData) => {
    const { fieldKey, fieldValue } = fieldObj;
    setMappedFieldsData(prevValues => {
      return prevValues
        ? { ...prevValues, [fieldKey]: fieldValue }
        : { [fieldKey]: fieldValue };
    });
  };

  const removeMappedFieldData = (fieldKey: string) => {
    setMappedFieldsData(prevValues => {
      if (prevValues && prevValues[fieldKey]) delete prevValues[fieldKey];
      return { ...prevValues };
    });
  };

  const assignSelectedCellInfo = (
    cellInfo: ISpreadSheetRenderOutputData | null
  ) => {
    setSelectedCellInfo(cellInfo);
  };

  const toggleFileUploadState = () => {
    assignMappingField(null);
    setMappedFieldsData(null);
    assignSelectedCellInfo(null);
    setIsFileUploaded(p => !p);
  };

  const value = {
    fileName,
    mappedFieldsData,
    isFileUploaded,
    mappingField,
    selectedCellInfo,
    data,
    assignData,
    assignFileName,
    assignMappedFieldsData,
    assignMappingField,
    toggleFileUploadState,
    assignSelectedCellInfo,
    removeMappedFieldData
  };

  return (
    <SpreadsheetContext.Provider value={value}>
      {children}
    </SpreadsheetContext.Provider>
  );
};

export default SpreadsheetContextProvider;
