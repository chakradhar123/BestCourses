import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Logo from '../assets/logo.svg'

const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 1,
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
   
    </div>
  );
}