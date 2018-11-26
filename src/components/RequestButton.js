import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const styles = (theme) => ({
  RequestButton__root:{
    marginLeft: theme.spacing.unit,

    width: "40vw",
    [theme.breakpoints.down('md')]:{
      width : "50vw",
    }
  },

});

const RequestButton= (props)=>{
  const { classes } = props;
  return(
  <div className="RequestButton">
     <Button variant="contained" color="primary" classes={{
       root: classes.RequestButton__root,
     }}
     onClick = {e =>{props.clickSendRequest()}

     }
    >
       request
     </Button>

  </div>);
}

export default withStyles(styles)(RequestButton);
