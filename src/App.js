import React, { Component } from 'react';
import { Route, Switch} from 'react-router-dom';
import { withRouter } from 'react-router';

import './App.css';
import AppMenubar from './containers/AppMenubar.js';
import AppSidebar from './containers/AppSidebar.js';

import SignIn from './containers/SignIn.js';
import Home from './containers/Home.js';
import Send from './containers/Send.js';
import Request from './containers/Request.js';
import Setting from './containers/Setting.js';
import Signout from './containers/Signout.js';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
      return(
        <div className="App">
          { this.props.history.location.pathname !== '/' ?
            <div>
              <AppMenubar />
              <AppSidebar />
            </div>
            : null
          }
          <Switch>
            <Route exact path="/" component={SignIn} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/send" component={Send} />
            <Route exact path="/request" component={Request} />
            <Route exact path="/setting" component={Setting} />
            <Route exact path="/signout" component={Signout} />
          </Switch>
        </div>
      );
    }
}

export default withRouter(App);
