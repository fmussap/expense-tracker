import React from 'react'
import { shallow } from 'enzyme'

import { EditExpensePage } from '../../components/EditExpensePage'
import expenses from '../fixtures/expenses'

let spy, history, wrapper

beforeEach(() => {
  spy = jest.fn()
  history = {
    push: jest.fn()
  }
  wrapper = shallow(<EditExpensePage
    editExpense={spy}
    removeExpense={spy}
    history={history}
    expense={expenses[0]}
  />)
})

test('should render EditExpensePage correctly', () => {
  expect(wrapper).toMatchSnapshot()
})

test('should handle handleSubmit', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0])
  expect(spy).toHaveBeenLastCalledWith(expenses[0].id, expenses[0])
  expect(history.push).toHaveBeenLastCalledWith('/')
})

test('should handle handleClick', () => {
  wrapper.find('button').simulate('click')
  expect(spy).toHaveBeenLastCalledWith({ id: expenses[0].id })
  expect(history.push).toHaveBeenLastCalledWith('/')
})