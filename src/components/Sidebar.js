import React from 'react';
import FUNneyLogo from '../Image/FUNneyLogo.png';

import { withStyles } from '@material-ui/core/styles';

import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';

const style = (theme) =>({
  Drawer__paper: {
    top: "30vh",
    width: "230px"
  },
  ListItemIcon__root: {
    marginRight: 0
  },
  ListItemText__primary: {
    fontSize: '1.5em',
  },
  ListItem__root: {
    background: '#FF8C00',
  },
});

const Sidebar = (props) =>{
  const { classes } = props;
  return (
    <div>
      <Drawer open = {true} elevation	= {7} ModalProps = {{BackdropProps: {open: false}}} classes = {{
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
        </ListItem>
      </List>
      <Divider />
        <List>
          {['HOME', 'SEND','Request', 'Setting', 'Sign up'].map((text, index) => {
            if(text!==props.target){
              return (
                <ListItem button value = {text} key={text} onClick = {e => {
                  props.clickTask(text)
                }}>
                  <ListItemText primary={text} />
                </ListItem>
              )
            }
            else {
              return (
                <ListItem key={text} classes = {{
                  root: classes.ListItem__root,
                }}>
                  <ListItemText primary={text} />
                </ListItem>
              )
            }
          })}
       </List>
     </Drawer>
    </div>
  );
}

export default withStyles(style)(Sidebar)
