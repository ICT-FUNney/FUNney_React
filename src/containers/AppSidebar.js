import React, { Component } from 'react';
import { withRouter } from 'react-router';

import Sidebar from '../components/Sidebar.js';



class AppSidebar extends Component {
  constructor(props) {
    super(props);
  }
  makeTarget(link){
    switch (link) {
      case "/home":
        return "HOME"
      case "/send":
        return "SEND"
      case "/request":
        return "Request"
      case "/setting":
        return "Setting"
      case "/signout":
        return "Signout"
      default:
    }
  }
  changeLink(task){
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
      case 'Signout':
          this.props.history.push('/signout');
          break;
      default:
         this.props.history.push('/home');
    }
  }
  render(){
    return (
      <div className="">
        <Sidebar open = {this.props.open} target = {this.makeTarget(this.props.link)} clickTask = {
          task => {
            this.changeLink(task);
          }}
          handleDrawerClose = {this.props.handleDrawerClose}
        />
      </div>
    );
  }
}

export default withRouter(AppSidebar)
