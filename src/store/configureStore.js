import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import auth from '../reducers/auth-reducer'
import expenses from '../reducers/expenses-reducer'
import filters from '../reducers/filters-reducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default () => {
  const store = createStore(
    combineReducers({
      auth,
      expenses,
      filters
    }),
    composeEnhancers(applyMiddleware(thunk))
  )

  return store
}
