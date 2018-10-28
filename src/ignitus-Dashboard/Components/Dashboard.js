import React from 'react';
import '../Styles/style.scss';
import {withErrorBoundary} from '../../ignitus-Internals'
import Alert from 'react-alerts-component'

class Dashboard extends React.Component{

  render(){
    return(
    <div>
        <div className ="container marginTop">
          <Alert type = "success" message = "Success!"/>
        </div>
    </div>
    )
  }
}

export default withErrorBoundary(Dashboard);
