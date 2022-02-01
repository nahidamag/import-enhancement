import { Box, Button, Typography } from '@mui/material';
import { useContext } from 'react';
import RightPanelLayout from '../../Layout/RightPanelLayout';
import SpreadsheetRender from './SpreadsheetRender';
import { SpreadsheetContext } from '../../../context/SpreadsheetContext';
import CellMappingForm from './CellMappingForm';
import {
  flexCenter,
  outlinedButtonStyle,
  primaryColor,
  flexColumnCenter
} from '../../../styles';
import ReplayIcon from '@mui/icons-material/Replay';

const RightPanel = () => {
  const { data, mappingField, toggleFileUploadState } =
    useContext(SpreadsheetContext);

  return (
    <RightPanelLayout>
      <Box
        sx={{
          ...flexCenter,
          height: '20vh'
        }}
      >
        {mappingField ? (
          <CellMappingForm />
        ) : (
          <Box sx={flexColumnCenter}>
            <Typography
              variant="h5"
              sx={{
                textTransform: 'uppercase',
                fontWeight: 'bold',
                color: primaryColor,
                mb: 2
              }}
            >
              Select A Field From Left panel To Map
            </Typography>
            <Button
              sx={outlinedButtonStyle}
              variant="outlined"
              onClick={toggleFileUploadState}
              startIcon={<ReplayIcon />}
            >
              Upload Again
            </Button>
          </Box>
        )}
      </Box>
      <Box>{data && <SpreadsheetRender data={data} />}</Box>
    </RightPanelLayout>
  );
};

export default RightPanel;
