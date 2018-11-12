import React from 'react';
import FUNneyLogo from '../Image/FUNneyLogo.png';

import { withStyles } from '@material-ui/core/styles';

import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import IconButton from '@material-ui/core/IconButton';

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import SettingsIcon from '@material-ui/icons/Settings';
import VerticalAlignBottomIcon from '@material-ui/icons/VerticalAlignBottom';
import HomeIcon from '@material-ui/icons/Home';
import SendIcon from '@material-ui/icons/Send';
import UnarchiveIcon from '@material-ui/icons/Unarchive';


const style = (theme) =>({
  Drawer__paper: {
    width: "230px",
    overflowY: "visible"
  },
  SidebarList: {
    marginTop: "30px",
  },
  SidebarListItems: {
    width: "90%",
    marginLeft: "10%",
    marginBottom: "15px",
    '&:last-child': {
      marginTop: "30vh",
    },
  },
  SidebarListItemsTarget: {
    width: "90%",
    color: "white",
    marginLeft: "12%",
    marginBottom: "15px",
    '&:last-child': {
      marginTop: "30vh",
    },
    background: '#FF8C00',
    boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)"
  },

  SidebarListItemsTexts__primary: {
    lineHeight: "2em",
  },
  SidebarListItemsTexts__target: {
    color: "white",
    lineHeight: "2em",
  },
  ListItemIcon__root: {
    marginRight: 0
  },
  ListItemText__primary: {
    fontSize: '1.5em',
  },
  ListItem__root: {
    background: '#FF8C00',
    boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)"
  },
  ButtonCloseSidebar: {
    marginLeft: "90px"
  },
  TargetIcon: {
    color: "white",
  }
});

const Sidebar = (props) =>{
  const { classes } = props;
  const icons = [<HomeIcon />, <SendIcon />, <VerticalAlignBottomIcon /> ,
    <SettingsIcon />, <UnarchiveIcon />,
  ];
  return (
    <div>
      <Drawer
        variant="persistent"
        open = {props.open} elevation	= {7}  classes = {{
        paper: classes.Drawer__paper,
      }} >
      <List>
        <ListItem>
          <ListItemIcon classes = {{
            root: classes.ListItemIcon__root
          }}>
            <img src={FUNneyLogo} className="Sidebar__FUNneyLogo"  alt="logo" />
          </ListItemIcon>
          <ListItemText primary="FUNney" classes = {{
            primary: classes.ListItemText__primary
          }} />
          <IconButton onClick={props.handleDrawerClose} className = {classes.ButtonCloseSidebar}>
              <ChevronLeftIcon />
          </IconButton>
        </ListItem>
      </List>
      <Divider />
        <List className = {classes.SidebarList}>
          {['HOME', 'SEND','Request', 'Setting', 'Signout'].map((text, index) => {
              return (
                <ListItem button = {(text!==props.target) ? true : false} value = {text} key={text}
                 className = {(text!==props.target) ? classes.SidebarListItems: classes.SidebarListItemsTarget}
                 onClick = {e => {
                  props.clickTask(text)
                }}>
                  <ListItemIcon className = {(text!==props.target) ? "": classes.TargetIcon}>
                    {icons[index]}
                  </ListItemIcon>
                  <ListItemText classes = {{
                    primary: (text!==props.target) ? classes.SidebarListItemsTexts__primary : classes.SidebarListItemsTexts__target
                   }}
                    primary={text} />
                </ListItem>
              )
            }
          )}
       </List>
     </Drawer>
    </div>
  );
}

export default withStyles(style)(Sidebar)
