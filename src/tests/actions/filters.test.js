import moment from 'moment'
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../../actions/filters'

test('should set a new given start date', () => {
  const startDate = moment(1514282568444)
  const action = setStartDate(startDate)
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate
  })
})

test('should set a new given end date', () => {
  const endDate = moment(1514282568444)
  const action = setEndDate(endDate)
  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate
  })
})

test('should sort by date', () => {
  const action = sortByDate()
  expect(action).toEqual({
    type: 'SORT_BY_DATE'
  })
})

test('should sort by amount', () => {
  const action = sortByAmount()
  expect(action).toEqual({
    type: 'SORT_BY_AMOUNT'
  })
})

test('should set a given text to filter', () => {
  const text = 'new text'
  const action = setTextFilter(text)
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text
  })
})

test('should set text as "" when notext is given', () => {
  const text = ''
  const action = setTextFilter()
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text
  })
})
