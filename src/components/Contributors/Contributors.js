import React, { Component } from 'react';
import './contributors.css';
import logo from '../../images/Stanford_logo.png';

class Contributors extends Component {
  render() {
    return (
      <div>Contributors
        <div>Made with <img src={logo} width="10" height="10" alt={"logo"}/> by Students,Researches and Alumni of ...
          <div class="row">
              <div class="column">
                <img src={logo} width="50" height="50" alt={"logo"}/> 
              </div>
              <div class="column">
               <img src={logo} width="50" height="50" alt={"logo"}/> 
              </div>
              <div class="column">
                <img src={logo} width="50" height="50" alt={"logo"}/> 
              </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Contributors;