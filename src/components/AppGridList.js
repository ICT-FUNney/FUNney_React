import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const styles = theme => ({
  GridList__tile: {
    background: "#FF8C00",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  gridList: {
    width: "50%",
    height: 500,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  Subheader: {
    color: "black",
  },
  Left: {

  },
  Icon: {
    fontSize: "5em"
  }
});

const AppGridList = (props) => {
  const { classes } = props;
  return (
      <GridList cellHeight={150} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div" className = {classes.Subheader}>注目の取引</ListSubheader>
        </GridListTile>
        {["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"].map(tile => (
          <GridListTile classes = {{
            tile : classes.GridList__tile,
          }}>
          <div className = {classes.Left}>
            <AccountCircleIcon className = {classes.Icon}/>
          </div>
          <div className = {classes.Left}>
            aaaaaaa
          </div>
          </GridListTile>
        ))}
      </GridList>
  );
}



export default withStyles(styles)(AppGridList);
