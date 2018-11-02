import React, { Component } from 'react';
import logo from '../logo.svg';
import RequestInput from '../components/RequestInput.js';
import RequestBotan from '../components/RequestBotan.js';
import '../App.css'

class Request extends Component {
  render() {
    return (
      <div className="Request">
      <div>
      <div className="RequestInput">
      <RequestInput />
      </div>
      <div className="RequestBotan">
      <RequestBotan />
      </div>
      </div>
      </div>
    );
  }
}

export default Request;
