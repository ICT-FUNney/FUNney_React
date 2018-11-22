import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';

import AppWeb from './AppWeb';
import AppMobile from './AppMobile';

class App extends Component {
  constructor(props) {
    super(props);
  }
  handleResize = () => {
    console.log(
      `window height:width=${window.innerHeight}:${window.innerWidth}`,
    );
  };

  render() {
    return(
      (window.innerWidth >= 1025) ? <BrowserRouter><AppWeb/></BrowserRouter>
      : <BrowserRouter><AppMobile/></BrowserRouter>
    );
  }
}

export default App;
