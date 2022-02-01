import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { primaryColor, bluishColor } from '../../styles';

interface IProps {}

const Layout: React.FC<IProps> = ({ children }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ backgroundColor: primaryColor }} position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Import Configuration
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          backgroundColor: bluishColor,
          height: '91vh',
          width: '100vw',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
