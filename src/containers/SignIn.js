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
    this.state = {
      studentId:"",
      password:"",
      studentId_flag:true,
      password_flag:true,
      error:false,
      studentId_flags:false,
      password_flags:false,
    }
  }
  handleChange(e) {
    const regNumSignIn = new RegExp(/^[0-9]+$/)
    const regEngSignIn = new RegExp(/^[a-zA-Z0-9]+$/)
    this.setState({
      [e.target.id] : e.target.value,
    })
    if(e.target.value === "") {
      this.changeFlag(e.target.id + "_flag", true);
    }else{
      this.changeFlag(e.target.id + "_flag", false);
    }
    if(e.target.id === "studentId" && (!(regNumSignIn.test(e.target.value)))){
      this.changeFlag(e.target.id + "_flags", true);
    }else if(e.target.id === "password" && (!(regEngSignIn.test(e.target.value)))){
      this.changeFlag(e.target.id + "_flags", true);
    }else{
      this.changeFlag(e.target.id + "_flags", false);
    }
  }
  changeFlag(errorFlag, tf) {
    console.log(errorFlag);
    this.setState({
      [errorFlag] : tf,
    })
  }
  changeLink() {
    if(this.state.studentId_flag === true || this.state.password_flag === true || this.state.studentId_flags === true || this.state.password_flags){
      this.setState({
        error:true,
      })
    } else {
      this.props.history.push('/home');
    }
  }
  render() {
    console.log(this.state);
    return (
      <div className="SignIn">
        <AppMenubar />
        <div className="FUNneyLogo">
          <img src={FUNneyLogo} className="SignInFUNneyLogo" alt="logo"/>
        </div>
        <div>
          <b className="SignInFUNney">FUNney</b>
        </div>
        <div className="SignInForm">
          <SignInForm
            sId={this.state.studentId}
            pass={this.state.password}
            sIdFlag={this.state.studentId_flag}
            passFlag={this.state.password_flag}
            checkError={this.state.error}
            sIdFlags={this.state.studentId_flags}
            passFlags={this.state.password_flags}
            changeForm={
              e => {
                this.handleChange(e)
              }
            }
          />
        </div>
        <div className="SignInButton">
          <SignInButton clickTask={
            e => {
              this.changeLink(e)
            }
          }/>
        </div>
      </div>
    );
  }
}

export default withRouter(SignIn)
