import myTheme from "../theme";
import { makeStyles, ThemeProvider} from '@material-ui/core/styles';
import stickerk from '../assets/stickerK1.png';
import blob from '../assets/blob.svg';
import { Grid, Container, Box,Typography, Button } from '@material-ui/core';
import '../App.css';


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
    position:'fixed',
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
  content: {
    left: '50%',
    transform:'translate(-50%, 0%)',
    // top:'50%',
    // textAlign: 'center',
    position: 'relative',
    zIndex: '99999'
  },
  "@keyframes mySlide": {
    "0%": {
      transform:'translateX(-25%)'
    },
    "100%": {
      transform:'translateX(25%)'
    }
  }
}));

const Hello = () => {
  const classes = useStyles();

  return ( 
    <ThemeProvider theme={myTheme}>
      <div className={classes.bg0}></div><div className={classes.bg0+' '+classes.bg1}></div><div className={classes.bg0+' '+classes.bg2}></div>
        <Container component="main" className={classes.heroContent} style={{ paddingBottom: 0}}>

          <Grid className={classes.content} container style={{ margin: 0}}>
            <Grid item xs={6} className={classes.myHello}>         
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
              <Button variant="contained" color="primary" >Contact Me</Button>
            </Grid>
            <Grid item xs={6}>
              {/* <Img1 /> */}
              <img src={stickerk} style={{ display: 'flex'}} />
            </Grid>
          </Grid>
        </Container>
      
    </ThemeProvider>
  );
}
 
export default Hello;