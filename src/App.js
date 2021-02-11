import React, { Component } from 'react';
import './App.css';
import Routes from './components/routes';




/**
 * App Class to render all components and include the app logic.
 * 
 */
class App extends Component {

  /**
   * 
   * @param {*} props 
   */
  constructor(props) {
    super(props);
    this.state = {};

  }

  /**
   * 
   */
  render() {
    return (
      <Routes />
    );
  }
}

export default App;
