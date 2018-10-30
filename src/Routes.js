import React, { Component } from 'react';
import { Route, BrowserRouter, Switch} from 'react-router-dom';
import {createBrowserHistory} from 'history'

import Home from './containers/Home.js';
import Send from './containers/Send.js';



class Routes extends Component {
  constructor(props) {
    super(props);
  }
  changeLink(target){
    const history = createBrowserHistory()
    var link = '/'
    switch(target){
      case 'SEND':
         link = "/send";
         break;
      default:
    }
    this.props.history.push(link)
  }
  render() {
    const history = createBrowserHistory();
    return (
      <BrowserRouter history = {history}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/send" component={Send} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Routes;
