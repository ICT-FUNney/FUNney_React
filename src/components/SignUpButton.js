import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

const SignUpButton=(props)=>{
  const { classes} = props;
  return(
    <div>
      <Button variant="contained" color="secondary" className={classes.button}>
        新規登録
      </Button>
    </div>
  )
}

export default withStyles(styles)(SignUpButton);
