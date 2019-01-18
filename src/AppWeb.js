import React, { Component } from 'react';
import { Route, Switch} from 'react-router-dom';
import { withRouter } from 'react-router';

import './App.css';
import AppMenubar from './containers/AppMenubar.js';
import AppSidebar from './containers/AppSidebar.js';

import SignIn from './containers/SignIn.js';
import SignUp from './containers/SignUp.js';
import Home from './containers/Home.js';
import AppSend from './containers/AppSend.js';
import Request from './containers/Request.js';
import Setting from './containers/Setting.js';
import Signout from './containers/Signout.js';

import LoginCheck from './LoginCheck.js';


class AppWeb extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.login_flag)
    this.state = {
      sidebarOpen: true,
    }
  }
  render() {
      console.log(this.props.data)
      console.log(this.props.link)
      return(
        <div className={(this.state.sidebarOpen && ((this.props.link !== "/") && (this.props.link !== "/signup"))) ? "App" : "App_NoSidebar"}>
          {this.props.history.location.pathname !== '/' && this.props.history.location.pathname !== '/signup' ?
            <div>
              <AppMenubar sidebarOpen = {() => {
                this.setState({
                  sidebarOpen: true,
                })
              }}/>
              <AppSidebar open={this.state.sidebarOpen}
                handleDrawerClose = {() => {
                 this.setState({
                    sidebarOpen: false,
                 })
                }}
                link = {this.props.link}
              />
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
                      sendMoney = {s => {this.props.sendMoney(s)}}
                      data = {this.props.data} />
                   }/>
                <Route exact path="/request" component={Request} />
                <Route exact path="/setting" component={Setting} />
                <Route exact path="/signout"
                  render={props => <Signout outLogin = {() => {this.props.outLogin()}}/>
                }/>
            </Switch>
          </Switch>
        </div>
      );
    }
}

export default withRouter(AppWeb);
