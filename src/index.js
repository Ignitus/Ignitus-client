import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import {createStore} from 'redux';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './rootReducer';
import App from './App';

import '../node_modules/font-awesome/css/font-awesome.min.css';


const store = createStore(rootReducer)
ReactDOM.render((
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>
	), document.getElementById('root'));

registerServiceWorker();
