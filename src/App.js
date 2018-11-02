import React, { Component } from 'react';
import { Route, Switch} from 'react-router-dom';
import { withRouter } from 'react-router';

import './App.css';
import AppMenubar from './containers/AppMenubar.js';
import AppSidebar from './containers/AppSidebar.js';

import Login from './containers/Login.js';
import Home from './containers/Home.js';
import Send from './containers/Send.js';
import Request from './containers/Request.js';
import Setting from './containers/Setting.js';
import SignUp from './containers/SignUp.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      link: this.props.history.location.pathname,
    }
  }
  changeTask = (target) => {
    this.setState({
      task: target,
    })
  }

  render() {
    if(this.state.link === "/"){
      return(
        <div className="App"> <Login /> </div>
      );
    }
    else{
      return(
        <div className="App">
          <AppMenubar />
          <AppSidebar link = {this.state.link} clickSidebar = {
            target =>{
              this.changeTask(target);
            }} />
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/send" component={Send} />
            <Route exact path="/request" component={Request} />
            <Route exact path="/setting" component={Setting} />
            <Route exact path="/signup" component={SignUp} />
          </Switch>
        </div>
      );
    }
  }
}

export default withRouter(App);
