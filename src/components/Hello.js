import myTheme from "../theme";
import { makeStyles, ThemeProvider} from '@material-ui/core/styles';
import stickerk from '../assets/stickerK2.png';
import blob from '../assets/blob.svg';
import { Grid, Box,Typography, Button, Hidden} from '@material-ui/core';
// import Sky from "react-sky";

const useStyles = makeStyles((theme) => ({
  heroContent: {
    padding: myTheme.spacing( 0, 5),
    // backgroundColor: myTheme.palette.secondary.light,
    backgroundColor: '#e6fbfb',
    height: '100vh',
    overflow: 'hidden'
  },
  myHello: {
    background: `url(${blob}) no-repeat`,
    backgroundPositionY: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start'
    
  },
  waves: {
    position:'relative',
    width: '100%',
    // height:'32vh',
    marginBottom:'-7px', /*Fix for safari gap*/
    minHeight:'100px',
    // maxHeight:'150px',
    height: '24vh'
  },
  myIntro: {
    "@media (max-width: 488px)":{
      "@media (max-height: 610px)":{
        fontSize: 'smaller'
      }
    }
  },
  myBtn: {
    zIndex: "1",
  }
}));

const Hello = () => {
  const classes = useStyles();

  return ( 
    <ThemeProvider theme={myTheme}>
      
      <section component="main" className={classes.heroContent} >
        {/* <Sky images={{
            0: blob
          }}
          how={130}
          time={40}
          size={'100px'}
        /> */}
        <Grid container style={{ margin: 0, height: '-webkit-fill-available'}}>
          <Grid item md={12} lg={6} className={classes.myHello}>         
            <Typography component="h2" variant="h2" color="textSecondary">
              <Box fontWeight="fontWeightBold" m={2} mx="auto" className={classes.myIntro}>
              Hola, soy Karla
              </Box>
              <Box fontSize="h5.fontSize" color="textSecondary" fontWeight="fontWeightMedium" >
                Frontend developer
              </Box>
              <Box fontSize={19}  color="textSecondary" fontWeight="400" m={2} mx="auto">
                Una estudiante de ingeniería de sistemas con aspiración de crecer en el ámbito laboral como desarrolladora de software
              </Box>
            </Typography>
            <Button variant="contained" color="primary" className={classes.myBtn} href="mailto:karlaisabelgt@gmail.com">Contact Me</Button>
          </Grid>
          <Hidden mdDown>
            <Grid item xs={6} style={{ position: 'relative'}} >
              {/* <Img1 /> */}
              <img src={stickerk} style={{ position: 'absolute', bottom: 0, height: '80vh'}} />
            </Grid>
          </Hidden>
        </Grid>
        <div style={{ position: 'absolute', bottom: 0, left: '0%', right: '0%', }}>
          <svg className={classes.waves} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
            <defs>
              <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
            </defs>
            <g className="parallax">
              <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
              <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
              <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
              <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
            </g>
          </svg>
        </div>
      </section>
    </ThemeProvider>
  );
}
 
export default Hello;