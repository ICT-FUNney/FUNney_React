import React, { Component } from 'react';
import { withRouter } from 'react-router';

import Sidebar from '../components/Sidebar.js';



class AppSidebar extends Component {
  constructor(props) {
    super(props);
    var link = this.props.history.location.pathname;
    var new_target = "/";
    switch (link) {
      case "/home":
        new_target = "HOME"
        break;
      case "/send":
        new_target = "SEND"
        break;
      case "/request":
        new_target = "Request"
        break;
      case "/setting":
        new_target = "Setting"
        break;
      case "/signup":
        new_target = "Sign up"
        break;
      default:
    }
    this.state = {
      target: new_target,
    }
  }
  changeTarget(task){
    this.setState({
      target: task,
    })
  }
  changeLink(task){
    this.changeTarget(task);
    switch (task) {
      case 'SEND':
         this.props.history.push('/send');
         break;
      case 'Request':
          this.props.history.push('/request');
          break;
      case 'Setting':
          this.props.history.push('/setting');
          break;
      case 'Sign up':
          this.props.history.push('/signup');
          break;
      default:
         this.props.history.push('/home');
    }
  }
  render(){
    return (
      <div className="">
        <Sidebar target = {this.state.target} clickTask = {
          task => {
            this.changeLink(task);
          }} />
      </div>
    );
  }
}

export default withRouter(AppSidebar)
