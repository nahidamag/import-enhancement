import { Box, Card, Typography } from '@mui/material';
import { useContext, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import LuckyExcel from 'luckyexcel';
import { SpreadsheetContext } from '../context/SpreadsheetContext';
import { flexCenter, grayColor, primaryColor } from '../styles';

const FilePicker = () => {
  const { assignData, assignFileName, toggleFileUploadState } =
    useContext(SpreadsheetContext);
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    maxFiles: 1,
    accept: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
  });

  useEffect(() => {
    const file = acceptedFiles[0];
    if (file) {
      toggleFileUploadState();
      LuckyExcel.transformExcelToLucky(file, function (exportJson: any) {
        assignData(exportJson);
        assignFileName(file.name);
      });
    }
  }, [acceptedFiles, assignData, assignFileName, toggleFileUploadState]);

  return (
    <Card sx={{ borderRadius: '1rem' }}>
      <Box
        sx={{
          ...flexCenter,
          m: 6,
          border: `2px dashed ${primaryColor}`,
          borderRadius: '1rem',
          textAlign: 'center',
          width: '40vw',
          height: '30vh'
        }}
        {...getRootProps({ className: 'dropzone' })}
      >
        <input {...getInputProps()} />
        <img
          src="images/spreadsheet.png"
          alt="Spreadsheet"
          height="100px"
          width="100px"
        />

        <Typography
          sx={{
            textTransform: 'uppercase',
            color: grayColor,
            fontWeight: '500'
          }}
          component="h6"
        >
          Drop a spreadsheet file or click to choose one.
          <Typography sx={{ fontSize: '0.8rem', mt: 1 }}>
            Only .xlsx format file is supported.
          </Typography>
        </Typography>
      </Box>
    </Card>
  );
};

export default FilePicker;
