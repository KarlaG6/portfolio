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
import { Accordion, AccordionSummary, AccordionDetails } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LinearProgress from '@material-ui/core/LinearProgress';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@material-ui/lab';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import Home from '@material-ui/icons/Home';
import Hello from './components/Hello';
import AboutMe from './components/AboutMe.js';
import Portfolio from './components/Portfolio.js';
import Aptitudes from './components/Aptitudes.js';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: myTheme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  heroContent: {
    padding: myTheme.spacing(8, 0, 6),
  },
  myimg: {
    borderRadius: '8px',
    boxShadow: '0px 2px 14px -1px rgb(146 148 146), 0px 1px 5px 0px rgb(66 71 107 / 86%), 0px 1px 9px 0px rgb(66 71 107 / 86%)',
    objectFit: 'cover',
    height: '80%',
    objectPosition: '0% 100%'
  },
  paper: {
    padding: '6px 16px',
  },
  secondaryTail: {
    backgroundColor: myTheme.palette.primary.light,
  },

  myHello: {
    background: `url(${blob}) no-repeat`,
    backgroundPositionY: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start'
    
  },

  footerBar: {
    top: 'auto',
    bottom: 0,
  },

  cardRoot: {
    display: 'flex',
    justifyContent: 'space-evenly',
    boxShadow: 'none'
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  divContent: {
    alignSelf: 'center',
    marginLeft: '1rem',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: '40%',
    height: 'fit-content',
    borderRadius: '8px',
    boxShadow: '0px 2px 14px -1px rgb(146 148 146), 0px 1px 5px 0px rgb(66 71 107 / 86%), 0px 1px 9px 0px rgb(66 71 107 / 86%)',
    marginTop: '1rem',
    marginBottom: '1rem'
  },
  playIcon: {
    height: 38,
    width: 38,
  },

}));



function App() {

  const classes = useStyles();
  // const preventDefault = (event) => event.preventDefault();

  const navOptions = [
    {title: 'Home', link: '#'},
    {title: 'About', link: '#aboutMe'},
    {title: 'Skills', link: '#skills'},
    {title: 'Services', link: '#services'},
    {title: 'Portfolio', link: '#portfolio'},
    {title: 'Contact me', link: '#contactMe'}
  ];

  return (
    <Fragment>
      <ThemeProvider theme={myTheme}>
        <AppBar position="static" >
          <Toolbar>
            <Box flexGrow={1}><Button color="inherit">Karla galvis</Button></Box>
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

          {/* HELLO */}
          <Hello />

          {/* ABOUT ME */}
          <AboutMe />
        
          <div className={classes.bg0}></div><div className={classes.bg0+' '+classes.bg1}></div><div className={classes.bg0+' '+classes.bg2}></div>
          {/* Aptitudes */}
          <Aptitudes/>

          {/* Portfolio */}
          <Portfolio />

          <AppBar position="static" className={classes.footerBar}>
            <Container>
                <Box py={4}><Button color="inherit">Keep going, u got this</Button></Box>
            </Container>
        </AppBar>
      </ThemeProvider>
    </Fragment>
  );
}

export default App;