import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { logger } from 'redux-logger';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './rootReducer';
import rootSaga from './rootSagas';
import App from './App';

import '../node_modules/font-awesome/css/font-awesome.min.css';
import './shared/styles/ignitus-base.scss';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware, logger),
);

sagaMiddleware.run(rootSaga);

ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
), document.getElementById('root'));

registerServiceWorker();
