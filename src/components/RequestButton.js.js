import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const styles = (theme) => ({
  RequestButton__root:{
    marginLeft: theme.spacing.unit,
<<<<<<< HEAD:src/components/RequestButton.js
    marginRight: "50px",
    width: 200,
=======
    width : 200,
>>>>>>> 携帯版の要求画面を作成:src/components/RequestButton.js
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
