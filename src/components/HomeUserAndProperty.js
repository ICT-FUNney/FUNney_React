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
    width: "70vw",
  },
});

const HomeUserAndProperty=(props)=> {
  const { classes } = props;

  return (
    <div className="accountInformation">
      <div className="showInformation">
        <div className="user">
          <b>
            User
          </b>
        </div>
        <div className="space1" />
        <Typography className="userName" variant="h4" component="h1">
          <b>
            {props.userID}       さん
          </b>
        </Typography>
        <div className="space2" />
        <Typography className="property" variant="h4" component="h1">
          <b>
            総資産&nbsp;&nbsp;{props.userProperty}&nbsp;&nbsp;FNY
          </b>
        </Typography>
      </div>
      <div className="space3" />
      <hr size="4" color="orange"/>
    </div>
  );
}

export default withStyles(styles)(HomeUserAndProperty);
