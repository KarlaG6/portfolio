import myTheme from "../theme";
import { Grid, Container, Box,Typography, Button, Paper } from '@material-ui/core';
import { makeStyles, ThemeProvider, withStyles } from '@material-ui/core/styles';
import foto2 from '../assets/photo2.jpeg';
import { Hidden } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  gran: {
    backgroundColor: myTheme.palette.primary.light,
    height: '100vh',
    padding: '2rem',
    },
  heroContent: {
    padding: myTheme.spacing(4, 0, 3),
  },
  myimg: {
    borderRadius: '8px',
    boxShadow: '0px 2px 14px -1px rgb(146 148 146), 0px 1px 5px 0px rgb(66 71 107 / 86%), 0px 1px 9px 0px rgb(66 71 107 / 86%)',
    objectFit: 'cover',
    height: '80%',
    objectPosition: '0% 50%',
    maxHeight: '70vh',
    [myTheme.breakpoints.down('sm')]: {
      filter: 'brightness(0.75)'
    }
  },
  myCard: {
    maxWidth: 345,
  },
  myContent: {
    position: 'absolute',
    top: 0,
    padding: '2rem',
    margin: '-1rem 2rem',
    "@media (max-width: 488px)":{
      padding: '1rem',
      background: '#808080a3',
      color: 'white'
    }
  },
  }));

const AboutMe = () => {
  const classes = useStyles();
  return ( 
    <ThemeProvider theme={myTheme}>
      <section className={classes.gran} id="aboutMe">

        <Container maxWidth="md" className={classes.heroContent}>
          <Typography component="h6" variant="h6" color="textSecondary"  alignCenter>
            <Box fontSize="h3.fontSize" color="primary.contrastText"  fontWeight="fontWeightBold" textAlign="center">
              About Me
            </Box>
            <Box textAlign="center" color="primary.contrastText" pb="1.5rem">
              My Intro
            </Box>
          </Typography>

          <Grid container spacing={8} >

            <Grid item xs={12} md={6}>   
              <div style={{position: 'relative'}}>
                <img src={foto2} width="100%" className={classes.myimg} alt="foto"/>
                <Hidden mdUp>
                  <Paper className={classes.myContent}>
                    {/* <Box  fontSize={19} color="primary.contrastText" fontWeight="400" pb={1} mx="auto"> */}
                      Me apasiona aprender cosas nuevas en el ámbito de la tecnología, y como esto es una tarea de nunca acabar, he terminado por desarrollar considerablemente mi lado autodidacta, lo cual me llena de confianza para asumir nuevos retos.
                    {/* </Box> */}
                  </Paper>
                  <Button variant="contained" color="primary" style={{display: 'block', margin: '1.5rem auto', width: '100%'}}>Download CV</Button>
                </Hidden> 
              </div>      
            </Grid>
            <Hidden smDown>  
              <Grid item xs={12} md={6}>
                <Typography component="h2" variant="h2" alignCenter>

                  <Box fontSize={19} color="primary.contrastText" fontWeight="400" pb={1} mx="auto">
                    Me apasiona aprender cosas nuevas en el ámbito de la tecnología, y como esto es una tarea de nunca acabar, he terminado por desarrollar considerablemente mi lado autodidacta, lo cual me llena de confianza para asumir nuevos retos.
                  </Box>
                </Typography>
                <Box py={1} color="primary.contrastText" fontWeight="bold" fontSize={52}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={4}>
                      32+
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      32+
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      32+
                    </Grid>
                  </Grid>
                </Box>
                <Button variant="contained" color="primary" >Download CV</Button>
              </Grid>
            </Hidden>
          </Grid>
        </Container>
          
      </section>
    </ThemeProvider>
  );
}
 
export default AboutMe;