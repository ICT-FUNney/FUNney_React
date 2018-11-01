import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import logo from './logo.svg';
import Icon from '@material-ui/core/Icon';
import './App.css';

const styles = (theme) => ({
  TestBotan__root:{
　marginLeft: theme.spacing.unit,
　marginRight: "50px",
  width: 200,
  }

});



const TestBotan= (props)=>{
  const { classes } = props;
  return(
  <div className="TestBotan">
  <Button variant="contained" color="primar" classes={{
     root: classes.TestBotan__root,
   }}>
     request
     <Icon className={classes.rightIcon}>send</Icon>
   </Button>
  </div>
)}

export default withStyles(styles)(TestBotan);
