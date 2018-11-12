import React, { Component } from 'react';
import Send from '../components/Send.js';

class AppSend extends Component {
	state = {
		studentNum:'',
		sendMoney: '',
		errorMoney: false,
		errorNum: false,
		submitModal: false,
		isSpaceNum: false,
		isSpaceMoney: false,
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
		e.preventDefault()
		let isNumber=new RegExp(/^\d\d*$/);
		let trimMoney=this.state.sendMoney.trim();
		let trimNum=this.state.studentNum.trim();
		let sendMoneyValue=isNumber.test(trimMoney);
		let studentNumValue=isNumber.test(trimNum);
		if(!studentNumValue||!sendMoneyValue){
			this.setState({
				errorMoney: (!sendMoneyValue)? true: false,
				errorNum: (!studentNumValue)? true: false,
				isSpaceMoney: (!trimMoney)? true:false,
				isSpaceNum: (!trimNum)? true:false,
			})
			return
		}
		this.setState({
			submitModal: true,
			errorMoney: false,
			errorNum: false,
			isSpaceMoney: false,
			isSpaceNum: false,
		});
	};

	sendDetermine=()=>{
		this.setState({
			sendMoney: '',
			studentNum: '',
			errorMoney: false,
			errorNum: false,
			isSpaceMoney: false,
			isSpaceNum: false,
			submitModal: false,
		});
	};
	render(){
		let errorNumMes='半角数字のみ入力してください';
		let errorSpaceMes="入力されていません";
		return (
			<div className='Send'>
				<Send
					sendSubmit={(e)=>{this.sendSubmit(e)}}
					errorNumText={this.state.errorNum?(this.state.isSpaceNum? errorSpaceMes:errorNumMes):''}
					errorMoneyText={this.state.errorMoney?(this.state.isSpaceMoney? errorSpaceMes:errorNumMes):''}
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
