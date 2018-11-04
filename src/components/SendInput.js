/*import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';

const style = (theme) => ({
  SendInput: {
    marginBottom: theme.spacing.unit,
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
}});

const SendInput= (props) =>{
  const { classes } = props;
  return (
    <div calssname='Send'>
        <div>
            <h4 className={classes.SendInput}>送金先学籍番号：</h4>
            <Input type="text" className={classes.SendInput}/>
        </div>
        <div>
            <h4 className={classes.SendInput}>送金金額：</h4>
            <Input type='text' className={classes.SendInput}/>
        </div>
    </div>
  );
}

export default withStyles(style)(SendInput);*/
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
});



class FilledTextFields extends React.Component {
  state = {
    name: 'Cat in the Hat',
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
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="filled-name"
          label="Name"
          className={classes.textField}
          value={this.state.name}
          onChange={this.handleChange('name')}
          margin="normal"
          variant="filled"
        />
        <TextField
          id="filled-uncontrolled"
          label="Uncontrolled"
          defaultValue="foo"
          className={classes.textField}
          margin="normal"
          variant="filled"
        />
        <TextField
          required
          id="filled-required"
          label="Required"
          defaultValue="Hello World"
          className={classes.textField}
          margin="normal"
          variant="filled"
        />
        <TextField
          error
          id="filled-error"
          label="Error"
          defaultValue="Hello World"
          className={classes.textField}
          margin="normal"
          variant="filled"
        />
        
        
      </form>
    );
  }
}

FilledTextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FilledTextFields);