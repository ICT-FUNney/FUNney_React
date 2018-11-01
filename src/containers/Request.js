import React, { Component } from 'react';
import logo from '../logo.svg';
import UserName from '../components/UserName.js';
import TestBotan from '../components/TestBotan.js';
import '../App.css'

class Request extends Component {
  render() {
    return (
      <div className="Request">
      <div>
      <div className="UserName">
      <UserName/>
      </div>
      <div className="TestBotan">
      <TestBotan />
      </div>
      </div>
      </div>
    );
  }
}

export default Request;
