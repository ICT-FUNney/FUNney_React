import React, { Component } from 'react';
import SettingForm from '../components/SettingForm.js'
import { withRouter } from 'react-router';
import SettingButton from '../components/SettingButton.js';

class Setting extends Component {
  constructor(props) {
    super(props);
}

  changeLink() {
    this.props.history.push("/");
  }

  render() {
    return (
      <div className="SettingForm">
        <SettingForm/>
        <SettingButton
          clickTask={
            e => {
              this.changeLink(e)
            }
          }/>
      </div>
    );
  }
}

export default withRouter(Setting);
