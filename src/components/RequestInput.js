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

const requestMethod = [
  {
    value: 'noselect',
    label: '選択してください',
  },
  {
    value: 'QR',
    label: 'QRコード',
  },
  {
    value: 'mail',
    label: 'メール',
  },
];


const RequestInput = (props) => {

    const { classes } = props;
    return (
      <form className={classes.container} noValidate autoComplete="off">
　　　　 <div>
        <TextField
         id="standard-uncontrolled"
         error={props.errorFlagNameNumber || props.errorFlagName}
         helperText ={(props.errorFlagName)? "error": (props.errorFlagNameNumber)? "error 半角数字のみ入力してください" : ""}
         label="要求金額"
         defaultValue=""
         className={classes.textField}
         value={props.name}
         onChange={e=>{props.handleChange(e)}}
         margin="normal"
         name="name"
        />
      </div>
      <div>
        <TextField
          id="standard-name"
          helperText ={(props.errorFlagDefaultValue)? "error":(props.errorFlagDefaultValueNumber) ? "error 半角数字のみ入力してください" : ""}
          error={props.errorFlagDefaultValueNumber || props.errorFlagDefaultValue}
          label="送り先学籍番号"
          className={classes.textField}
          value={props.defaultValue}
          onChange={e=>{props.handleChange(e)}}
          margin="normal"
          name="defaultValue"
        />
        </div>
        <TextField
         id="standard-select-currency"
         helperText ={(props.errorFlagRequestSelect)? "error": ""}
         error={props.errorFlagRequestSelect}
         select
         label="要求方法"
         className={classes.textField}
         value={props.requestSelect}
         onChange={e=>{props.handleChange(e)}}
         SelectProps={{
           MenuProps: {
             className: classes.menu,
           },
         }}

         margin="normal"
         name="requestSelect"
       >
         {requestMethod.map(option => (
           <MenuItem key={option.value} value={option.value}>
             {option.label}
           </MenuItem>
         ))}
       </TextField>
      </form>
    );
  }


export default withStyles(styles)(RequestInput);
