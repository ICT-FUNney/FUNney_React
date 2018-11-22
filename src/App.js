import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';
import AppWeb from './AppWeb';
import AppMobile from './AppMobile';

import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';


class App extends Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  };
  constructor(props) {
    super(props);
    this.state = {
      login_flag: false,
    }
  }
  async loadCookies(){
    const {cookies} = await this.props;
    if(cookies.get('login_flag')){
      this.setState({
        login_flag: true,
      })
    }
  }
  async changeLogin(){
    const {cookies} = await this.props;
    console.log(cookies.get('login_flag'))
    this.setState({
      login_flag: !(this.state.login_flag),
    })
    cookies.set('login_flag', !(this.state.login_flag));
    console.log(cookies.get('login_flag'))
  }
  componentDidMount(){
    this.loadCookies()
  }
  render() {
    console.log(this.state.login_flag)
    return(
      (window.innerWidth >= 1025) ? <BrowserRouter><AppWeb login_flag = {this.state.login_flag} changeLogin = {()=>{this.changeLogin()}}/></BrowserRouter>
      : <BrowserRouter><AppMobile/></BrowserRouter>
    );
  }
}

export default withCookies(App);
