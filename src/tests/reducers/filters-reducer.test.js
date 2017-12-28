import moment from 'moment'

import filtersReducer from '../../reducers/filters-reducer'

describe('filtersReducer', () => {
  test('should set text filter to "apple"', () => {
    const INITIAL_STATE = {
      text: '',
      sortBy: 'date',
      startDate: moment().startOf('month'),
      endDate: moment().endOf('month')
    }
    const action = { type: 'SET_TEXT_FILTER', text: 'apple' }
    const state = filtersReducer(undefined, action)
    expect(state).toEqual({
      text: 'apple',
      sortBy: INITIAL_STATE.sortBy,
      startDate: INITIAL_STATE.startDate,
      endDate: INITIAL_STATE.endDate
    })
  })

  test('should set sortBy filter to "amount"', () => {
    const INITIAL_STATE = {
      text: '',
      sortBy: 'date',
      startDate: moment().startOf('month'),
      endDate: moment().endOf('month')
    }
    const action = { type: 'SORT_BY_AMOUNT' }
    const state = filtersReducer(undefined, action)
    expect(state).toEqual({
      text: '',
      sortBy: 'amount',
      startDate: INITIAL_STATE.startDate,
      endDate: INITIAL_STATE.endDate
    })
  })

  test('should set sortBy filter to "date"', () => {
    const INITIAL_STATE = {
      text: '',
      sortBy: 'amount',
      startDate: moment().startOf('month'),
      endDate: moment().endOf('month')
    }
    const action = { type: 'SORT_BY_DATE' }
    const state = filtersReducer(undefined, action)
    expect(state).toEqual({
      text: '',
      sortBy: 'date',
      startDate: INITIAL_STATE.startDate,
      endDate: INITIAL_STATE.endDate
    })
  })

  test('should set startDate filter to a given date', () => {
    const INITIAL_STATE = {
      text: '',
      sortBy: 'date',
      startDate: moment().startOf('month'),
      endDate: moment().endOf('month')
    }
    const startDate = INITIAL_STATE.startDate.add(1, 'days')
    const action = { type: 'SET_START_DATE', startDate }
    const state = filtersReducer(undefined, action)
    expect(state).toEqual({
      text: '',
      sortBy: 'date',
      startDate,
      endDate: INITIAL_STATE.endDate
    })
  })

  test('should set endDate filter to a given date', () => {
    const INITIAL_STATE = {
      text: '',
      sortBy: 'date',
      startDate: moment().startOf('month'),
      endDate: moment().endOf('month')
    }
    const endDate = INITIAL_STATE.endDate.add(-1, 'days')
    const action = { type: 'SET_END_DATE', endDate }
    const state = filtersReducer(undefined, action)
    expect(state).toEqual({
      text: '',
      sortBy: 'date',
      startDate: INITIAL_STATE.startDate,
      endDate
    })
  })
})
