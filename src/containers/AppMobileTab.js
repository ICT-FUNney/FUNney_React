import React, { Component } from 'react';
import { withRouter } from 'react-router';

import MobileTab from '../components/MobileTab.js';

class AppMobileTab extends Component {
  constructor(props) {
    super(props);
  }
  makeTabValue(link){
    switch (link) {
      case "/home":
        return 0
      case "/send":
        return 1
      case "/request":
        return 2
      case "/setting":
        return 3
      default:
    }
  }

  handleChange(value){
    switch (value) {
      case 1:
         this.props.history.push('/send');
         break;
      case 2:
          this.props.history.push('/request');
          break;
      case 3:
          this.props.history.push('/setting');
          break;
      default:
         this.props.history.push('/home');
    }
  }

  render() {
    return (
      <div className="">
        <MobileTab value = {this.makeTabValue(this.props.link)} handleChange = {(v) => {
          this.handleChange(v)
        }}/>
      </div>
    );
  }
}

export default withRouter(AppMobileTab)