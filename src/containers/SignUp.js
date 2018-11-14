import React, {Component} from 'react';
import { withRouter } from 'react-router';
import SignUpForm from '../components/SignUpForm.js';
import SignUpButton from '../components/SignUpButton.js';
import FUNneyLogo from '../Image/FUNneyLogo.png';
import '../SignUp.css';

class SignUp extends Component {
  constructor(props){
    super(props);
    this.state={
      studentId:"",
      password:"",
      passwordRe:"",
      studentId_flag:true,
      password_flag:true,
      passwordRe_flag:true,
      studentId_flags:false,
      password_flags:false,
      passwordRe_flags:false,
      error:false,
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
    }else if(e.target.id === "passwordRe" && (!(regEngSignIn.test(e.target.value)))){
      this.changeFlag(e.target.id + "_flags", true);
    }else{
      this.changeFlag(e.target.id + "_flags", false);
    }
  }
  changeFlag(errorFlag, trueFalse) {
    console.log(errorFlag);
    this.setState({
      [errorFlag] : trueFalse,
    })
  }
  changeLink(){
    if((!(this.state.password === this.state.passwordRe))|| this.state.studentId_flag === true || this.state.password_flag === true || this.state.passwordRe_flag === true
      || this.state.studentId_flags === true || this.state.password_flags === true || this.state.passwordRe_flags === true){
      this.setState({
        error:true,
      })
    } else {
      this.props.history.push('/home');
    }
  }
  render(){
    console.log(this.state);
    return(
      <div className="SignUpBackground">
        <div className="SignUp">
          <div className="FUNneyLogo">
            <img src={FUNneyLogo} className="SignUpFUNneyLogo" alt="logo"/>
          </div>
          <div>
            <b className="SignUpFUNney">FUNney</b>
          </div>
          <div className="SignUpForm">
            <SignUpForm
              studentid={this.state.studentId}
              password={this.state.password}
              repassword={this.state.passwordRe}
              studentidFlag={this.state.studentId_flag}
              passwordFlag={this.state.password_flag}
              repasswordFlag={this.state.passwordRe_flag}
              studentidFlags={this.state.studentId_flags}
              passwordFlags={this.state.password_flags}
              repasswordFlags={this.state.password_flags}
              checkError={this.state.error}
              changeForm={
                e => {
                  this.handleChange(e)
                }
              }/>
          </div>
          <div className="SignUpButton">
            <SignUpButton clickTask={
              e => {
                this.changeLink();
              }
            } />
          </div>
          <div className="SignUpHref">
            <a href="/">
              既に登録されている方はこちら
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(SignUp);
