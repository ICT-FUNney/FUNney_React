import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../actions/ActionCreators.js';

import SendAndRequestButton from '../components/SendAndRequestButton.js';

class Home extends Component {
  render() {
    console.log(this.props.test)
    return (
      <div className="Home">
        <SendAndRequestButton sendButton = {
          ()=>{
            this.props.addTest()
          }
        }/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return{
    test: state.TestReducer.test,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addTest(){
      dispatch(actions.addTest());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
