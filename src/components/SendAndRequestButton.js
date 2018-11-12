import React from 'react';

import { withStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';

const style = (theme) =>({
  SendButton: {
    marginRight: "50px",
}});

const SendAndRequestButton = (props) =>{
  const { classes } = props;
  return (
    <div>
      <Button variant="contained" size="large" color="primary" className={classes.SendButton}>
        Send
      </Button>
      <Button variant="contained" size="large" color="primary"
      className={classes.button}
      onClick = {props.clickButton}>
        Request
      </Button>
   </div>
  );
}

export default withStyles(style)(SendAndRequestButton);
