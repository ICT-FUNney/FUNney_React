import React, { Component } from 'react';
import SignInForm from '../components/SignInForm.js';
import SignInButton from '../components/SignInButton.js';
import FUNneyLogo from '../Image/FUNneyLogo.png';
import '../SignIn.css';
import { withRouter } from 'react-router';
import AppMenubar from './AppMenubar.js';

class SignIn extends Component {
  constructor(props) {
    super(props);
  }
  changeLink() {
    this.props.history.push('/home');
  }
  render() {
    return (
      <div className="SignIn">
        <AppMenubar />
        <div className="FUNneyLogo">
          <img src={FUNneyLogo} className="SignInFUNneyLogo" alt="logo" />
        </div>
        <div>
          <b className="SignInFUNney">FUNney</b>
        </div>
        <div className="SignInForm">
          <SignInForm />
        </div>
        <div className="SignInButton">
          <SignInButton clickTask = {
            () => {
              this.changeLink();
            }}/>
        </div>
      </div>
    );
  }
}

export default withRouter(SignIn)
