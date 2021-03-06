import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    background: "#ff9100",
  },
});

const SignInButton=(props)=>{
  const { classes } = props;
  return (
    <Button
      color="inherit"
      variant="contained"
      className={classes.button}
      onClick = {
        e => {
          props.clickTask()
        }
      }
    >サインイン
    </Button>
  )
}

export default withStyles(styles)(SignInButton)
