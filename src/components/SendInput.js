import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';

const style = (theme) => ({
  SendInput: {
    marginBottom: 30,
    marginleft: 50, 
    marginRight: 50,
}

});

const SendInput= (props) =>{
  const { classes } = props;
  return (
      <div calssname='Send'>
    <div>
    <Input type="text" placeholder='送金先学籍番号' className={classes.SendInput}/>
    </div>
    <div>
    <Input type='text' placeholder='送金金額' className={classes.SendInput}/>
    </div>
    </div>
  );
}

export default withStyles(style)(SendInput);