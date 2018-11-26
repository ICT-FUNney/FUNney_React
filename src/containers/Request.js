import React, { Component } from 'react';
import RequestInput from '../components/RequestInput.js';
import RequestButton from '../components/RequestButton.js';
import RequestButtonModal from '../components/RequestButtonModal.js';

import '../App.css'

class Request extends Component {
  constructor(props) {
    super(props);
    this.state= {
      name: "",
      defaultValue: "",
      requestSelect: "noselect",
      errorFlagName: false,
      erroFlagDefaultValue: false,
      errorFlagRequestSelect: false,
      errorFlagNameNumber: false,
      errorFlagDefaultValueNumber: false,
      requestModal: false,
    }
  }

  requestOk(){
    this.setState({
      requestModal: false,
      name: "",
      defaultValue: "",
      requestSelect:"noselect",
    })
    this.props.history.push('/request');
  }

  requestCancel(){
    this.setState({
      requestModal: false,
    })
  }

  closeModal(){
    this.setState({
      requestModal: false,
    });
  };

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
       this.setState({
         requestModal: true,
       })
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
       <div className="RequestBrock">
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
       <div className="RequestButton">
        <RequestButton clickSendRequest = {()=>{this.clickSendRequest()}
      }/>
       </div>
       <div className="RequestButtonModal">
       <RequestButtonModal
        requestModal={this.state.requestModal}
        closeModal={this.state.closeModal}
        requestOk={()=>{this.requestOk()}}
        requestCancel={()=>{this.requestCancel()}}
        name={this.state.name}
        defaultValue={this.state.defaultValue}
        />
       </div>
      </div>
      </div>
    );
  }
}

export default Request;
