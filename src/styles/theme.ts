import { createTheme, ThemeOptions } from '@mui/material/styles';
import { green, orange, grey } from '@mui/material/colors';

const themeValues: ThemeOptions = {
  palette: {
    primary: {
      main: '#3D6F58',
      contrastText: '#E8E4DD',
    },
    secondary: {
      main: '#E8E4DD',
      contrastText: '#2E8E4DD',
    },
    warning: {
      main: '#EDA545',
      contrastText: '#E8E4DD'
    }
  },
};

export const theme = createTheme(themeValues);