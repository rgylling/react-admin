import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Test from './components/test'

class App extends Component {
  render() {
    return (
      <div>
		  <Navbar />
      </div>
    );
  }
}

export default App;
