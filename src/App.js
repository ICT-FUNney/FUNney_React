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
    let new_link = "/"
    if(prevState.login_flag !== "" && prevState.login_flag !== undefined){
      new_link = nextProps.history.location.pathname
    }
    else{
      if(nextProps.history.location.pathname !== "/"){
        nextProps.history.push('/');
      }
    }
    return {
      link: new_link
    };
  }

  async loadStatus(id = this.state.login_flag){
    try{
      let data = await fetch("http://35.221.98.173:80/api/v1/balance",{
        method: 'POST',
        mode: "cors",
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify({id: id})
      }).then(response => response.json());
      console.log(data);
      this.setState({
          user_data: data
      });
    }
    catch(e){
      console.log("dataエラー");
      console.log(e);
    }
  }

  updateStatus(after){
    this.setState({
        user_data: after,
    });
  }

  async loadDatas(){
    try{
      this.setState({
        load: false,
      });
      const {cookies} = await this.props;
      let id = await cookies.get('login_flag')
      console.log(id)
      if(id !== '' && id !== undefined){
        await this.loadStatus(id);
        this.setState({
            login_flag: id,
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
      console.log(e);
   }
  }
  async successLogin(s){
    try{
      console.log(s.studentId, s.password)
      this.setState({
        load: false,
      });
      const {cookies} = await this.props;
      let check_login = await fetch("http://35.221.98.173:80/api/v1/signin",{
        method: 'POST',
        mode: "cors",
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify({id: s.studentId, password: s.password})
      });
      if(check_login.status === 202){
        await cookies.set('login_flag', s.studentId);
        await this.loadStatus(s.studentId);
        this.setState({
          login_flag: s.studentId,
        });
        this.props.history.push('/home');
      }
      else{
        console.log('ログイン失敗')
      }
      this.setState({
        load: true,
      });
    }
    catch(e){
     console.log("通信エラー")
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
     console.log(this.state.user_data.id, s.studentNum, Number(s.sendMoney));
     let data = await fetch("http://35.221.98.173:80/api/v1/transaction",{
       method: 'POST',
       mode: "cors",
       headers: {
         'content-type': 'application/json'
       },
       body: JSON.stringify({id: this.state.user_data.id, send_id: s.studentNum, balance: Number(s.sendMoney)})
     });
     let new_status = Object.assign({}, this.state.user_data, {balance: this.state.user_data.balance - Number(s.sendMoney)})
     this.updateStatus(new_status)
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
    console.log(this.state.user_data)
    console.log(this.state.link)
    return(
      (this.state.load === false) ? null:
      (window.innerWidth >= 1025) ?
      <AppWeb
        data = {this.state.user_data}
        link = {this.state.link}
        login_flag = {this.state.login_flag}
        successLogin = {s => {this.successLogin(s)}}
        outLogin = {() => {this.outLogin()}}
        signUp = {s => {this.signUp(s)}}
        sendMoney = {s => {this.sendMoney(s)}} /> :
      <AppMobile
        data = {this.state.user_data}
        link = {this.state.link}
        login_flag = {this.state.login_flag}
        successLogin = {s => {this.successLogin(s)}}
        outLogin = {() => {this.outLogin()}}
        signUp = {s => {this.signUp(s)}}
        sendMoney = {s => {this.sendMoney(s)}}
      />
    );
  }
}

export default withRouter(withCookies(App));
