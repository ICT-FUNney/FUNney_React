import React, { Component } from 'react';

import Button from '@material-ui/core/Button';

class SignIn extends Component {
  render() {
    return (
      <div className="Request">
        <Button variant="contained" size="large" color="primary"
          onClick = {() =>{
            this.props.history.push('/home');
          }}>
          SignIn
        </Button>
      </div>
    );
  }
}

export default SignIn
