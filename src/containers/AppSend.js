import React, { Component } from 'react';
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

	sendSubmit=e=>{
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
          handleChange={(e)=>{this.handleChange(e,e.target.name)}}
          sendMoney={this.state.sendMoney}
          studentNum={this.state.studentNum}
        />
      </div>
		);
	}
}
<<<<<<< HEAD

=======
>>>>>>> インデントの修正
export default AppSend;
