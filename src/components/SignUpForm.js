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
});

const SignUpForm=(props)=>{
  const {classes} = props;
  return(
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
          value={props.studentid}
          InputLabelProps={{error: false}}
          error={props.checkError&&((props.studentidFlag)||(props.studentidFlags))}
          helperText={(props.studentidFlag&&props.checkError) ? "入力されていません" : (props.studentidFlags&&props.checkError) ? "数字のみ入力してください" : ""}
          margin="normal"
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
          value={props.password}
          InputLabelProps={{error: false}}
          error={props.checkError&&((props.passwordFlag)||(props.passwordFlags))}
          helperText={(props.passwordFlag&&props.checkError) ? "入力されていません" : (props.passwordFlags&&props.checkError) ? "英数字のみ入力してください" : ""}
          margin="normal"
        />
      </div>
      <div>
        <TextField
          id="passwordRe"
          label="パスワード再入力"
          className={classes.textField}
          onChange={
            e => {
              props.changeForm(e)
            }
          }
          type="password"
          autoComplete="current-password"
          value={props.repassword}
          InputLabelProps={{error: false}}
          error={props.checkError&&((props.repasswordFlag)||(props.repasswordFlags)||(!(props.repassword === props.password)))}
          helperText={(props.repasswordFlag&&props.checkError) ? "入力されていません" : (props.repasswordFlags&&props.checkError) ? "英数字のみ入力してください" : (props.checkError)&&(!(props.repassword === props.password)) ? "パスワードの値と異なります" : ""}
          margin="normal"
        />
      </div>
    </div>
  )
}

export default withStyles(styles)(SignUpForm);
