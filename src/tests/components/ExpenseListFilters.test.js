import React from 'react'
import { shallow } from 'enzyme'

import { ExpenseListFilters } from '../../components/ExpenseListFilters'
import { filters, filtersAlter } from '../fixtures/filters'

let wrapper, setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate

beforeEach(() => {
  setTextFilter = jest.fn()
  sortByDate = jest.fn()
  sortByAmount = jest.fn()
  setStartDate = jest.fn()
  setEndDate = jest.fn()
  wrapper = shallow(<ExpenseListFilters
    filters={filters}
    setTextFilter={setTextFilter}
    sortByDate={sortByDate}
    sortByAmount={sortByAmount}
    setStartDate={setStartDate}
    setEndDate={setEndDate}

  />)
})

test('should render ExpenseListFilters correctly', () => {
  expect(wrapper).toMatchSnapshot()
})

test('should render ExpenseListFilters with alter correctly', () => {
  wrapper.setProps({ filters: filtersAlter })
  expect(wrapper).toMatchSnapshot()
})

test('should handle handleInput', () => {
  const value = 'new text'
  wrapper.find('input').prop('onChange')({
    target: {
      value
    }
  })
  expect(setTextFilter).toHaveBeenLastCalledWith(value)
})

test('should handle handleSelect', () => {
  let value = 'amount'
  wrapper.find('select').prop('onChange')({
    target: {
      value
    }
  })
  expect(sortByAmount).toHaveBeenCalled()
  expect(sortByDate).not.toHaveBeenCalled()
  value = 'date'
  wrapper.find('select').prop('onChange')({
    target: {
      value
    }
  })
  expect(sortByDate).toHaveBeenCalled()
})

test('should handle onDatesChange', () => {
  wrapper.find('withStyles(DateRangePicker)').prop('onDatesChange')({
    startDate: filtersAlter.startDate,
    endDate: filtersAlter.endDate
  })
  expect(setStartDate).toHaveBeenLastCalledWith(filtersAlter.startDate)
  expect(setEndDate).toHaveBeenLastCalledWith(filtersAlter.endDate)
})

test('should handle onFocusChange', () => {
  const calendarFocus = 'endDate'
  wrapper.setState({ calendarFocus: false })
  wrapper.find('withStyles(DateRangePicker)').prop('onFocusChange')(calendarFocus)
  expect(wrapper.state('calendarFocused')).toBe(calendarFocus)
})
