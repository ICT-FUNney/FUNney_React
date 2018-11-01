import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import logo from './logo.svg';
import './App.css';

const styles = theme => ({

  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: "50px",
    width: 200,
  },

});


class TextFields extends React.Component {
  state = {
    name: '',
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <form className={classes.container} noValidate autoComplete="off">
　　　　 <div>
        <TextField
          id="standard-name"
          label="送り先学籍番号"
          className={classes.textField}
          value={this.state.name}
          onChange={this.handleChange('name')}
          margin="normal"
        />
        </div>
        <TextField
          required
          id="standard-request"
          label="要求金額"
          defaultValue=""
          className={classes.textField}
          margin="normal"
        />
      </form>
    );
  }
}


TextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextFields);
