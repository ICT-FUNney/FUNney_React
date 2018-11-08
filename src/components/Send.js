import React from 'react';

import { withStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  menu: {
    width: 200,
  },
  button: {
    margin: theme.spacing.unit,
    width: 200,
  },
  input: {
    display: 'none',
  },
});


const Send = (props) =>{
  const { classes } = props;
  return (
    <div>
      <form
        noValidate
        autoComplete="off"
        onSubmit={e=>{props.sendSubmit(e)}}
      >
        <div>
          <TextField
            id="sendMoney"
            name="sendMoney"
            helperText={props.errorText}
            error={props.errorFlag}
            label="送金金額"
            className={classes.textField}
            onChange={e=>{props.handleChange(e)}}
            value={props.sendMoney}
            margin="normal"
          />
        </div>
        <div>
          <TextField
            id="studentNum"
            name="studentNum"
            helperText={props.errorText}
            error={props.errorFlag}
            label="送り先 学籍番号"
            className={classes.textField}
            onChange={e=>{props.handleChange(e)}}
            value={props.studentNum}
            margin="normal"
          />
        </div>
        <div>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            type="submit"
          >
            send
          </Button>
        </div>
      </form>
    </div>
  );
}

export default withStyles(styles)(Send);
