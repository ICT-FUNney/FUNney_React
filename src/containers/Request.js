import React, { Component } from 'react';
import logo from '../logo.svg';
import RequestInput from '../components/RequestInput.js';
import RequestBotan from '../components/RequestBotan.js';
import '../App.css'

class Request extends Component {
  constructor(props) {
    super(props);
    this.state= {
      name: "",
      errorFlagName: false,
      erroFlagDefaultValue:false,
      defaultValue:"",
    }
  }

  clickSendRequest(){
  if(this.state.name === "" ){
    this.setState({
    errorFlagName: true,
    })
  }else if(this.state.defaultValue === ""){
    this.setState({
    errorFlagDefaultValue: true,
    })
  }else{
    this.props.history.push('/home');
  }
}

handleChange = (e, name) => {
  this.setState({
    [name]: e.target.value,
  });
};

  render() {
    console.log(this.state)
    return (
      <div className="Request">
       <div>
        <div className="RequestInput">
        <RequestInput handleChange = {(e)=>{this.handleChange(e,e.target.name)}}
         errorFlagName={this.state.errorFlagName}
         errorFlagDefaultValue={this.state.errorFlagDefaultValue}
        />
       </div>
       <div className="RequestBotan">
        <RequestBotan clickSendRequest = {()=>{this.clickSendRequest()}
      }/>
       </div>
      </div>
      </div>
    );
  }
}

export default Request;
