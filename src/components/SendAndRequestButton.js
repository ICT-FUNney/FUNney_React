import React from 'react';

import { withStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';


const style = (theme) =>({
  SendButton: {
  }
});

const SendAndRequestButton = (props) =>{
  const { classes } = props;
  return (
    <div>
      <Button variant="contained" color="primary" className={classes.SendButton}>
        Send
      </Button>
      <Button variant="contained" color="primary" className={classes.button}>
        Request
      </Button>
   </div>
  );
}

export default withStyles(style)(SendAndRequestButton);
