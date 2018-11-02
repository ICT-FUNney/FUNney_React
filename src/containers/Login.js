import React, { Component } from 'react';
import LoginForm from '../components/Login_form.js';
import LoginButton from '../components/Login_button.js';
import FUNneyLogo from '../Image/FUNneyLogo.png';
import '../login.css';
import { withRouter } from 'react-router';

class Login extends Component {
  constructor(props) {
    super(props);
    var link = this.props.link;
    var new_target = "N";
    if(link === "/"){
      new_target = "HOME"
    } else {
      new_target = "Login"
    }
    this.state = {
      target: new_target,
    }
  }
  changeTarget(taskButton){
    this.setState({
      targetButton: taskButton,
    })
  }
  changeLinks(taskButton){
    this.changeTarget(taskButton);
    if(taskButton === "HOME"){
      this.props.history.push("/");
    } else {
      this.props.history.push("/login");
    }
  }
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
          <LoginButton target = {this.state.targetButton} clickTask = {
            task => {
              this.changeLinks(task);
              this.props.checkButton(task);
            }}/>
        </div>
      </div>
    );
  }
}

export default withRouter(Login)
