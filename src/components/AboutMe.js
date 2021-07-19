import myTheme from "../theme";
import { Grid, Container, Box,Typography, Button } from '@material-ui/core';
import { makeStyles, ThemeProvider, withStyles } from '@material-ui/core/styles';
import foto2 from '../assets/photo2.jpeg';

const useStyles = makeStyles((theme) => ({
  gran: {
    backgroundColor: myTheme.palette.primary.light,
    height: '100vh',
    padding: '2rem'
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
            <Box textAlign="center" color="primary.contrastText" pb="1rem">
              My Intro
            </Box>
          </Typography>
          <Grid container spacing={8} >

            <Grid item xs={6}>         
              <img src={foto2} width="100%" className={classes.myimg} alt="foto"/>
            </Grid>

            <Grid item xs={6}>
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
          </Grid>
        </Container>
          
      </section>
    </ThemeProvider>
  );
}
 
export default AboutMe;