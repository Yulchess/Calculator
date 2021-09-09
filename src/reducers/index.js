import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import calculator from './calculator'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['calculator'],
}

const rootReducer = combineReducers({
  calculator,
})

export default persistReducer(persistConfig, rootReducer)
