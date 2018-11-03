import React, { Component } from 'react';
import SendInput from '../components/SendInput';
import SendButton from '../components/SendButton';


class Send extends Component {
  render() {
    return (
      <div className="Send" >
        <div>
        <SendInput />
        <SendButton />
        </div>
      </div>
    );
  }
}

export default Send;
