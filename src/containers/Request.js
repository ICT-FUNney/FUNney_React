import React, { Component } from 'react';
import RequestInput from '../components/RequestInput.js';
import RequestBotan from '../components/RequestBotan.js';
import '../App.css'

class Request extends Component {
  constructor(props) {
    super(props);
    this.state= {
      name: "",
      defaultValue:"",
      requestSelect:"noselect",
      errorFlagName: false,
      erroFlagDefaultValue:false,
      errorFlagRequestSelect:false,
      errorFlagNameNumber:false,
      errorFlagDefaultValueNumber:false,

    }
  }

clickSendRequest(){
     const checkNumber = new RegExp(/^[0-9]+$/)
     this.setState({
     errorFlagName : (this.state.name !== "") ? false : true,
     errorFlagDefaultValue : (this.state.defaultValue !== "") ? false : true,
     errorFlagRequestSelect : (this.state.requestSelect !== "noselect") ? false : true,
     errorFlagNameNumber: (checkNumber.test(this.state.name))? false : true,
     errorFlagDefaultValueNumber: (checkNumber.test(this.state.defaultValue))? false : true,
   })

    if(this.state.name !== "" && this.state.defaultValue !== "" &&
      this.state.requestSelect !== "noselect" && checkNumber.test(this.state.name)
    && checkNumber.test(this.state.defaultValue)){
      this.props.history.push('/request');

      }
    }

handleChange = (e, name) => {
  this.setState({
    [name]: e.target.value,
  });
};

  render() {
    console.log(this.state)
    return (
      <div className="Request">
       <div>
        <div className="RequestInput">
        <RequestInput handleChange = {(e)=>{this.handleChange(e,e.target.name)}}
          defaultValue={this.state.defaultValue}
          name={this.state.name}
          requestSelect={this.state.requestSelect}
          errorFlagName={this.state.errorFlagName}
          errorFlagDefaultValue={this.state.errorFlagDefaultValue}
          errorFlagRequestSelect={this.state.errorFlagRequestSelect}
          errorFlagNameNumber={this.state.errorFlagNameNumber}
          errorFlagDefaultValueNumber={this.state.errorFlagDefaultValueNumber}
        />
       </div>
       <div className="RequestBotan">
        <RequestBotan clickSendRequest = {()=>{this.clickSendRequest()}
      }/>
       </div>
      </div>
      </div>
    );
  }
}

export default Request;
