import React, { Component } from 'react';
import logo from '../logo.svg';
import RequestInput from '../components/RequestInput.js';
import RequestBotan from '../components/RequestBotan.js';
import '../App.css'

class Request extends Component {
  constructor(props) {
    super(props);
  }
  clickSendRequest(){
  this.props.history.push('/home');
  }

  render() {
    return (
      <div className="Request">
       <div>
        <div className="RequestInput">
        <RequestInput />
       </div>
       <div className="RequestBotan">
        <RequestBotan clickSendRequest = {(e)=>{this.clickSendRequest()}
      }/>
       </div>
      </div>
      </div>
    );
  }
}

export default Request;
