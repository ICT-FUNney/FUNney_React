import React, { Component } from 'react';
import Send from '../components/Send.js';

class AppSend extends Component {
	state = {
		studentNum:'',
		sendMoney: '',
    errorFlag: false,
  };

	handleChange =e=> {
		let number=new RegExp(/^\d*$/);
		if(!number.test(e.target.value)){
			return
		}
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

	sendSubmit =e=> {
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
	};

	render(){
		return (
			<div className='Send'>
				<Send
					sendSubmit={e=>{this.sendSubmit(e)}}
          errorText='error'
          errorFlag={this.state.errorFlag}
          handleChange={e=>{this.handleChange(e)}}
          sendMoney={this.state.sendMoney}
          studentNum={this.state.studentNum}
        />
      </div>
		);
	}
}

export default AppSend;
