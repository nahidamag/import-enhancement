import { SxProps } from '@mui/material';
import { Theme } from '@mui/system';

// Colors
export const primaryColor = '#cf8d48';
export const bluishColor = '#e3f2fd';
export const grayColor = '#616161';
export const deepPrimaryColor = '#9C5A15';

export const flexCenter: SxProps<Theme> = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};

export const flexColumnCenter: SxProps<Theme> = {
  ...flexCenter,
  flexDirection: 'column'
};

export const outlinedButtonStyle = {
  color: primaryColor,
  borderColor: primaryColor,
  ':hover': {
    color: deepPrimaryColor,
    borderColor: deepPrimaryColor
  }
};

export const containedButtonStyle = {
  backgroundColor: primaryColor,
  ':hover': {
    backgroundColor: deepPrimaryColor
  }
};
