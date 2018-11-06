import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Send from '../components/Send.js';



class AppSend extends Component {
	state = {
		studentNum:'',
		sendMoney: '',
    errorFlag: false,
  };

	handleChange =(event,name) => {
    this.setState({
      [name]: event.target.value,
    });
  };

	render(){

		return (
      <div className='Send'>
        <form
          noValidate
          autoComplete="off"
          onSubmit={e=>{
            e.preventDefault()
            if(!this.state.sendMoney.trim()){
              this.setState({
                errorFlag:true,
              })
              return
            }
            if(!this.state.studentNum.trim()){
              this.setState({
                errorFlag:true,
              })
              return
            }
            this.setState({
              sendMoney: '',
              studentNum: '',
              errorFlag: false,
            });
            this.props.history.push('/home');
          }}
        >
          <Send
            errorText='error'
            errorFlag={this.state.errorFlag}
            handleChange={(e)=>{this.handleChange(e,e.target.name)}}
            sendMoney={this.state.sendMoney}
            studentNum={this.state.studentNum}
          />
        </form>
      </div>
		);
	}
}

export default AppSend;
