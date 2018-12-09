import React from 'react';
import PropTypes from 'prop-types';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListSubheader from "@material-ui/core/ListSubheader";
import { withStyles } from '@material-ui/core/styles';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import BluetoothIcon from '@material-ui/icons/Bluetooth';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Divider from '@material-ui/core/Divider';


const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 310,
    backgroundColor: theme.palette.background.paper,
    margin:30,
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
});

const SettingForm=(props)=>{
  const { classes } = props;

  return(
    <List
      component="nav"
      subheader={
        <ListSubheader component="div">Account</ListSubheader>
      }
      className={classes.root}
      >
      <Divider />
      <ListItem button>
        <ListItemIcon >
          <AccountCircleIcon/>
        </ListItemIcon>
        <ListItemText inset primary="個人情報"/>
      </ListItem>
      <Divider />
      <ListItem button>
        <ListItemIcon>
          <BluetoothIcon />
        </ListItemIcon>
        <ListItemText inset primary="none" />
      </ListItem>
      <Divider />
      <ListItem button>
        <ListItemIcon>
          <MoreHorizIcon />
        </ListItemIcon>
        <ListItemText inset primary="none" />
      </ListItem>
      <Divider />
      <ListItem button>
        <ListItemIcon>
          <MoreHorizIcon />
        </ListItemIcon>
        <ListItemText inset primary="more" />
      </ListItem>
      <Divider />
    </List>
  );
}

SettingForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SettingForm);
