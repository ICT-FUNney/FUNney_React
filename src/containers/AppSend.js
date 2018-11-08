import React, { Component } from 'react';
import Send from '../components/Send.js';

class AppSend extends Component {
	state = {
		studentNum:'',
		sendMoney: '',
    errorFlag: false,
		submitModal: false,
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

	closeModal=()=>{
		this.setState({
			submitModal: false,
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
			errorFlag: false,
			submitModal: true,
		});
	};

	sendDetermine=()=>{
		this.setState({
			sendMoney: '',
			studentNum: '',
			submitModal: false,
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
					submitModal={this.state.submitModal}
					closeModal={this.closeModal}
					sendDetermine={this.sendDetermine}
        />
      </div>
		);
	}
}

export default AppSend;
