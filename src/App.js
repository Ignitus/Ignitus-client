import React, { Component } from 'react';
import { Switch,Route } from 'react-router-dom';
import './App.css';
import Navigation   from './components/Navigation/Navigation';
import Footer       from './components/Footer/Footer';
import Contributors from './components/Contributors/Contributors';
import GetStarted   from './components/Get_started/Get_started';
import Introduction from './components/Introduction/Introduction';

import Testimonial  from './components/Testimonial/Testimonial';

import CardLayout   from './components/CardLayout/CardLayout';
import Partner      from './components/Partners/Partners';
import Data         from './components/Testimonial/testimonial_data';

import Login from './components/Login/Login';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' render={() => {
          return (
          <div>
            <Navigation />
            <Introduction/>

            <Testimonial slides = {Data}/>
            <CardLayout />

            <Contributors />
          
            <Partner />
            <GetStarted />
            <Footer />
          </div>
            )
        }}/>
        <Route exact path = '/login' component ={Login}/>
      </Switch>
    );
  }
}

export default App;
