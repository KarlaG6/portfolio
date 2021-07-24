import {Fragment} from 'react';
import myTheme from './theme.js';
import { Grid, Container, Box, Paper, AppBar, Toolbar, Typography, Link } from '@material-ui/core';
import { makeStyles, ThemeProvider} from '@material-ui/core/styles';
import { spacing } from '@material-ui/system';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
// import {ReactComponent as Blob1} from './assets/blob.svg';

import blob from './assets/blob.svg';
import foto from './assets/photo1.jpeg';
import Home from '@material-ui/icons/Home';
import Hello from './components/Hello';
import AboutMe from './components/AboutMe.js';
import Portfolio from './components/Portfolio.js';
import Aptitudes from './components/Aptitudes.js';
import UpBar from './components/UpBar.js';
import { GitHub, LinkedIn, Code } from '@material-ui/icons';
import { SvgIcon } from '@material-ui/core';
import { ReactComponent as SkypeIcon} from './assets/icons/logotipo-de-skype.svg';
import { Route, Switch } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  heroContent: {
    padding: myTheme.spacing(8, 0, 6),
  },
  footerBar: {
    top: 'auto',
    bottom: 0,
    padding: myTheme.spacing(2, 6),
  },
  footNets: {
    display: 'flex', 
    alignItems: 'center',
  },
  footer: {
    "& div": {
      [myTheme.breakpoints.down('sm')]: {
        margin: 'auto'
      }
    }
  },
  codeCont: {
    display: 'flex', 
    alignSelf: 'center', 
    flexDirection: 'column', 
    alignItems: 'center',
    borderRadius: '8px',
    boxShadow: 'rgb(98 114 189) 0px 2px 14px -1px, rgb(66 71 107 / 86%) 0px 1px 5px 0px, rgb(66 71 107 / 86%) 0px 1px 9px 0px', 
    padding: '2rem',
    margin: 'auto',
    [myTheme.breakpoints.down('sm')]: {
      boxShadow: 'none'
    }
  },
  footCont: {
    [myTheme.breakpoints.down('sm')]: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }
  }
}));

function App() {

  const classes = useStyles();
  // const preventDefault = (event) => event.preventDefault();

  return (
    <Switch>
      <Route exact path="/">
        <Fragment>
          <ThemeProvider theme={myTheme}>
              <UpBar />
              {/* HELLO */}
                <Hello />

              {/* ABOUT ME */}
              <AboutMe />
          
              {/* Aptitudes */}
              <Aptitudes/>

              {/* Portfolio */}
              <Portfolio />

              <AppBar position="static" className={classes.footerBar}>
                <Grid container className={classes.footer}>
                  <Grid item md={6} >
                    <Container className={classes.footCont}>
                      <h2>Follow me or just send me a message on :</h2>
                        <Box className={classes.footNets}><Button color="inherit" href="https://www.linkedin.com/in/karla-g-505045138/"><LinkedIn /> linkedin: karla-g-505045138 </Button></Box>
                        <Box className={classes.footNets}><Button color="inherit" href="https://github.com/KarlaG6"><GitHub />  Github: @KarlaG6</Button></Box>
                        <Box className={classes.footNets}><Button color="inherit"><SvgIcon component={SkypeIcon} viewBox="0 0 600 476.6"/>skype: karlita.galvis</Button></Box>
                        {/* <Box className={classes.footNets}><Button color="inherit">Keep going, u got this</Button></Box> */}
                        <div style={{color: "#ffffff57", fontStyle: "italic"}}>Icono de skype diseñado por <a href="https://www.flaticon.es/autores/dave-gandy" style={{color: "#ffffff57"}} title="Dave Gandy">Dave Gandy</a> from <a href="https://www.flaticon.es/" title="Flaticon" style={{color: "#ffffff57"}}>www.flaticon.es</a></div>
                    </Container>
                  </Grid>
                  <Grid item md={6} className={classes.codeCont}>
                    <Code />
                    <Container>
                      <h1 style={{textAlign: 'center'}}>Code for life</h1>
                    </Container>
                  </Grid>
                </Grid>
            </AppBar>
          </ThemeProvider>
        </Fragment>
      </Route>
    </Switch>
  );
}

export default App;