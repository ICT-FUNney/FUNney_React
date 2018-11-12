import React, { Component } from 'react';
import Send from '../components/Send.js';

class AppSend extends Component {
	state = {
		studentNum:'',
		sendMoney: '',
		errorMoney: false,
		errorNum: false,
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

	sendSubmit=e=>{
		e.preventDefault()
		if(!this.state.sendMoney.trim()||!this.state.studentNum.trim()){
			this.setState({
				errorMoney: (!this.state.sendMoney.trim())? true: false,
				errorNum: (!this.state.studentNum.trim())? true: false,
			})
			return
		}
		this.setState({
			submitModal: true,
			errorMoney: false,
			errorNum: false,
		});
	};

	sendDetermine=()=>{
		this.setState({
			sendMoney: '',
			studentNum: '',
			errorMoney: false,
			errorNum: false,
			submitModal: false,
		});
	};
	render(){
		return (
			<div className='Send'>
				<Send
					sendSubmit={(e)=>{this.sendSubmit(e)}}
					errorNumText={this.state.errorNum?'学籍番号を入力してください':''}
					errorMoneyText={this.state.errorMoney?'送金金額を入力してください':''}
					errorMoney={this.state.errorMoney}
					errorNum={this.state.errorNum}
					submitModal={this.state.submitModal}
					closeModal={this.closeModal}
					sendDetermine={this.sendDetermine}
          handleChange={(e)=>{this.handleChange(e)}}
          sendMoney={this.state.sendMoney}
          studentNum={this.state.studentNum}
        />
      </div>
		);
	}
}
export default AppSend;
