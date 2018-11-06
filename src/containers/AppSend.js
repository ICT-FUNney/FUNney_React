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
        <form
          noValidate
          autoComplete="off"
					onSubmit={e=>{this.sendSubmit(e)}}
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
