import { useContext } from 'react';
import FilePicker from './FilePicker';
import Layout from './Layout';
import ImportConfig from './ImportConfig';
import { SpreadsheetContext } from '../context/SpreadsheetContext';
import { IField } from '../interfaces/IDataStructure';

interface IProps {
  fields: IField[];
  onSubmit: (data: any) => void;
}

const SurveyEnhancement: React.FC<IProps> = ({ fields, onSubmit }) => {
  const { isFileUploaded } = useContext(SpreadsheetContext);

  let renderedContent = <FilePicker />;
  if (isFileUploaded)
    renderedContent = <ImportConfig fields={fields} onSubmit={onSubmit} />;

  return <Layout>{renderedContent}</Layout>;
};

export default SurveyEnhancement;
