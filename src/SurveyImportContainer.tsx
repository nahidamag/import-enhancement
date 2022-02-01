import SpreadsheetContextProvider from './context/SpreadsheetContext';
import { IField } from './interfaces/IDataStructure';
import SurveyEnhancement from './components/ServeyEnhancement';

interface IProps {
  fields: IField[];
  onSubmit: (data: any) => void;
}

const SurveyImportContainer: React.FC<IProps> = ({ onSubmit, fields }) => {
  return (
    <SpreadsheetContextProvider>
      <SurveyEnhancement fields={fields} onSubmit={onSubmit} />
    </SpreadsheetContextProvider>
  );
};

export default SurveyImportContainer;
