import React, { Component } from 'react';
import { withRouter } from 'react-router';

import Sidebar from '../components/Sidebar.js';



class AppSidebar extends Component {
  constructor(props) {
    super(props);
    var link = this.props.link;
    console.log(link)
    var new_target = "HOME";
    switch (link) {
      case "/send":
        new_target = "SEND"
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
         this.props.history.push('/');
    }
  }
  render(){
    return (
      <div className="">
        <Sidebar target = {this.state.target} clickTask = {
          task => {
            this.changeLink(task);
            this.props.clickSidebar(task);
          }} />
      </div>
    );
  }
}

export default withRouter(AppSidebar)
