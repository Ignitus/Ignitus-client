
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import { Notfound } from './notFound';
import { PrivateRoute } from './privateRoute';
import Dashboard from '../ignitus-Dashboard'

export const ProtectedRoutes = (props) => {
	return(
		<div>
			 <Switch>
			   <Route
                    exact
                    path="/"
                    render={() => (
                      <div className="content">
                        <Notfound />
                      </div>
                    )}
                  />
                <PrivateRoute path='/dashboard' component={Dashboard.components.Dashboard} />
			 </Switch>
		</div>
	)
}