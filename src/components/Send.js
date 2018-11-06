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
      <div>
        <TextField
          id="sendMoney"
          name="sendMoney"
          helperText={props.errorText}
          error={props.errorFlag}
          label="送金金額"
          className={classes.textField}
          onChange={e=>{props.handleChange(e,e.target.name)}}
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
          onChange={e=>{props.handleChange(e,e.target.name)}}
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
    </div>
  );
}

export default withStyles(styles)(Send);