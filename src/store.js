import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { persistStore } from 'redux-persist'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './reducers'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
)

export const persistor = persistStore(store)

sagaMiddleware.run(rootSaga)

store.subscribe(() => {
  localStorage['redux-store'] = JSON.stringify(
    store.getState(),
  )
})
