import React from 'react';
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
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
});

const SignInForm=(props)=>{
  const { classes } = props;
  console.log(props.sIdFlag);
  return (
    <div>
      <div>
        <TextField
          id="studentId"
          label="学籍番号"
          className={classes.textField}
          onChange={
            e => {
              props.changeForm(e)
            }
          }
          margin="normal"
          value={props.sId}
          errorFlag="studentId_flag"
          error={props.checkError}
          helperText={(props.sIdFlags||props.checkError) ? "数字のみ入力可能です" : (props.sIdFlag&&props.checkError) ? "学籍番号を入力してください" : ""}
        />
      </div>
      <div>
        <TextField
          id="password"
          label="パスワード"
          className={classes.textField}
          onChange={
            e => {
              props.changeForm(e)
            }
          }
          type="password"
          autoComplete="current-password"
          margin="normal"
          value={props.pass}
          errorFlag="password_flag"
          error={props.passFlag&&props.checkError}
          helperText={(props.passFlags&&props.checkError) ? "英数字のみ入力可能です" : (props.passFlag&&props.checkError) ? "パスワードを入力してください" : ""}
        />
      </div>
    </div>
  );
}

export default withStyles(styles)(SignInForm)
