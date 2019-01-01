import React from 'react';
import '../Styles/style.scss';
import {withErrorBoundary} from '../../ignitus-Internals'
import Alert from 'react-alerts-component'

class Dashboard extends React.Component{

  render(){
    return(
    <div>
        <div className ="container marginTop">
          <h4>Welcome to Ignitus 👋</h4>
    	  <p>Website Under Maintenance !! 🚀</p>
        </div>
    </div>
    )
  }
}

export default withErrorBoundary(Dashboard);
