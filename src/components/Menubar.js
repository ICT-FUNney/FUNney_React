import React from 'react';

import { withStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const style = (theme) =>({
  Menubar: {
    display: "flex",
    justifyContent: "space-between"
  },
});

const Menubar = (props) =>{
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar className={classes.Menubar} variant="dense">
          <Typography variant="h5" color="inherit">
            FUNney
          </Typography>
          <Typography color="inherit">
            Login
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withStyles(style)(Menubar)
