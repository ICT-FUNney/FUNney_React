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
		if(!this.state.sendMoney.trim()&&!this.state.studentNum.trim()){
			this.setState({
				errorMoney: true,
				errorNum: true,
			})
			return
		}if(this.state.sendMoney.trim()&&!this.state.studentNum.trim()){
			this.setState({
				errorMoney: false,
				errorNum: true,
			})
			return
		}if(!this.state.sendMoney.trim()&&this.state.studentNum.trim()){
			this.setState({
				errorMoney: true,
				errorNum: false,
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
			errorMoney: false,
			errorNum: false,
		});
		this.props.history.push('/home');
	};
	render(){
		return (
			<div className='Send'>
				<Send
					sendSubmit={(e)=>{this.sendSubmit(e)}}
					errorNumText='学籍番号を入力してください'
					errorMoneyText='送金金額を入力してください'
					errorMoney={this.state.errorMoney}
					errorNum={this.state.errorNum}
					submitModal={this.state.submitModal}
					closeModal={this.closeModal}
					sendDetermine={this.sendDetermine}
          handleChange={(e)=>{this.handleChange(e,e.target.name)}}
          sendMoney={this.state.sendMoney}
          studentNum={this.state.studentNum}
        />
      </div>
		);
	}
}
export default AppSend;
