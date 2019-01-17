import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';

const styles = theme => ({
  AppHomeList: {
    width: '40%',
  },
  root: {
    backgroundColor: theme.palette.background.paper,
    position: 'relative',
    overflow: 'auto',
    maxHeight: '500px',
  },
  listSection: {
    backgroundColor: 'inherit',
  },
  ul: {
    backgroundColor: 'inherit',
    padding: 0,
  },
  Subheader: {
    color: "black",
  }
});

const AppHomeList = (props) => {
  const { classes } = props;
  return (
    <div className = {classes.AppHomeList}>
    <List className={classes.root} subheader={<li />}>
      {["５月", "４月", "３月", "２月", "１月"].map(sectionId => (
        <li key={`section-${sectionId}`} className={classes.listSection}>
          <ul className={classes.ul}>
            <ListSubheader classes = {{
              root: classes.Subheader,
            }}>{`${sectionId}の取引履歴`}</ListSubheader>
            {[0, 1, 2].map(item => (
              <ListItem key={`item-${sectionId}-${item}`}>
                <ListItemText primary={`Item ${item}`} />
              </ListItem>
            ))}
          </ul>
        </li>
      ))}
    </List>
    </div>
  );
}


export default withStyles(styles)(AppHomeList);
