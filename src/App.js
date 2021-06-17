import logo from './logo.svg';
import {Fragment} from 'react';
import theme from './theme.js';
import { Grid, Container } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { green, pink } from '@material-ui/core/colors';
import {ReactComponent as Blob1} from './assets/blob.svg';

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
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
}));


function App() {

  const classes = useStyles();
  // const preventDefault = (event) => event.preventDefault();

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
      <ThemeProvider theme={theme}>
        <AppBar position="static" >
          <Toolbar>
            <Box flexGrow={1}><Button color="inherit">Karla</Button></Box>
            <Box >
              <Typography variant="h6" className={classes.title} color="inherit">
              <Grid container spacing={3}>
                {navOptions.map(option => (
                  <Grid item>
                    <Link color="inherit" href={option.link}> {option.title} </Link>
                  </Grid>
                ))}
              </Grid>
            </Typography>
              
            </Box>
          </Toolbar>
        </AppBar>

        <Container maxWidth="md" component="main" className={classes.heroContent}>
        <Grid container spacing={3}>
          <Grid item xs={6}>         
            <Typography component="h2" variant="h2" color="textSecondary" gutterBottom>
              <Box fontSize="h3.fontSize" color="textSecondary" fontWeight="fontWeightBold">
              Hola, soy Karla
              </Box>
              <Box fontSize="h5.fontSize" color="textSecondary" fontWeight="fontWeightMedium">
                Frontend developer
              </Box>
              <Box fontSize={19}  color="textSecondary">
                Me apasiona aprender cosas nuevas en el ámbito de la tecnología, y como esto es una tarea de nunca acabar, he terminado por desarrollar considerablemente mi lado autodidacta, lo cual me llena de confianza para asumir nuevos retos.
              </Box>
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Blob1 />
            {/* <svg  viewBox="0 0 200 187" xmlns="http://www.w3.org/2000/svg" >
    <mask id="mask0" mask-type="alpha">
        <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
        130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
        97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
        0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"/>
    </mask>
    <g mask="url(#mask0)">
        <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
        165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
        129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
        -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"/>
        <image href="data:fotokarlablur.png" width="100px" height="100px"/>
    </g>
</svg> */}
          </Grid>
        </Grid>
        </Container>
        
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