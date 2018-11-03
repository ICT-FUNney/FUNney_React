import React, { Component } from 'react';
import SendInput from '../components/SendInput';
import SendTestButton from '../components/SendTestButton';


class Send extends Component {
  render() {
    return (
      <div className="Send" >
       <div>
         <SendInput />
         <SendTestButton />
         </div>
      </div>
    );
  }
}

export default Send;
