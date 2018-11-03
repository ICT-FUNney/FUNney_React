import React, { Component } from 'react';
import { withRouter } from 'react-router';

import Button from '@material-ui/core/Button';

class Login extends Component {
  render() {
    return (
      <div className="Request">
        <Button variant="contained" size="large" color="primary"
          onClick = {() =>{
            this.props.history.push('/home');
          }}>
          Login
        </Button>
      </div>
    );
  }
}

export default withRouter(Login)
