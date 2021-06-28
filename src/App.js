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
import Img1 from './assets/Fig1';

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
            <Typography component="h2" variant="h2" color="textSecondary" alignCenter>
              <Box fontSize="h3.fontSize" color="textSecondary" fontWeight="fontWeightBold" m={2} mx="auto">
              Hola, soy Karla
              </Box>
              <Box fontSize="h5.fontSize" color="textSecondary" fontWeight="fontWeightMedium" >
                Frontend developer
              </Box>
              <Box fontSize={19}  color="textSecondary" fontWeight="400" m={2} mx="auto">
                Me apasiona aprender cosas nuevas en el ámbito de la tecnología, y como esto es una tarea de nunca acabar, he terminado por desarrollar considerablemente mi lado autodidacta, lo cual me llena de confianza para asumir nuevos retos.
              </Box>
            </Typography>
            <Button variant="contained" color="primary">Contact Me</Button>
          </Grid>
          <Grid item xs={6}>
            <Img1 />
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