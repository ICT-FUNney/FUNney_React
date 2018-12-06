import React, { Component } from 'react';
import SettingForm from '../components/SettingForm.js'
import { withRouter } from 'react-router';
import SettingButton from '../components/SettingButton.js';

class Setting extends Component {
  changeLink() {
    this.props.history.push('/Signout');
  }

  render() {
    return (
      <div className="Setting">
        <SettingForm/>
         <SettingButton/>
      </div>
    );
  }
}

export default Setting;
