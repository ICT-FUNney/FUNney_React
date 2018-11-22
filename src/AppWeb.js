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
    this.state = {
      login_flag: false,
      sidebarOpen: true,
      link: this.props.history.location.pathname
    }
  }
  static getDerivedStateFromProps(nextProps: Props, prevState: State) {
      console.log(nextProps.history.location.pathname)
      return {
        sidebarOpen: prevState.sidebarOpen,
        link: nextProps.history.location.pathname
      };
  }
  render() {
      console.log(this.state)
      return(
        <div className={(this.state.sidebarOpen && ((this.state.link !== "/") && (this.state.link !== "/signup"))) ? "App" : "App_NoSidebar"}>
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
                link = {this.state.link}
              />
            </div>
            : null
          }
          <Switch>
            <Route exact path="/"render={
              props => <SignIn successLogin = {() => {this.props.changeLogin()}} />
            }/>
            <Route exact path="/signup" component={SignUp} />
            <LoginCheck flag = {this.state.login_flag}>
              <Switch>
                  <Route exact path="/home" component={Home} />
                  <Route exact path="/send" component={AppSend} />
                  <Route exact path="/request" component={Request} />
                  <Route exact path="/setting" component={Setting} />
                  <Route exact path="/signout" component={Signout} />
              </Switch>
            </LoginCheck>
          </Switch>
        </div>
      );
    }
}

export default withRouter(AppWeb);
