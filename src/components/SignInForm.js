import React, { Component } from 'react';
//import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
//import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
});

class SignInForm extends Component {
  state = {
    name: '',
    age: '',
    multiline: 'Controlled',
    currency: 'EUR',
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <div>
          <TextField
            id="standard-name"
            label="学籍番号"
            className={classes.textField}
            onChange={this.handleChange('name')}
            margin="normal"
          />
        </div>
        <div>
          <TextField
            id="standard-password-input"
            label="パスワード"
            className={classes.textField}
            type="password"
            autoComplete="current-password"
            margin="normal"
          />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(SignInForm)
