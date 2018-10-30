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
      <Button color="primary" className={classes.button}>ログイン</Button>
    </div>
  );
}

export default withStyles(styles)(LoginButton);
