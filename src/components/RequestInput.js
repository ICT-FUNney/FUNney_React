import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import '../App.css';

const styles = theme => ({

    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      marginBottom: "20%",
    width: "20vw",
    [theme.breakpoints.down('md')]:{
      width : "50vw",
    },
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
　　　　 <div classname="RequestCost">
        <TextField
         id="standard-uncontrolled"
         error={props.errorFlagNameNumber || props.errorFlagName}
         helperText ={(props.errorFlagName)? "入力されていません": (props.errorFlagNameNumber)? "半角数字のみ入力してください" : ""}
         label="要求金額"
         InputLabelProps={{error: false}}
         defaultValue=""
         className={classes.textField}
         value={props.name}
         onChange={e=>{props.handleChange(e)}}
         margin="normal"
         name="name"
        />
      </div>
      <div classname="RequestStudentNumber">
        <TextField
          id="standard-name"
          helperText ={(props.errorFlagDefaultValue)? "入力されていません":(props.errorFlagDefaultValueNumber) ? "半角数字のみ入力してください" : ""}
          error={props.errorFlagDefaultValueNumber || props.errorFlagDefaultValue}
          label="要求先の学籍番号"
          InputLabelProps={{error: false}}
          className={classes.textField}
          value={props.defaultValue}
          onChange={e=>{props.handleChange(e)}}
          margin="normal"
          name="defaultValue"
        />
        </div>
        <div classname="RequestMethod">
        <TextField
         id="standard-select-currency"
         helperText ={(props.errorFlagRequestSelect)? "入力されていません": ""}
         error={props.errorFlagRequestSelect}
         select
         label="要求方法"
         InputLabelProps={{error: false}}
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
       </div>
      </form>
    );
  }


export default withStyles(styles)(RequestInput);
