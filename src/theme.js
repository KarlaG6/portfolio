import { createMuiTheme } from '@material-ui/core/styles';

const myTheme = createMuiTheme({
    palette: {
      primary: {
        light: '#93a0ef',
        main: '#6272BD',
        dark: '#2e478b',
        contrastText: '#fff'
      },
      secondary: {
        light: '#f2ffff',
        main: '#BFF0CF',
        dark: '#8ebd9e',
        contrastText: '#fff'
      },
      tertiary: {
        it: '#d9ddbd'
      }
    },
    typography: {
      fontFamily: `'Segoe UI', "Helvetica", "Arial", sans-serif`
    }
  });
export default myTheme;