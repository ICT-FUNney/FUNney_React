import React, { Component } from 'react';
import { Route, Switch} from 'react-router-dom';
import { withRouter } from 'react-router';

import AppMobilebar from './containers/AppMobilebar.js';
import AppMobileTab from './containers/AppMobileTab.js';

import SignIn from './containers/SignIn.js';
import SignUp from './containers/SignUp.js';
import Home from './containers/Home.js';
import AppSend from './containers/AppSend.js';
import Request from './containers/Request.js';
import Setting from './containers/Setting.js';
import Signout from './containers/Signout.js';

import LoginCheck from './LoginCheck.js';

class AppMobile extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div>
      {this.props.history.location.pathname !== '/' && this.props.history.location.pathname !== '/signup' ?
        <div>
          <AppMobilebar link = {this.props.link}/>
          <AppMobileTab link = {this.props.link}/>
        </div>
        : null
      }
      <Switch>
        <Route exact path="/"
          render={props =>
            <SignIn
             successLogin = {s => {this.props.successLogin(s)}} />
          }/>
        <Route exact path="/signup"
          render={props =>
            <SignUp
             signUp = {s => {this.props.signUp(s)}} />
           }/>
        <Switch>
            <Route exact path="/home"
              render={props =>
                <Home
                  data = {this.props.data} />
               }/>
            <Route exact path="/send"
              render={props =>
                <AppSend
                  sendMoney = {s => {this.props.sendMoney(s)}} />
               }/>
            <Route exact path="/request" component={Request} />
            <Route exact path="/setting"
              render={props => <Setting outLogin = {() => {this.props.outLogin()}}/>
            }/>
        </Switch>
      </Switch>
      </div>
    );
  }
}

export default withRouter(AppMobile);
