import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Toolbar from '@material-ui/core/Toolbar';

import Typography from '@material-ui/core/Typography';

const styles = {
  root: {
    display: 'flex',
    width: '100%',
    background: "#FF8C00"
  },
  Root__Text: {
    color: "white"
  }
};

const Mobilebar = (props) => {
  const { classes } = props;
  return (
    <Paper square component="header" elevation={0} className = {classes.root}>
      <Toolbar>
        <Typography variant="h6" className = {classes.Root__Text}>
          {props.task}
        </Typography>
      </Toolbar>
    </Paper>
  );
}

export default withStyles(styles)(Mobilebar);