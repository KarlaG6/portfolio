import { Container, Box, Typography, Button } from '@material-ui/core';
import myTheme from '../theme.js';
import { makeStyles, ThemeProvider} from '@material-ui/core/styles';
import Carousel from 'react-material-ui-carousel';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import Icon from '@material-ui/core/Icon';
import { ChevronLeftRounded, ChevronRightRounded } from '@material-ui/icons';
import foto from '../assets/photo1.jpeg';
import songsSS from '../assets/appsSS/songsAppSS.png';
import imgsSS from '../assets/appsSS/imagesAppSS.png';
import weatherSS from '../assets/appsSS/weatherAppSS.png';
import cotiSS from '../assets/appsSS/cotiAppSS.png';
import rickandmortySS from '../assets/appsSS/rickandmortySS.jpeg';

const useStyles = makeStyles((theme) => ({
  heroContent: {
    padding: myTheme.spacing(8, 0, 6),
    height: '100%'
  },
  cardRoot: {
    display: 'flex',
    justifyContent: 'space-evenly',
    boxShadow: 'none',
    backgroundColor: 'transparent !important',
    padding: myTheme.spacing( 0, 3),
    [myTheme.breakpoints.down('sm')]: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      "& div": {
        textAlign: 'center'
      }
    }
  },
  divContent: {
    alignSelf: 'center',
    marginLeft: '1rem',

  },
  cover: {
    width: '40%',
    height: 'auto',
    borderRadius: '8px',
    boxShadow: '0px 2px 14px -1px rgb(146 148 146), 0px 1px 5px 0px rgb(66 71 107 / 86%), 0px 1px 9px 0px rgb(66 71 107 / 86%)',
    marginTop: '1rem',
    marginBottom: '1rem',
    "@media (max-width: 406px)": {
      margin: 'auto'
    },
  },
}));

const Portfolio = () => {

  const classes = useStyles();

  const portfolio = [
    { name: 'Songs', desc: 'A single web app with React', img: songsSS, link: 'https://blissful-tesla-da2aee.netlify.app'},
    { name: 'Images', desc: 'A single web app with React', img: imgsSS, link: 'https://jolly-hamilton-f5243d.netlify.app'},
    { name: 'Weather', desc: 'A single web app with React', img: weatherSS, link: 'https://youthful-sinoussi-41f946.netlify.app'},
    { name: 'Cotizador', desc: 'A single web app with React', img: cotiSS, link: 'https://pedantic-agnesi-27f30e.netlify.app'},
    { name: 'Rick and Morty', desc: 'A simple web app with Vue JS', img: rickandmortySS, link: 'https://mystifying-bohr-0163c7.netlify.app'},
  ];

  return ( 
    <ThemeProvider theme={myTheme}>
    <section id="portfolio">
      <Container maxWidth="md" className={classes.heroContent}>
        <Typography component="h6" variant="h6" color="textSecondary">
          <Box fontSize="h3.fontSize" fontWeight="fontWeightBold" textAlign="center">
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

          <Card className={classes.cardRoot} key={portf.name}>
            {/* <CardMedia className={classes.cover} image={foto} title="Live"/> */}
            <img src={portf.img} className={classes.cover} alt="foto"/>

            <div className={classes.divContent}>
              <CardContent className={classes.content} >
                <Typography variant="h4"> {portf.name} </Typography>
                <Typography variant="body1"> {portf.desc} </Typography>
                <Button variant="contained" color="primary" style={{marginTop: 5}} href={portf.link} target="_blank">Demo</Button>
              </CardContent>
            </div>
          </Card>
          ))}
        </Carousel>
      </Container>
    </section>
    </ThemeProvider>
    );
}
 
export default Portfolio;