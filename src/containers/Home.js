import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../actions/ActionCreators.js';

import AppGridList from '../components/AppGridList.js';
import AppHomeList from '../components/AppHomeList.js';

//import SendAndRequestButton from '../components/SendAndRequestButton.js';
import HomeUserAndProperty from '../components/HomeUserAndProperty.js';

class Home extends Component {
  constructor(props){
    super(props);
    this.state={
      user:"",
      property:100,
    }
  }

  render() {
    console.log(this.props.test)
    return (
      <div className="Home">
        <HomeUserAndProperty
          userID={this.props.data.id}
          userProperty={this.props.data.balance}
        />
        <div className="Home__Display">
          <AppGridList />
          <AppHomeList />
        </div>
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
