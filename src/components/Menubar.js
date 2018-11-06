import React from 'react';

import { withStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import FUNneyLogo from '../Image/FUNneyLogo2.png';

const style = (theme) =>({
  Menubar: {
    background: "#FF8C00"
  },
});

const Menubar = (props) =>{
  const { classes } = props;
  return (
    <div className={classes.Menubar}>
      <AppBar position="fixed" className={classes.Menubar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            onClick={props.sidebarOpen} >
            <MenuIcon />
          </IconButton>
          <img src={FUNneyLogo} className="Sidebar__FUNneyLogo__header"  alt="logo" />
          <Typography variant="h5" color="inherit">
            FUNney
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withStyles(style)(Menubar)
