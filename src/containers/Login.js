import React, { Component } from 'react';
import LoginForm from '../components/Login_form.js';
import LoginButton from '../components/Login_button.js';
import FUNneyLogo from '../Image/FUNneyLogo.png';
import '../login.css';

class Login extends Component {
  render() {
    return (
      <div className="Login">
      <div className="FUNneyLogo">
      <img src={FUNneyLogo} className="Login_FUNneyLogo" alt="logo" />
      </div>
      <div>
      <b className="Login_FUNney">FUNney</b>
      </div>
        <div className="Login_form">
          <LoginForm />
        </div>
        <div className="Login_button">
          <LoginButton />
        </div>
      </div>
    );
  }
}

export default Login;
