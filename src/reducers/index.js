import counterReducer from './counter'
import loggedReducer from './isLogged'
import randomRec from './randomRec'

import { combineReducers} from 'redux'

const allReducers = combineReducers({
    counterReducer,
    loggedReducer,
    randomRec
})

export default allReducers;