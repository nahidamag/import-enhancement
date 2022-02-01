import { Box } from '@mui/material';
import ImportConfigLayout from '../Layout/ImportConfigLayout';
import LeftPanel from './LeftPanel';
import RightPanel from './RightPanel';
import { IField } from '../../interfaces/IDataStructure';

interface IProps {
  fields: IField[];
  onSubmit: (data: any) => void;
}

const ImportConfig: React.FC<IProps> = ({ fields, onSubmit }) => {
  return (
    <ImportConfigLayout>
      <Box sx={{ width: '25vw' }}>
        <LeftPanel fields={fields} onSubmit={onSubmit} />
      </Box>
      <Box>
        <RightPanel />
      </Box>
    </ImportConfigLayout>
  );
};

export default ImportConfig;
