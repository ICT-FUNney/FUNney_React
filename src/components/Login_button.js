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

const LoginButton=(props)=> {
  const { classes } = props;
  return (
    <div>
  {["HOME", "Login"].map((text, index) => {
    if(text !== props.target){
      return (
        <div>
          <Button color="primary" className={classes.button} onClick = {e => {
            props.clickTask(text)
          }}>ログイン</Button>
        </div>
      )
    } else {
      return (
        <div>
        <Button color="primary" className={classes.button}>ログイン</Button>
        </div>
      )
    }
  })}
  </div>
  )
}

export default withStyles(styles)(LoginButton)
