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
    var link = this.props.history.location.pathname;
    var new_target = "/";
    switch(link) {
      case "/home":
        new_target = "HOME"
        break;
      default:
    }
    this.state = {
      target: new_target,
    }
  }
  changeTarget(task) {
    this.setState({
      target: task,
    })
  }
  changeLink(task) {
    this.changeTarget(task);
    switch(task) {
      case "HOME":
        this.props.history.push('/home');
        break;
      default:
    }
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
          <SignInButton target = {this.state.target} clickTask = {
            task => {
              this.changeLink(task);
            }}/>
        </div>
      </div>
    );
  }
}

export default withRouter(SignIn)
