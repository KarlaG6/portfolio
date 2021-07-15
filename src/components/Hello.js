import myTheme from "../theme";
import { makeStyles, ThemeProvider, withStyles } from '@material-ui/core/styles';
import stickerk from '../assets/stickerK1.png';
import blob from '../assets/blob.svg';
import { Grid, Container, Box,Typography, Button } from '@material-ui/core';

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
    animation: 'slide 3s ease-in-out infinite alternate',
    backgroundImage: `linear-gradient(-60deg, ${myTheme.palette.secondary.main} 50%, ${myTheme.palette.primary.light} 50%)`,
    
    bottom:0,
    left:'-50%',
    // opacity:'.5',
    // position:'fixed',
    right:'-50%',
    top:0,
    zIndex: '-1'
  },
  content: {
    left: '50%',
    transform:'translate(-50%, 0%)',
    // top:'50%',
    // textAlign: 'center',
    position: 'relative',
    zIndex: '99999'
  }
}));

const Hello = () => {
  const classes = useStyles();

  return ( 
    <ThemeProvider theme={myTheme}>
      <Container component="main" className={classes.heroContent} style={{ paddingBottom: 0}}>
          <div className={classes.bg0}><div className="bg1"><div className="bg2">

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
        </div></div></div>
      </Container>
    </ThemeProvider>
  );
}
 
export default Hello;