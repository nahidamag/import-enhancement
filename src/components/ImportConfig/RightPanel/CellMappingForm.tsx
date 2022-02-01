import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { useContext, useEffect } from 'react';
import { SpreadsheetContext } from '../../../context/SpreadsheetContext';
import SaveIcon from '@mui/icons-material/Save';
import { Button, MenuItem, Typography, Box, TextField } from '@mui/material';
import {
  IMappingFieldValues as IForm,
  MappingCellFormFields
} from '../../../interfaces/ISpreadsheetContext';
import {
  containedButtonStyle,
  outlinedButtonStyle,
  primaryColor
} from '../../../styles';
import CloseIcon from '@mui/icons-material/Close';

const CellMappingForm = () => {
  const {
    mappingField,
    selectedCellInfo,
    assignMappedFieldsData,
    assignMappingField
  } = useContext(SpreadsheetContext);
  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
    reset
  } = useForm<IForm>();

  const submitHandler: SubmitHandler<IForm> = formData => {
    assignMappedFieldsData({
      fieldKey: mappingField!.key,
      fieldValue: formData
    });
    reset();
    assignMappingField(null);
  };

  useEffect(() => {
    if (selectedCellInfo && mappingField) {
      for (const [key, value] of Object.entries(selectedCellInfo)) {
        const newKey = key as MappingCellFormFields;
        setValue(newKey, value);
      }
    }
  }, [mappingField, selectedCellInfo, setValue]);

  return (
    <form style={{ width: '75vw' }} onSubmit={handleSubmit(submitHandler)}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            px: 2
          }}
        >
          <Typography
            sx={{
              fontWeight: 500,
              color: primaryColor,
              textTransform: 'uppercase'
            }}
            variant="h5"
          >
            {`Mapping - ${mappingField?.label}`}
            <Typography variant="subtitle2" component="p">
              Select a cell for the mapping
            </Typography>
          </Typography>

          <Box>
            <Button
              sx={{ ...containedButtonStyle, mr: 2 }}
              variant="contained"
              startIcon={<SaveIcon />}
              type="submit"
            >
              Save
            </Button>
            <Button
              sx={outlinedButtonStyle}
              variant="outlined"
              startIcon={<CloseIcon />}
              onClick={() => assignMappingField(null)}
            >
              Cancel
            </Button>
          </Box>
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            px: 2
          }}
        >
          <Controller
            name="DataType"
            defaultValue=""
            control={control}
            render={({ field }) => (
              <TextField
                fullWidth
                sx={{ mr: 2 }}
                select
                required
                {...field}
                label="Data Type"
                error={!!errors.DataType}
                size="small"
                margin="normal"
                variant="standard"
              >
                <MenuItem value="string">String</MenuItem>
                <MenuItem value="number">Number</MenuItem>
                <MenuItem value="boolean">Boolean</MenuItem>
              </TextField>
            )}
            rules={{
              required: {
                value: true,
                message: 'DataType Required'
              }
            }}
          />
          <Controller
            name="CellLocation"
            defaultValue=""
            control={control}
            render={({ field }) => (
              <TextField
                fullWidth
                sx={{ ml: 2 }}
                required
                {...field}
                label="Cell Location"
                error={!!errors.CellLocation}
                size="small"
                margin="normal"
                variant="standard"
                InputProps={{ readOnly: true }}
              />
            )}
            rules={{
              required: {
                value: true,
                message: 'Cell Location Required'
              }
            }}
          />
        </Box>
      </Box>
    </form>
  );
};

export default CellMappingForm;

{
  /* <Box sx={{ display: 'flex', flexDirection: 'column' }}>
<Box
  sx={{
    display: 'flex',
    justifyContent: 'space-between',
    px: 2
  }}
>
  <Typography
    sx={{
      fontWeight: 500,
      color: primaryColor,
      textTransform: 'uppercase'
    }}
    variant="h5"
  >
    {`Mapping - ${mappingField?.label}`}
    <Typography variant="subtitle2" component="p">
      Select a cell for the mapping
    </Typography>
  </Typography>

  <Box>
    <Button
      sx={{ ...containedButtonStyle, mr: 2 }}
      variant="contained"
      startIcon={<SaveIcon />}
      type="submit"
    >
      Save
    </Button>
    <Button
      sx={outlinedButtonStyle}
      variant="outlined"
      startIcon={<CloseIcon />}
      onClick={() => assignMappingField(null)}
    >
      Cancel
    </Button>
  </Box>
</Box>

<Box sx={{ display: 'flex', justifyContent: 'space-between', px: 2 }}>
  <Controller
    name="DataType"
    defaultValue=""
    control={control}
    render={({ field }) => (
      <TextField
        sx={{ width: '25%' }}
        select
        required
        {...field}
        label="Data Type"
        error={!!errors.DataType}
        size="small"
        margin="normal"
        variant="standard"
      >
        <MenuItem value="string">String</MenuItem>
        <MenuItem value="number">Number</MenuItem>
        <MenuItem value="boolean">Boolean</MenuItem>
      </TextField>
    )}
    rules={{
      required: {
        value: true,
        message: 'DataType Required'
      }
    }}
  />
  <Controller
    name="CellLocation"
    defaultValue=""
    control={control}
    render={({ field }) => (
      <TextField
        sx={{ width: '25%' }}
        required
        {...field}
        label="Cell Location"
        error={!!errors.CellLocation}
        size="small"
        margin="normal"
        variant="standard"
        InputProps={{ readOnly: true }}
      />
    )}
    rules={{
      required: {
        value: true,
        message: 'Cell Location Required'
      }
    }}
  />
</Box>
</Box> */
}
