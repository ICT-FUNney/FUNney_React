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


const RequestInput = (props) => {

    const { classes } = props;
    return (
      <form className={classes.container} noValidate autoComplete="off">
　　　　 <div>
        <TextField
         id="standard-uncontrolled"
         helperText ={(props.errorFlagName)? "error": ""}
         error={props.errorFlagName}
         label="要求金額"
         defaultValue=""
         className={classes.textField}
         onChange={e=>{props.handleChange(e)}}
         margin="normal"
         name="name"
        />
      </div>
        <TextField
          id="standard-name"
          helperText ={(props.errorFlagDefaultValue)? "error": ""}
          error={props.errorFlagDefaultValue}
          label="送り先学籍番号"
          className={classes.textField}
          value={props.name}
          onChange={e=>{props.handleChange(e)}}
          margin="normal"
          name="defaultValue"
        />
      </form>
    );
  }


export default withStyles(styles)(RequestInput);
