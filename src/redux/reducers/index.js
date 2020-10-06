import {combineReducers} from 'redux'

import auth from './auth'
import counter from './counter'
import episode from './episode'

export default combineReducers({
  counter,
  auth,
  episode
})