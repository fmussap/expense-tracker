import moment from 'moment'

import * as actions from '../actions/actions-type'

const INITIAL_STATE = {
  text: '',
  sortBy: 'date',
  startDate: moment().startOf('month'),
  endDate: moment().endOf('month')
}

const filtersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actions.SET_TEXT_FILTER:
      return {
        ...state,
        text: action.text
      }
    case actions.SORT_BY_AMOUNT:
      return {
        ...state,
        sortBy: 'amount'
      }
    case actions.SORT_BY_DATE:
      return {
        ...state,
        sortBy: 'date'
      }
    case actions.SET_START_DATE:
      return {
        ...state,
        startDate: action.startDate
      }
    case actions.SET_END_DATE:
      return {
        ...state,
        endDate: action.endDate
      }
    default:
      return state
  }
}

export default filtersReducer
