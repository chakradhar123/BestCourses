import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Logo from '../assets/logo.svg'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  logoWrap:{
    display:'flex',
    justifyContent:'center',
    backgroundColor:'#F6F6F6',
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    <div className={classes.logoWrap}>
    <img style={{height:'15rem'}} src={Logo} alt='logo'/>
    </div>
      {/* <AppBar position="static">
        <Toolbar>
          
          <Typography variant="h6" className={classes.title}>
            Best Courses
          </Typography>
          <Button color="inherit">Courses</Button>
        </Toolbar>
      </AppBar> */}
      
    </div>
  );
}