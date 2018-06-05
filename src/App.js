import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <div className="box"></div>
        <Footer />
      </div>
    );
  }
}

export default App;
