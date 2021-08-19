import '../App.css';
import myTheme from "../theme";
import { Grid, Container, Box, Paper, Typography, Avatar, SvgIcon } from '@material-ui/core';
import { makeStyles, ThemeProvider, withStyles } from '@material-ui/core/styles';
// import { Accordion, AccordionSummary, AccordionDetails } from '@material-ui/core';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LinearProgress from '@material-ui/core/LinearProgress';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@material-ui/lab';
import AssignmentIcon from '@material-ui/icons/Assignment';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import ScrollAnimation from 'react-animate-on-scroll';
import {ReactComponent as CssIcon} from '../assets/icons/css-3.svg';
import {ReactComponent as HtmlIcon} from '../assets/icons/html-5.svg';
import {ReactComponent as JsIcon} from '../assets/icons/js.svg';
import {ReactComponent as JqueryIcon} from '../assets/icons/jquery-icon.svg';
import {ReactComponent as ReactJsIcon} from '../assets/icons/react-js.svg';
import {ReactComponent as MySQLIcon} from '../assets/icons/mysql.svg';
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
  },
  skillBox: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
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
        {name: 'HTML', percent: 80, icon:<SvgIcon component={HtmlIcon} viewBox="0 0 440 370" style={{fontSize: '2.4rem'}} />},
        {name: 'CSS', percent: 80, icon: <SvgIcon component={CssIcon} viewBox="0 0 500 475"/>},
        {name: 'JavaScript', percent: 70, icon: <SvgIcon component={JsIcon} color="#FFE100" viewBox="0 0 500 475"/>},
        {name: 'jQuery', percent: 42, icon: <SvgIcon component={JqueryIcon} style={{color: '#0868ac'}} viewBox="0 0 30 35"/>},
        {name: 'Bootstrap', percent: 95, icon: <LaptopMacIcon />},
        {name: 'React.JS', percent: 78, icon: <SvgIcon component={ReactJsIcon} viewBox="0 0 220 240" style={{fontSize: '2rem'}} />},
        {name: 'Material-UI', percent: 70, icon: <LaptopMacIcon />},
        {name: 'Vue.JS', percent: 56, icon: <LaptopMacIcon />},
        {name: 'Vuetify', percent: 50, icon: <LaptopMacIcon />},
      ]
    },
    { title: 'Backend Developer', 
      content: [
        {name: 'MySQL', percent: 75, icon: <SvgIcon component={MySQLIcon} viewBox="0 0 500 475"/>},
        {name: 'SQLite', percent: 67, icon: <LaptopMacIcon />},
        {name: 'Flask', percent: 70, icon: <LaptopMacIcon />},
        {name: 'PHP', percent: 30, icon: <LaptopMacIcon />},
        {name: 'Django', percent: 20, icon: <LaptopMacIcon />},
      ]
    }
  ];

  const education = [
    { title: 'INGENIERÍA DE SISTEMAS', institution: 'Universidad Libre seccional Barranquilla', date: '2021-2: Séptimo semestre', state: 'En curso', icon: <LaptopMacIcon />, color: 'secondary'},
    { title: 'BACHILLER CON PROFUNDIZACIÓN EN PEDAGOGÍA', institution: 'Escuela Normal Superior del Distrito de Barranquilla', date: '2017', state: 'Finalizado', icon: <AssignmentIcon />, color: 'primary'}
  ];

  const work = [
    { project: 'Sitio web', charge: 'Ingeniero de desarrollo de destajo', activities: 'Frontend de la página (HTML, CSS, BOOTSTRAP y JQUERY)', enterprise: 'Horbath Technologies', date: 'Octubre del 2020 hasta Enero del 2021', icon: <LaptopMacIcon />, color: 'secondary'},
    { project: 'Sitio web', charge: 'Tester', activities: 'Testing y documentación web, móvil y CMS', enterprise: 'Horbath Technologies', date: 'Febrero del 2021', icon: <AssignmentIcon />, color: 'primary'}
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
            <Container>
              { skills.map(skill => (
                <div key={skill.title}>
                  <Box fontSize="h4.fontSize"  fontWeight="fontWeightBold" textAlign="center" pt={2}>
                    {skill.title}
                  </Box>
                  <Grid container alignItems="center" style={{justifyContent: 'center', padding: '2rem'}}>
                    { skill.content.map( cont => (
                      <Grid item xs={12} sm={6} md={3} key={cont.name}>
                          <Box mb={2} className={classes.skillBox}> 
                          <ScrollAnimation animateIn='wobble'
                          initiallyVisible={true}>
                            <Avatar >{cont.icon}</Avatar>
                    </ ScrollAnimation>
                            {cont.name}
                            </Box>
                        </Grid>
                    ))}
                  </Grid>
                </div>
              ))}
            </Container>
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