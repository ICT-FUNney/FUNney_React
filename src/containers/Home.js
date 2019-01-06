import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../actions/ActionCreators.js';

//import SendAndRequestButton from '../components/SendAndRequestButton.js';
import HomeUserAndProperty from '../components/HomeUserAndProperty.js';

import Chart from '../components/Chart.js';

class Home extends Component {
  constructor(props){
    super(props);
    this.state={
      user:"Tatsuki Ikai",
      property:100,
    }
  }

  render() {
    console.log(this.props.test)
    return (
      <div className="Home">
        <HomeUserAndProperty
          userID={this.state.user}
          userProperty={this.state.property}
        />
        <Chart />
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
