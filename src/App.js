import {Fragment} from 'react';
import myTheme from './theme.js';
import { Grid, Container, Box, Paper, AppBar, Toolbar, Typography, Link } from '@material-ui/core';
import { makeStyles, ThemeProvider, withStyles } from '@material-ui/core/styles';
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
import Carousel from 'react-material-ui-carousel';
import Home from '@material-ui/icons/Home';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import Icon from '@material-ui/core/Icon';
import { ChevronLeftRounded, ChevronRightRounded } from '@material-ui/icons';
import Hello from './components/Hello';
import AboutMe from './components/AboutMe.js';



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
    {title: 'About', link: '#aboutMe'},
    {title: 'Skills', link: '#skills'},
    {title: 'Services', link: '#services'},
    {title: 'Portfolio', link: '#portfolio'},
    {title: 'Contact me', link: '#contactMe'}
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
    {title: 'Code', content: 'Because it&apos;s awesome!' , icon: <LaptopMacIcon />, color: 'primary'}
  ];

  const portfolio = [
    { name: 'Songs', desc: 'A single web app with React', img: foto},
    { name: 'Weather', desc: 'A single web app with React', img: foto},
    { name: 'Images', desc: 'A single web app with React', img: foto},
    { name: 'Cocktails', desc: 'A single web app with React', img: foto},
  ];

  const education = [
    { title: 'INGENIERÍA DE SISTEMAS', institution: 'Universidad Libre seccional Barranquilla', date: '2021-2: Séptimo semestre', state: 'en curso', icon: <FastfoodIcon />, color: 'secondary'},
    { title: 'BACHILLER CON PROFUNDIZACIÓN EN PEDAGOGÍA', institution: 'Escuela Normal Superior del Distrito de Barranquilla', date: '2017', state: 'Finalizado', icon: <LaptopMacIcon />, color: 'primary'}
  ];

  const work = [
    { project: 'Sitio web', charge: 'Ingeniero de desarrollo de destajo', activities: 'Frontend de la página (HTML, CSS, BOOTSTRAP y JQUERY)', enterprise: 'Horbath Technologies', date: 'Octubre del 2020 hasta Enero del 2021', icon: <FastfoodIcon />, color: 'secondary'},
    { project: 'Sitio web', charge: 'Tester', activities: 'Testing y documentación web, móvil y CMS', enterprise: 'Horbath Technologies', date: 'Febrero del 2021', icon: <LaptopMacIcon />, color: 'primary'}
  ];
  
  const showQuali = () => {
    let qualiCards = [];
    for (let i=0; i < work.length; i++) {
        // work
        qualiCards.push(
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color={work[i].color}>
            {work[i].icon}
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6" component="h1">
                {work[i].project}
              </Typography>
              <Typography>{work[i].charge}</Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>);

        // Ed
        qualiCards.push(
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color={education[i].color}>
            {education[i].icon}
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6" component="h1">
                {education[i].title}
              </Typography>
              <Typography>{education[i].institution}</Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>);
    }
    return qualiCards
  };
  
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
        
          {/* SKILLS */}
          <section id="skills">
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
          </section>

          {/* Qualification */}
          <section id="qualification">
            <Container maxWidth="md" className={classes.heroContent}>
              <Typography component="h6" variant="h6" color="textSecondary"  alignCenter>
                <Box fontSize="h3.fontSize"  fontWeight="fontWeightBold" textAlign="center">
                  Qualification
                </Box>
                <Box textAlign="center" pb="1rem">
                  Currently studying
                </Box>
              </Typography>
              
              <Typography component="div" variant="h5"  style={{ display: 'flex', justifyContent: 'space-around'}}>
                <Box>Education</Box>
                <Box>Work</Box>
              </Typography>

              <Timeline align="alternate">
                { showQuali()}
              </Timeline>
            </Container>
          </section>

          {/* Portfolio */}
          <section id="portfolio">
            <Container maxWidth="md" className={classes.heroContent}>
              <Typography component="h6" variant="h6" color="textSecondary"  alignCenter>
                <Box fontSize="h3.fontSize"  fontWeight="fontWeightBold" textAlign="center">
                  Portfolio
                </Box>
                <Box textAlign="center" pb="2rem">
                  Some of my projects
                </Box>
              </Typography>
                
              <Carousel 
                navButtonsAlwaysVisible animation="slide" 
                autoPlay={false} timeout={350}
                NextIcon={<Icon component={ChevronRightRounded} fontSize="large" color="primary"></Icon>}
                PrevIcon={<Icon component={ChevronLeftRounded} fontSize="large" color="primary"></Icon>}
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
                      <Button variant="contained" color="primary" style={{marginTop: 5}} >Demo</Button>
                    </CardContent>
                  </div>
                </Card>
                ))}
              </Carousel>
            </Container>
          </section>

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