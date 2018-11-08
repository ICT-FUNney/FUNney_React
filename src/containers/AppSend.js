import React, { Component } from 'react';
import Send from '../components/Send.js';

class AppSend extends Component {
	state = {
		studentNum:'',
		sendMoney: '',
<<<<<<< HEAD
    errorFlag: false,
		submitModal: false,
  };

=======
		errorMoney: false,
		errorNum: false,
		submitModal: false,
	};
>>>>>>> if文追加
	handleChange =e=> {
		let number=new RegExp(/^\d*$/);
		if(!number.test(e.target.value)){
			return
		}
<<<<<<< HEAD
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
=======

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
>>>>>>> if文追加
			})
			return
		}
		this.setState({
			errorFlag: false,
			submitModal: true,
		});
	};
<<<<<<< HEAD

=======
>>>>>>> if文追加
	sendDetermine=()=>{
		this.setState({
			sendMoney: '',
			studentNum: '',
<<<<<<< HEAD
			submitModal: false,
		});
		this.props.history.push('/home');
	};

=======
			errorMoney: false,
			errorNum: false,
		});
		this.props.history.push('/home');
	};
>>>>>>> if文追加
	render(){
		return (
			<div className='Send'>
				<Send
<<<<<<< HEAD
					sendSubmit={e=>{this.sendSubmit(e)}}
          errorText='error'
          errorFlag={this.state.errorFlag}
          handleChange={e=>{this.handleChange(e)}}
          sendMoney={this.state.sendMoney}
          studentNum={this.state.studentNum}
					submitModal={this.state.submitModal}
					closeModal={this.closeModal}
					sendDetermine={this.sendDetermine}
=======
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
>>>>>>> if文追加
        />
      </div>
		);
	}
}
<<<<<<< HEAD

export default AppSend;
=======
export default AppSend;

>>>>>>> if文追加
