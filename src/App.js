import logo from './logo.svg';
import {Fragment} from 'react';
import theme from './theme.js';
import { Grid, Container, Box, Paper, AppBar, Toolbar, Typography, Link } from '@material-ui/core';
import { makeStyles, ThemeProvider, withStyles } from '@material-ui/core/styles';
import { spacing } from '@material-ui/system';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { green, pink } from '@material-ui/core/colors';
import {ReactComponent as Blob1} from './assets/blob.svg';
import Img1 from './assets/Fig1';
import foto from './assets/photo1.jpeg';
import { Accordion, AccordionSummary, AccordionDetails } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LinearProgress from '@material-ui/core/LinearProgress';

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
  myimg: {
    borderRadius: '8px',
  },
}));

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 10,
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
  },
}))(LinearProgress);

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
      {/* HELLO */}
        <Box m={7} >
          <Container maxWidth="md" component="main" className={classes.heroContent}>
            <Grid container spacing={3}>
              <Grid item xs={6}>         
                <Typography component="h2" variant="h2" color="textSecondary" alignCenter>
                  <Box fontWeight="fontWeightBold" m={2} mx="auto">
                  Hola, soy Karla
                  </Box>
                  <Box fontSize="h5.fontSize" color="textSecondary" fontWeight="fontWeightMedium" >
                    Frontend developer
                  </Box>
                  <Box fontSize={19}  color="textSecondary" fontWeight="400" m={2} mx="auto">
                    Una estudiante de ingeniería de sistemas con aspiración de crecer en el ámbito laboral como desarrolladora de software
                  </Box>
                </Typography>
                <Button variant="contained" color="primary">Contact Me</Button>
              </Grid>
              <Grid item xs={6}>
                <Img1 />
              </Grid>
            </Grid>
          </Container>

        {/* ABOUT ME */}
          <Container maxWidth="md" className={classes.heroContent}>
            <Typography component="h6" variant="h6" color="textSecondary"  alignCenter>
              <Box fontSize="h3.fontSize"  fontWeight="fontWeightBold" textAlign="center">
                About Me
              </Box>
              <Box textAlign="center" pb="1rem">
                My Intro
              </Box>
            </Typography>
            <Grid container spacing={7}>

              <Grid item xs={6}>         
                <img src={foto} width="100%" className={classes.myimg} alt="foto"/>
              </Grid>

              <Grid item xs={6}>
                <Typography component="h2" variant="h2" color="textSecondary" alignCenter>

                  <Box fontSize={19} color="textSecondary" fontWeight="400" pb={1} mx="auto">
                    Me apasiona aprender cosas nuevas en el ámbito de la tecnología, y como esto es una tarea de nunca acabar, he terminado por desarrollar considerablemente mi lado autodidacta, lo cual me llena de confianza para asumir nuevos retos.
                  </Box>
                </Typography>
                <Box py={1} >
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={4}>
                      32+
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <Paper > xs=12 sm=4</Paper>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <Paper > xs=12 sm=4</Paper>
                    </Grid>
                  </Grid>
                </Box>
                <Button variant="contained" color="primary">Download CV</Button>
              </Grid>
            </Grid>
          </Container>
        
          {/* SKILLS */}
          <Container maxWidth="md" className={classes.heroContent}>
            <Typography component="h6" variant="h6" color="textSecondary"  alignCenter>
              <Box fontSize="h3.fontSize"  fontWeight="fontWeightBold" textAlign="center">
                Skills
              </Box>
              <Box textAlign="center" pb="1rem">
                My technical level
              </Box>
            <Grid container spacing={5}>
              <Grid item xs={6}>         
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography color="textSecondary">
                      <Box fontSize="h5.fontSize"  fontWeight="fontWeightBold">
                        Frontend developer
                      </Box>
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography className={classes.root}>
                      <Box mb={1}>
                        <Typography variant="body2" color="textSecondary" align="left">
                          60%
                        </Typography>
                        <Typography variant="body2" color="textSecondary" align="right">
                          70%
                        </Typography>
                      </Box>
                      <BorderLinearProgress variant="determinate" value={70} />
                    </Typography>
                  </AccordionDetails>
                </Accordion>

              </Grid>

              <Grid item xs={6}>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                  >
                    <Typography color="textSecondary">
                      <Box fontSize="h5.fontSize"  fontWeight="fontWeightBold">
                      Backend developer
                      </Box>
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                      sit amet blandit leo lobortis eget.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </Grid>
            </Grid>
            </Typography>
          </Container>
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