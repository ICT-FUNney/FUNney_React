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
import DraftsIcon from '@material-ui/icons/Drafts';
import BluetoothIcon from '@material-ui/icons/Bluetooth';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
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
           <ListItem button>
             <ListItemIcon>
               <BluetoothIcon />
             </ListItemIcon>
             <ListItemText inset primary="個人情報" />
           </ListItem>
           <ListItem button>
             <ListItemIcon>
               <DraftsIcon />
             </ListItemIcon>
             <ListItemText inset primary="なんか" />
           </ListItem>
           <ListItem button>
             <ListItemIcon>
               <DraftsIcon />
             </ListItemIcon>
             <ListItemText inset primary="なんか" />
           </ListItem>
         </List>
       );
}
SettingForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SettingForm);
