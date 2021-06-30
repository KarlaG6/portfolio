import logo from './logo.svg';
import {Fragment} from 'react';
import myTheme from './theme.js';
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
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@material-ui/lab';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import Carousel from 'react-material-ui-carousel';
import Home from '@material-ui/icons/Home';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import { ChevronLeftRounded, ChevronRightRounded } from '@material-ui/icons';


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
  },
  paper: {
    padding: '6px 16px',
  },
  secondaryTail: {
    backgroundColor: myTheme.palette.secondary.light,
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
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

const BorderLinearProgress = withStyles((myTheme) => ({
  root: {
    height: 10,
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor: myTheme.palette.tertiary.it,
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

  const skills = [
    { title: 'Frontend Developer', 
      content: [
        {name: 'HTML', percent: '70%'},
        {name: 'CSS', percent: '70%'},
        {name: 'JavaScript', percent: '60%'},
        {name: 'React', percent: '70%'},
        {name: 'Vue', percent: '70%'},
        {name: 'Bootstrap', percent: '70%'},
      ]
    },
    { title: 'Backend Developer', 
      content: [
        {name: 'Flask', percent: '30%'},
        {name: 'PHP', percent: '30%'},
        {name: 'Django', percent: '20%'},
      ]
    }
  ];

  const qualification = [
    {title: 'Eat', content: 'Because you need strength' , icon: <FastfoodIcon />, color: 'secondary'},
    {title: 'Code', content: 'Because it&apos;s awesome!' , icon: <LaptopMacIcon />, color: 'primary'},
  ];

  const portfolio = [
    { name: 'Songs', desc: 'A single web app with React', img: foto},
    { name: 'Weather', desc: 'A single web app with React', img: foto},
    { name: 'Images', desc: 'A single web app with React', img: foto},
    { name: 'Cocktails', desc: 'A single web app with React', img: foto},
  ];

  return (
    <Fragment>
      <ThemeProvider theme={myTheme}>
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
          <Container component="main" className={classes.heroContent}>
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
          <section className={classes.secondaryTail}>

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
          </section>
        
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
            { skills.map(skill => (
              <Grid item xs={6}>         
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon color="primary" />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography color="textSecondary">
                      <Box fontSize="h5.fontSize"  fontWeight="fontWeightBold">
                        {skill.title}
                      </Box>
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography className={classes.root}>
                      { skill.content.map( cont => (
                      <Box mb={1}>
                        <Grid container>
                          <Grid item xs={12} sm={6}>
                            <Typography variant="body2" color="textSecondary" align="left">
                              <Box fontWeight="fontWeightBold">
                                {cont.name}
                              </Box>
                            </Typography>
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <Typography variant="body2" color="textSecondary" align="right">
                              {cont.percent}
                            </Typography>
                          </Grid>
                        </Grid>
                        <BorderLinearProgress variant="determinate" value={70} />
                      </Box>
                      ))}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </Grid>
            ))}
            </Grid>
            </Typography>
          </Container>

          {/* Qualification */}
          <Container maxWidth="md" className={classes.heroContent}>
            <Typography component="h6" variant="h6" color="textSecondary"  alignCenter>
              <Box fontSize="h3.fontSize"  fontWeight="fontWeightBold" textAlign="center">
                Qualification
              </Box>
              <Box textAlign="center" pb="1rem">
                Currently studying
              </Box>
            </Typography>

            <Timeline align="alternate">
              {qualification.map( quali => (
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot color={quali.color}>
                      {quali.icon}
                    </TimelineDot>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <Paper elevation={3} className={classes.paper}>
                      <Typography variant="h6" component="h1">
                        {quali.title}
                      </Typography>
                      <Typography>{quali.content}</Typography>
                    </Paper>
                  </TimelineContent>
                </TimelineItem>
              ))}
            </Timeline>
          </Container>
        
          {/* Portfolio */}
          <Container maxWidth="md" className={classes.heroContent}>
            <Typography component="h6" variant="h6" color="textSecondary"  alignCenter>
              <Box fontSize="h3.fontSize"  fontWeight="fontWeightBold" textAlign="center">
                Portfolio
              </Box>
              <Box textAlign="center" pb="2rem">
                Some of my projects
              </Box>
            </Typography>
              
            <Carousel navButtonsAlwaysVisible animation="slide" 
                      autoPlay={false} timeout={350}
                      NextIcon={<ExpandMoreIcon color="primary" />}
                      PrevIcon={<ExpandMoreIcon color="primary" />}
                      navButtonsProps={{
                        style: {
                            backgroundColor: 'transparent',
                            // borderRadius: 0
                        }
                      }}
                      indicatorIconButtonProps={{
                        style: {
                          color: myTheme.palette.tertiary.it
                        }
                      }} 
                      activeIndicatorIconButtonProps={{
                        style: {
                          color: myTheme.palette.secondary.dark
                        }
                      }}
            >
              { portfolio.map( portf => (

              <Card className={classes.cardRoot}>
                {/* <CardMedia className={classes.cover} image={foto} title="Live"/> */}
                <img src={portf.img} className={classes.cover} alt="foto"/>

                <div className={classes.divContent}>
                  <CardContent className={classes.content} >
                    <Typography variant="h4"> {portf.name} </Typography>
                    <Typography variant="body1"> {portf.desc} </Typography>
                    <Button variant="contained" color="primary">Demo</Button>
                  </CardContent>
                </div>
              </Card>
              ))}
            </Carousel>
          </Container>
          <AppBar position="static" className={classes.footerBar}>
            <Container>
                <Box py={4}><Button color="inherit">La mama de la mama de la mama</Button></Box>
            </Container>
        </AppBar>
      </ThemeProvider>
    </Fragment>
  );
}

export default App;