import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = (theme) => ({
  RequestBotan__root:{
    marginLeft: theme.spacing.unit,
    marginRight: "50px",
    width: 200,
  }
});

const RequestBotan= (props)=>{
  const { classes } = props;
  return(
  <div className="RequestBotan">
     <Button variant="contained" color="primary" classes={{
       root: classes.RequestBotan__root,
     }}
     onClick = {e =>{props.clickSendRequest()}

     }
     >
       request
     </Button>



  </div>);
}

export default withStyles(styles)(RequestBotan);
