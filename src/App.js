import React, { Component } from 'react';
import './App.css';

import Container from "./Containers/Container";

class App extends Component {
  render() {
    return (
        <div className="App">
          <h3>Fields and Arrays example</h3>
          <Container/>
        </div>
    );
  }
}

export default App;
