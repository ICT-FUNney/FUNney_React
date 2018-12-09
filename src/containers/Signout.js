import React, { Component } from 'react';

import { withRouter } from 'react-router';

import Button from '@material-ui/core/Button';


class Signout extends Component {
  render() {
    return (
      <div className="Request">
        <Button variant="contained" size="large" color="primary"
          onClick = {() =>{
            this.props.outLogin();
          }}>
          Signout
        </Button>
      </div>
    );
  }
}

export default withRouter(Signout);
