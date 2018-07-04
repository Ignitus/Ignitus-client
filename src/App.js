import React, { Component } from 'react';
import './App.css';
import Navigation   from './components/Navigation/Navigation';
import Footer       from './components/Footer/Footer';
import Contributors from './components/Contributors/Contributors';
import GetStarted   from './components/Get_started/Get_started';
import Introduction from './components/Introduction/Introduction';

import Testimonial from './components/Testimonial/Testimonial';

import CardLayout   from './components/CardLayout/CardLayout';
import Partner      from './components/Partners/Partners';


class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Introduction/>

        <Testimonial/>

        <CardLayout />

        <Contributors />
      
        <Partner />
        <GetStarted />
        <Footer />
        
      </div>
    );
  }
}

export default App;
