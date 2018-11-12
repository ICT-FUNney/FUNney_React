import {Compornet} from 'react';
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
    width: 200,
  },
});

const SignUpForm=(props)=>{
  const {classes} = props;
  return(
    <div>
      <div>
        <TextField
          required
          id="standard-required"
          label="学籍番号"
          defaultValue="猪飼"
          className={classes.textField}
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
  )
}

export default withStyles(styles)(SignUpForm);
