import { Box } from '@mui/material';

interface IProps {}

const ImportConfigLayout: React.FC<IProps> = ({ children }) => {
  return (
    <Box sx={{ display: 'flex', width: '100vw', backgroundColor: '#fff' }}>
      {children}
    </Box>
  );
};

export default ImportConfigLayout;
