import React, { Component } from 'react';
import Menubar from '../components/Menubar.js';

class AppMenubar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="">
        <Menubar sidebarOpen = {this.props.sidebarOpen}/>
      </div>
    );
  }
}

export default AppMenubar;
