import '../App.css';
import myTheme from "../theme";
import { Grid, Container, Box, Paper, Typography } from '@material-ui/core';
import { makeStyles, ThemeProvider, withStyles } from '@material-ui/core/styles';
import { Accordion, AccordionSummary, AccordionDetails } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LinearProgress from '@material-ui/core/LinearProgress';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@material-ui/lab';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  heroContent: {
    padding: myTheme.spacing(8, 0, 6),
    height: '100%'
  },
  contentQua: {
    [myTheme.breakpoints.down('xs')]: {
      display: 'flex',
      flexDirection: 'column',
      flexWrap: 'wrap',
      alignContent: 'center'
    }
  },
  paper: {
    padding: '6px 16px',
  },
  bg0: {
    animation: 'mySlide 4s ease-in-out infinite alternate',
    backgroundImage: `linear-gradient(-60deg, ${myTheme.palette.primary.light} 50%, ${myTheme.palette.secondary.main} 50%)`,
    // opacity: 1,
    bottom:0,
    left:'-50%',
    opacity:'.5',
    position:'absolute',
    right:'-50%',
    top:0,
    zIndex: '-1'
  },
  bg1:{
    animationDirection: 'alternate-reverse',
    animationDuration: '5s',
  },
  bg2:{
    animationDuration: '6s',
  },
  myContent: {
    // left: '50%',
    // transform:'translate(-50%, 0%)',
    // // top:'50%',
    // position: 'relative',
    // zIndex: '9'
  },
  "@keyframes mySlide": {
    "0%": {
      transform:'translateX(-25%)'
    },
    "100%": {
      transform:'translateX(25%)'
    }
  },
  myMaster: {
    position: 'relative',
    overflowX: 'hidden',
    padding: myTheme.spacing(0, 4),
  }
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

const Aptitudes = () => {
  const classes = useStyles();
  const skills = [
    { title: 'Frontend Developer', 
      content: [
        {name: 'HTML', percent: 80},
        {name: 'CSS', percent: 80},
        {name: 'JavaScript', percent: 70},
        {name: 'jQuery', percent: 42},
        {name: 'Bootstrap', percent: 95},
        {name: 'React', percent: 78},
        {name: 'Material-UI', percent: 70},
        {name: 'Vue', percent: 56},
        {name: 'Vuetify', percent: 50},
      ]
    },
    { title: 'Backend Developer', 
      content: [
        {name: 'MySQL', percent: 75},
        {name: 'SQLite', percent: 67},
        {name: 'Flask', percent: 70},
        {name: 'PHP', percent: 30},
        {name: 'Django', percent: 20},
      ]
    }
  ];

  const qualification = [
    {title: 'Eat', content: 'Because you need strength' , icon: <FastfoodIcon />, color: 'secondary'},
    {title: 'Code', content: 'Because it&apos;s awesome!' , icon: <LaptopMacIcon />, color: 'primary'}
  ];

  const education = [
    { title: 'INGENIERÍA DE SISTEMAS', institution: 'Universidad Libre seccional Barranquilla', date: '2021-2: Séptimo semestre', state: 'En curso', icon: <FastfoodIcon />, color: 'secondary'},
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
        <TimelineItem key={i}>
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
              <Typography component="span" variant="caption">{work[i].date}</Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>);

        // Ed
        qualiCards.push(
        <TimelineItem key={education[i].title}>
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
              <Typography component="span" variant="caption">{education[i].date}</Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>);
    }
    return qualiCards
  };


  return ( 
    <ThemeProvider theme={myTheme}>
      <div className={classes.myMaster}>

        <div className={classes.bg0}></div><div className={classes.bg0+' '+classes.bg1}></div><div className={classes.bg0+' '+classes.bg2}></div>

        {/* SKILLS */}
        <section id="skills" className={classes.myContent}>
          <Container maxWidth="md" className={classes.heroContentQ}>
            <Typography component="h6" variant="h6" color="textSecondary">
              <Box fontSize="h3.fontSize"  fontWeight="fontWeightBold" textAlign="center" pt={8}>
                Skills
              </Box>
              <Box textAlign="center" pb="1rem">
                My technical level
              </Box>
            <Grid container spacing={5}>
            { skills.map(skill => (
              <Grid item xs={12} sm={6} key={skill.title}>   
                <ScrollAnimation 
                  animateIn='fadeIn' 
                  duration={5} 
                  animateOnce={true}
                  afterAnimatedIn={  
                    function(visible) {
                      if (visible.inViewport) {
                        // Part of the element is in the viewport (the area defined by the offset property)
                        // console.log('aja view')
                      } else if (visible.onScreen) {
                        // Part of the element is visible on the screen
                      } else {
                        // Element is no longer visible
                      }
                    }}
                  >
                  <Accordion >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon color="primary" />}
                      aria-controls={skill.title+'-content'}
                      id={skill.title+'-header'}
                      
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
                        <Box mb={1} key={cont.name}>
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
                                {`${cont.percent}%`}
                              </Typography>
                            </Grid>
                          </Grid>
                          <BorderLinearProgress variant="determinate" value={cont.percent} />
                        </Box>
                        ))}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </ScrollAnimation>      
              </Grid>
            ))}
            </Grid>
            </Typography>
          </Container>
        </section>

        {/* Qualification */}
        <section id="qualification">
          <Container maxWidth="md" className={classes.heroContentQua+' '+classes.contentQua}>
            <Typography component="h6" variant="h6" color="textSecondary">
              <Box fontSize="h3.fontSize"  fontWeight="fontWeightBold" textAlign="center" style={{display: 'flex', justifyContent: 'center'}} pt={5}>
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
      </div>
    </ThemeProvider>
    );
}
 
export default Aptitudes;