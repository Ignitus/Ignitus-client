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
import AboutUs      from './components/AboutUs/AboutUs';
import Login        from './components/Login/login';

class App extends Component {


  constructor()
  {
      super(); 
      this.state = {isLoading: true} 
      console.log(this.state.isLoading);
  }
  componentDidMount() 
  { 
      setTimeout(() => this.setState({isLoading: false}), 3000)
      console.log("componentDidMount");
  }

  render() {

if(this.state.isLoading){
    return(
        <div className="container col-lg-6 col-md-4 col-sm-6 col-9 mx-auto "><img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" className="_loader" /></div>
      )
    }
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
        <Route exact path ='/login' component ={Login}/>
        <Route path ='/aboutus' component ={AboutUs}/>
        
      </Switch>
    );
  

  }
}

export default App;
