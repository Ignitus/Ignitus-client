import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'

import reducer from './reducers'

const middleware = [thunkMiddleware]

middleware.push(createLogger())

export default createStore(
  reducer,
  applyMiddleware(...middleware)
)
