import React, { Component } from 'react';
import Header from './header';
import { BrowserRouter } from "react-router-dom"; 

export  default class App extends Component {
  render() {
    return (
      <div>
            <Header/>
      </div>
    );
  }
}
