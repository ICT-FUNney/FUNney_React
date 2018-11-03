import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const style  = (theme) => ({
  Sendtest: {
    marginTop:  30,
    width: 200,
}
});

const SendButton = (props) =>{
  const { classes } = props;
  return (
    <div>
      <Button 
        variant="contained" 
        size="large" 
        color="primary" 
        className={classes.Sendtest}>
          Send
      </Button>
    </div>
  );
}

export default withStyles(style)(SendButton);
