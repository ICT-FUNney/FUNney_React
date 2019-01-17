import React, { Component } from 'react';
import Send from '../components/Send.js';

class AppSend extends Component {
	state = {
		studentNum:'',
		sendMoney: '',
		errorMoney: false,
		errorNum: false,
		errorMoney2: false,
		submitModal: false,
		errorEmptyNum: false,
		errorEmptyMoney: false,
	};

	handleChange =e=> {
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
		e.preventDefault();
		let isMoneyNumber=new RegExp(/^\d\d*$/);
		let isStudentNumber=new RegExp(/^(b|\d)\d*$/);
		let trimMoney=this.state.sendMoney.trim();
		let trimNum=this.state.studentNum.trim();
		let sendMoneyValue=isMoneyNumber.test(trimMoney);
		let studentNumValue=isStudentNumber.test(trimNum);
		if(!studentNumValue||!sendMoneyValue||this.props.data.balance - Number(trimMoney)){
			this.setState({
				errorMoney: (!sendMoneyValue)? true: false,
				errorNum: (!studentNumValue)? true: false,
				errorEmptyMoney: (!trimMoney)? true:false,
				errorEmptyNum: (!trimNum)? true:false,
				errorMoney2: (this.props.data.balance - Number(trimMoney) < 0)? true: false,
			})
			return
		}
		this.setState({
			submitModal: true,
			errorMoney: false,
			errorNum: false,
			errorEmptyMoney: false,
			errorEmptyNum: false,
		});
	};

	sendDetermine=()=>{
		this.props.sendMoney(this.state);
		this.setState({
			sendMoney: '',
			studentNum: '',
			errorMoney: false,
			errorNum: false,
			errorEmptyMoney: false,
			errorEmptyNum: false,
			submitModal: false,
		});
	};
	render(){
		console.log(this.state)
		return (
			<div className='Send'>
				<Send
					sendSubmit={(e)=>{this.sendSubmit(e)}}
					errorMoney={this.state.errorMoney}
					errorNum={this.state.errorNum}
					errorEmptyNum={this.state.errorEmptyNum}
					errorEmptyMoney={this.state.errorEmptyMoney}
					errorMoney2={this.state.errorMoney2}
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
