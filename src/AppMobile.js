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
    this.state = {
      link: this.props.history.location.pathname,
    }
  }
  static getDerivedStateFromProps(nextProps: Props, prevState: State) {
    console.log(nextProps.history.location.pathname)
    return {
      link: nextProps.history.location.pathname
    };
  }
  componentDidUpdate(){
    if(this.props.login_flag == true && this.props.history.location.pathname === '/' || this.props.history.location.pathname === '/signup'){
      this.props.history.push('/home');
    }
  }
  render() {
    return(
      <div>
      {this.props.history.location.pathname !== '/' && this.props.history.location.pathname !== '/signup' ?
        <div>
          <AppMobilebar link = {this.state.link}/>
          <AppMobileTab link = {this.state.link}/>
        </div>
        : null
      }
      <Switch>
        <Route exact path="/"
          render={props => <SignIn successLogin = {() => {this.props.changeLogin()}}/>
        }/>
        <Route exact path="/signup" component={SignUp} />
        <LoginCheck flag = {this.props.login_flag} >
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

export default withRouter(AppMobile);
