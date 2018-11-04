import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  SendButton: {
    margintop: theme.spacing.unit,
    margin: theme.spacing.unit,
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
});

class Send extends React.Component {
  state = {
    name: null,
    money: null,
  };

  handleChangeName = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  handleChangeMoney = money => event => {
    this.setState({
      [money]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className="Send">
        <form className={classes.container} noValidate autoComplete="off">
          <div>
            <TextField
              id="UserName"
              label="送信先学籍番号"
              className={classes.textField}
              value={this.state.name}
              onChange={this.handleChangeName('name')}
              margin="normal"
              variant="filled"
            />
          </div>
          <div>
            <TextField
              id="Money"
              label="送金金額"
              className={classes.textField}
              value={this.state.money}
              onChange={this.handleChangeMoney('money')}
              margin="normal"
              variant="filled"
            />
          </div>
          <div>
            <Button 
              variant="contained" 
              size="large" 
              color="primary" 
              className={classes.SendButton}>
                送金
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

Send.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Send);

