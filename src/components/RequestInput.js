import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({

  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: "50px",
    width: 200,
  },

});


class RequestInput extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
    }
  }

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

export default withStyles(styles)(RequestInput);
