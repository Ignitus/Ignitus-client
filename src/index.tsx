import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { applyMiddleware, createStore } from 'redux';
import { logger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import '../node_modules/font-awesome/css/font-awesome.min.css';
import './ignitus-Shared/styles/ignitus-base.scss';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './rootReducer';
import rootSaga from './rootSagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware, logger));

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);

registerServiceWorker();
