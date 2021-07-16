import '../App.css';
import myTheme from "../theme";
import { Grid, Container, Box, Paper, AppBar, Toolbar, Typography, Link } from '@material-ui/core';
import { makeStyles, ThemeProvider, withStyles } from '@material-ui/core/styles';
import { Accordion, AccordionSummary, AccordionDetails } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LinearProgress from '@material-ui/core/LinearProgress';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@material-ui/lab';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import blob from '../assets/blob.svg';

const useStyles = makeStyles((theme) => ({
  heroContent: {
    padding: myTheme.spacing(8, 0, 6),
    height: '100%'
  },
  myHello: {
    background: `url(${blob}) no-repeat`,
    backgroundPositionY: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start'
    
  },
  bg0: {
    animation: 'mySlide 4s ease-in-out infinite alternate',
    backgroundImage: `linear-gradient(-60deg, ${myTheme.palette.primary.light} 50%, ${myTheme.palette.secondary.light} 50%)`,
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
    position: 'relative'
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
    <ThemeProvider theme={myTheme}>
      <div className={classes.myMaster}>

        <div className={classes.bg0}></div><div className={classes.bg0+' '+classes.bg1}></div><div className={classes.bg0+' '+classes.bg2}></div>

        {/* SKILLS */}
        <section id="skills" className={classes.myContent}>
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
      </div>
    </ThemeProvider>
    );
}
 
export default Aptitudes;