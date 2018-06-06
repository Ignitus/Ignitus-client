import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import Contributors from './components/Contributors/Contributors';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <div className="box"></div>
        <Contributors />
        <Footer />
      </div>
    );
  }
}

export default App;
