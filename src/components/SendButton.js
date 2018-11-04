import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const style  = (theme) => ({
  Sendtest: {
    margintop: theme.spacing.unit,
    margin: theme.spacing.unit,
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
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
          送金
      </Button>
    </div>
  );
}

export default withStyles(style)(SendButton);
