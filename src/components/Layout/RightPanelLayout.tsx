import { Box } from '@mui/material';

interface IProps {}

const RightPanelLayout: React.FC<IProps> = ({ children }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
       
      }}
    >
      {children}
    </Box>
  );
};

export default RightPanelLayout;
