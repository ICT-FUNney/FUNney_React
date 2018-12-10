import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import AccountIcon from '../Image/account.png';

import '../Home.css';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

const HomeUserAndProperty=(props)=> {
  const { classes } = props;

  return (
    <div className="accountInformation">
      <Paper className={classes.root} elevation={1}>
        <div className="showInformation">
          <img className="accountIcon" src={AccountIcon} alt="logo" />
          <div className="space1" />
          <Typography className="user" variant="h4" component="h1">{props.userID}       さん</Typography>
          <div className="space2" />
          <Typography className="property" variant="h4" component="h1"> 総資産額     {props.userProperty}  FUNney</Typography>
        </div>
      </Paper>
    </div>
  );
}

export default withStyles(styles)(HomeUserAndProperty);
