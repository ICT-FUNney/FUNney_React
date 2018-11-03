import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
const style  = (theme) => ({
  Sendtest: {
    marginTop:  30,
    width: 200,
}
});

const SendTestButton = (props) =>{
  const { classes } = props;
  return (
      <Button 
      variant="contained" 
      size="large" 
      color="primary" 
      className={classes.Sendtest} >
      <Icon className={classes.icon}>send</Icon>
        Send
      </Button>
  );
}

export default withStyles(style)(SendTestButton);
