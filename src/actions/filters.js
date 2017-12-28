import * as actions from './actions-type'

export const setTextFilter = (text = '') => ({
  type: actions.SET_TEXT_FILTER,
  text
})

export const sortByDate = () => ({
  type: actions.SORT_BY_DATE
})

export const sortByAmount = () => ({
  type: actions.SORT_BY_AMOUNT
})

export const setStartDate = (startDate) => ({
  type: actions.SET_START_DATE,
  startDate
})

export const setEndDate = (endDate) => ({
  type: actions.SET_END_DATE,
  endDate
})
