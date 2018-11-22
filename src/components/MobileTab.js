import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import SettingsIcon from '@material-ui/icons/Settings';
import VerticalAlignBottomIcon from '@material-ui/icons/VerticalAlignBottom';
import HomeIcon from '@material-ui/icons/Home';
import SendIcon from '@material-ui/icons/Send';

const styles = {
  root: {
    position: "fixed",
    top: "56px",
    left: 0,
    width: "100%",
    background: "#FF8C00"
  },
  Tabs__root: {
    color: "white"
  },
  Tabs__indicator: {
    background: "white"
  }
};

const MobileTab = (props) => {
  const { classes } = props;
  console.log(props.value)
  return (
    <Paper square className={classes.root}>
    <Tabs
      className = {classes.Tabs__root}
      classes = {{
        indicator: classes.Tabs__indicator,
      }}
      value={props.value}
      onChange={(e, v) => {props.handleChange(v)}}
      fullWidth
      indicatorColor="primary"
      textColor="inherit" >
      <Tab icon={<HomeIcon />} />
      <Tab icon={<SendIcon />} />
      <Tab icon={<VerticalAlignBottomIcon />} />
      <Tab icon={<SettingsIcon />} />
     </Tabs>
     </Paper>
  );
}


export default withStyles(styles)(MobileTab);
