import logo from './logo.svg';
import {Fragment} from 'react';
import { Grid } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { green, pink } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));
const outerTheme = createMuiTheme({
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
  },
});

function App() {

  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();

  const navOptions = [
    {title: 'Home', link: '#'},
    {title: 'About', link: '#'},
    {title: 'Skills', link: '#'},
    {title: 'Services', link: '#'},
    {title: 'Portfolio', link: '#'},
    {title: 'Contact me', link: '#'}
  ];

  return (
    <Fragment>
      <ThemeProvider theme={outerTheme}>
        <AppBar position="static" >
          <Toolbar>
            <Typography variant="h6" className={classes.title} color="inherit">
                <Link 
                  // component="button"
                  color="inherit"
                  href="#"
                  // onClick={() => {
                  //   alert("I'm a button.");
                  // }}
                  >
                  Karla
                </Link>
              {navOptions.map(option => (
                <Link color="inherit" href={option.link}> {option.title}</Link>
              ))}
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
        
        <Box m={2} >
          <Grid container spacing={3}>
            <Grid item xs={12} m={2}>
              <Paper  > xs=12</Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper > xs=12 sm=6</Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper > xs=12 sm=6</Paper>
            </Grid>
          </Grid>
        </Box>
      </ThemeProvider>
    </Fragment>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //   </header>
    // </div>
  );
}

export default App;