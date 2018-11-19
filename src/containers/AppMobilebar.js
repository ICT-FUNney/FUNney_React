import React, { Component } from 'react';
import Mobilebar from '../components/Mobilebar.js';

class AppMenubar extends Component {
  constructor(props) {
    super(props);
  }
  makeTitle(link){
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
  render() {
    return (
      <div className="">
        <Mobilebar task = {this.makeTitle(this.props.link)}/>
      </div>
    );
  }
}

export default AppMenubar;
