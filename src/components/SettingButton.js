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
import UnarchiveIcon from '@material-ui/icons/Unarchive';

const SettingButton=(props)=>{
  const { classes } = props;
  const styles = theme => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
      margin:10,
    },
    nested: {
      paddingLeft: theme.spacing.unit * 4,
    },
  });

  return(
    <ListItem button>
    <ListItemIcon>
    <UnarchiveIcon/>
    </ListItemIcon>
    <ListItemText inset primary="Sign out" />

    </ListItem>
  )
}

SettingButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default (SettingButton);
