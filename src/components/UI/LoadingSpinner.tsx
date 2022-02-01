import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const LoadingSpinner = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="45vh"
    >
      <CircularProgress />
      <Typography variant="h6">Loading...</Typography>
    </Box>
  );
};

export default LoadingSpinner;
