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
  },
  father: {
    maxWidth: '100vh !important',
    overflowX:'hidden !important'
  }
}));

function App() {

  const classes = useStyles();
  // const preventDefault = (event) => event.preventDefault();

  return (
    <Fragment className={classes.father}>
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
            <Container>
                <Box py={4}><Button color="inherit">Keep going, u got this</Button></Box>
            </Container>
        </AppBar>
      </ThemeProvider>
    </Fragment>
  );
}

export default App;