import myTheme from '../theme.js';
import { Grid,Box, AppBar, Toolbar, Typography, Link, Button, IconButton ,Drawer, MenuItem } from '@material-ui/core';
import { makeStyles, ThemeProvider} from '@material-ui/core/styles';
import { useState, useEffect } from 'react';
import { spacing } from '@material-ui/system';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
  paper: {
    backgroundColor: myTheme.palette.primary.main,
    color: 'white',
    padding: '4rem 2rem 3rem'
  }
}));
const UpBar = () => {
  const classes = useStyles();

  const navOptions = [
    {title: 'Home', link: '#'},
    {title: 'About', link: '#aboutMe'},
    {title: 'Skills', link: '#skills'},
    {title: 'Portfolio', link: '#portfolio'},
    {title: 'Contact me', link: 'mailto:karlaisabelgt@gmail.com'}
  ];

  const [state, setState] = useState({ 
    mobileView: false,
    drawerOpen: false
  });

  const { mobileView, drawerOpen } = state;

  
  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
      ? setState((prevState) => ({ ...prevState, mobileView: true }))
      : setState((prevState) => ({ ...prevState, mobileView: false}));
    };
    
    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());
    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    }
  }, [])
  
  const displayMobile = () => {

    const handleDrawerOpen = () => setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () => setState((prevState) => ({ ...prevState, drawerOpen: false}));

    return (
      <Toolbar>
        <Box flexGrow={1}><Button color="inherit">Karla_galvis.dev</Button></Box>
        <Box >
          <IconButton {...{
            edge: "start",
            color: "inherit",
            "aria-label": "menu",
            "aria-haspopup": true,
            onClick: handleDrawerOpen,
          }}
          ><MenuRoundedIcon /></IconButton>
        </Box>
        <Drawer { ...{
          anchor: "right",
          open: drawerOpen,
          onClose: handleDrawerClose,
        }}
        classes={{paper: classes.paper}}>
            {navOptions.map(({link, title}) => (
              <Link color="inherit" href={link} style={{textDecoration: 'none'}} key={title}> <MenuItem>{title}</MenuItem></Link>
            ))}
        </Drawer>
      </Toolbar>
    );
  };

  const displayDesktop = () => {
    return (
      <Toolbar>
        <Box flexGrow={1}><Button color="inherit">Karla_galvis.dev</Button></Box>
        <Box >
          <Typography variant="h6" className={classes.title} color="inherit">
            <Grid container spacing={3}>
              {navOptions.map(option => (
                <Grid item key={option.title}>
                  <Link color="inherit" href={option.link}> {option.title} </Link>
                </Grid>
              ))}
            </Grid>
          </Typography>
        </Box>
      </Toolbar>
    );
  };  
  return ( 
    <ThemeProvider theme={myTheme}>
      <AppBar position="fixed" style={{backgroundColor:'#6272bdc2'}}>
        {mobileView ? displayMobile() : displayDesktop()}
      </AppBar>
    </ThemeProvider>
    );
}
 
export default UpBar;