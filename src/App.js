import React, { Component } from 'react';
import { withRouter } from 'react-router';

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
      load: false,
      user_data: '',
      link: this.props.history.location.pathname,
      login_flag: '',
    }
  }
  static getDerivedStateFromProps(nextProps: Props, prevState: State) {
    return {
      link: nextProps.history.location.pathname
    };
  }
  async loadDatas(){
    try{
        const {cookies} = await this.props;
        let id = await cookies.get('login_flag')
        if(id){
          let data = await fetch("http://35.221.98.173:80/api/v1/balance",{
            method: 'POST',
            mode: "cors",
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify({id: id})
          }).then(response => response.json());
          this.setState({
              login_flag: true,
              user_data: data
          });
          if(this.props.history.location.pathname === '/' || this.props.history.location.pathname === '/signup'){
            this.props.history.push('/home');
          }
        }
        else{
          if(!(this.props.history.location.pathname === '/' || this.props.history.location.pathname === '/signup')){
            this.props.history.push('/');
          }
        }
        this.setState({
          load: true,
        });
    }
    catch(e){
     console.log("dataエラー")
     console.log(e)
   }
  }
  async successLogin(s){
    try{
      console.log(s.studentId)
      this.setState({
        load: false,
      });
      const {cookies} = await this.props;
      let data = await fetch("http://35.221.98.173:80/api/v1/balance",{
        method: 'POST',
        mode: "cors",
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify({id: s.studentId, password: s.password})
      }).then(response => response.json());
      console.log(data)
      this.setState({
        login_flag: data.id,
        user_data: data
      })
      await cookies.set('login_flag', data.id);
      console.log(this.state)
      this.props.history.push('/home');
      this.setState({
        load: true,
      });
    }
    catch(e){
     console.log("dataエラー")
     console.log(e)
    }
  }
  async outLogin(){
    const {cookies} = await this.props;
    this.setState({
      login_flag: '',
      user_data: ''
    })
    cookies.set('login_flag', '');
    this.props.history.push('/');
  }

  async signUp(s){
    try{
      this.setState({
        load: false,
      });
      console.log(s)
      let data = await fetch("http://35.221.98.173:80/api/v1/signup",{
        method: 'POST',
        mode: "cors",
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify({id: s.studentId, password: s.password})
      }).then(response => response.json());
      console.log(s)
      this.props.history.push('/');
      this.setState({
        load: true,
      });
    }
    catch(e){
     console.log("dataエラー")
     console.log(e)
    }
  }

 async sendMoney(s){
   try{
     this.setState({
       load: false,
     });
     let data = await fetch("http://35.221.98.173:80/api/v1/transaction",{
       method: 'POST',
       mode: "cors",
       headers: {
         'content-type': 'application/json'
       },
       body: JSON.stringify({id: this.state.user_data.id, send_id: s.studentNum, balance: Number(s.sendMoney)})
     });
     this.setState({
       load: true,
     });
   }
   catch(e){
    console.log("dataエラー")
    console.log(e)
   }
 }

  componentDidMount(){
    this.loadDatas()
  }

  render() {
    console.log(this.state)
    return(
      (this.state.load === false) ? null:
      (window.innerWidth >= 1) ?
      <AppWeb
        link = {this.state.link}
        login_flag = {this.state.login_flag}
        successLogin = {s => {this.successLogin(s)}}
        outLogin = {() => {this.outLogin()}}
        signUp = {s => {this.signUp(s)}}
        sendMoney = {s => {this.sendMoney(s)}} /> :
      <AppMobile login_flag = {this.state.login_flag} changeLogin = {() => {this.changeLogin()}}/>
    );
  }
}

export default withRouter(withCookies(App));
