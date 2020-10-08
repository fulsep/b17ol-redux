import {combineReducers} from 'redux'

import auth from './auth'
import counter from './counter'
import episode from './episode'
import profile from './profile'

export default combineReducers({
  counter,
  auth,
  episode,
  profile
})