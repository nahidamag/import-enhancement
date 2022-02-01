import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { useContext, useEffect } from 'react';
import { SpreadsheetContext } from '../../../context/SpreadsheetContext';
import { Button, IconButton, Box, TextField } from '@mui/material';
import { IFieldForm } from '../../../interfaces/IForm';
import {
  containedButtonStyle,
  outlinedButtonStyle,
  primaryColor
} from '../../../styles';
import { Close, PendingActions } from '@mui/icons-material';
import { IField } from '../../../interfaces/IDataStructure';

interface IProps {
  fields: IField[];
  onSubmit: (data: any) => void;
}

interface IForm extends IFieldForm {
  [key: string]: string;
}

const FieldForm: React.FC<IProps> = ({ onSubmit, fields }) => {
  const {
    fileName,
    assignMappingField,
    assignSelectedCellInfo,
    mappedFieldsData,
    removeMappedFieldData,
    mappingField
  } = useContext(SpreadsheetContext);
  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue
  } = useForm<IForm>();

  const submitHandler: SubmitHandler<IForm> = formData => {
    onSubmit({ ...formData, ...mappedFieldsData });
  };

  useEffect(() => {
    setValue('FileNamePattern', fileName);
    if (mappedFieldsData) {
      for (const [key, value] of Object.entries(mappedFieldsData)) {
        setValue(key, value.CellLocation, {
          shouldValidate: true
        });
      }
    }
  }, [fileName, mappedFieldsData, setValue]);

  const buttonClickHandler = (field: IField | null) => {
    assignSelectedCellInfo(null);
    assignMappingField(field);
  };

  const renderedFields = fields.map(fieldObj => {
    const { label, key } = fieldObj;
    const hasFieldData = mappedFieldsData && mappedFieldsData[key];

    let adorementRender = <p></p>;
    if (hasFieldData)
      adorementRender = (
        <IconButton
          sx={outlinedButtonStyle}
          onClick={() => {
            removeMappedFieldData(key);
            setValue(key, '');
          }}
        >
          <Close fontSize="small" />
        </IconButton>
      );

    return (
      <Box key={key} sx={{ display: 'flex' }}>
        <Controller
          name={key}
          defaultValue=''
          control={control}
          render={({ field }) => (
            <TextField
              required={fieldObj.isRequired}
              {...field}
              label={label}
              error={!!errors[key]}
              fullWidth
              size="small"
              margin="normal"
              variant="standard"
              InputProps={{
                readOnly: true,
                endAdornment: adorementRender
              }}
            />
          )}
          rules={{
            required: {
              value: fieldObj.isRequired ? true : false,
              message: `${fieldObj.label} Required`
            }
          }}
        />
        <Box sx={{ display: 'flex' }}>
          {mappingField?.label === label ? (
            <PendingActions
              sx={{
                color: primaryColor,
                mr: 2,
                fontSize: '2rem',
                mt: 4,
                ml: 2
              }}
            />
          ) : (
            <>
              {!hasFieldData && (
                <Button
                  variant="outlined"
                  size="small"
                  sx={{
                    ...outlinedButtonStyle,
                    height: '2.3rem',
                    mt: 3.5,
                    ml: 2
                  }}
                  onClick={() => buttonClickHandler(fieldObj)}
                >
                  Map
                </Button>
              )}
            </>
          )}
        </Box>
      </Box>
    );
  });

  return (
    <Box
      sx={{
        px: 3,
        height: '91.5vh',
        overflowY: 'auto'
      }}
    >
      <form onSubmit={handleSubmit(submitHandler)}>
        <Controller
          name="Customer"
          defaultValue=""
          control={control}
          render={({ field }) => (
            <TextField
              required
              {...field}
              label="Customer"
              error={!!errors.Customer}
              fullWidth
              size="small"
              margin="normal"
              variant="standard"
            />
          )}
          rules={{
            required: {
              value: true,
              message: 'Customer Name Required'
            }
          }}
        />

        <Controller
          name="MappingName"
          defaultValue=""
          control={control}
          render={({ field }) => (
            <TextField
              required
              {...field}
              label="Mapping Name"
              error={!!errors.MappingName}
              fullWidth
              size="small"
              margin="normal"
              variant="standard"
            />
          )}
          rules={{
            required: {
              value: true,
              message: 'Mapping Name Required'
            }
          }}
        />
        <Controller
          name="FileNamePattern"
          defaultValue=""
          control={control}
          render={({ field }) => (
            <TextField
              required
              {...field}
              label="File Name Pattern"
              error={!!errors.FileNamePattern}
              fullWidth
              size="small"
              margin="normal"
              variant="standard"
            />
          )}
          rules={{
            required: {
              value: true,
              message: 'File Name Pattern Required'
            }
          }}
        />

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            mt: 1
          }}
        >
          {renderedFields}
        </Box>

        <Button
          sx={{
            mt: 2,
            width: '100%',
            ...containedButtonStyle,
            marginBottom: '20px'
          }}
          variant="contained"
          type="submit"
        >
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default FieldForm;
