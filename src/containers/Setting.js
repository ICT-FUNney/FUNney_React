import React, { Component } from 'react';
import SettingForm from '../components/SettingForm.js'
import { withRouter } from 'react-router';
import SettingButton from '../components/SettingButton.js';

class Setting extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="SettingBackground">
      <div className="SettingForm">
        <SettingForm/>
        <SettingButton
          clickTask = {() => {this.props.outLogin()}}
        />
      </div>
    </div>
    );
  }
}

export default withRouter(Setting);
