import React from 'react'
import { shallow } from 'enzyme'

import { AddExpensePage } from '../../components/AddExpensePage'
import expenses from '../fixtures/expenses'

let spy, history, wrapper

beforeEach(() => {
  spy = jest.fn()
  history = {
    push: jest.fn()
  }
  wrapper = shallow(<AddExpensePage addExpense={spy} history={history} />)
})

test('should render AddExpensePage correctly', () => {
  expect(wrapper).toMatchSnapshot()
})

test('should handle handleSubmit', () => {
  const expense = {
    description: expenses[0].description,
    amount: expenses[0].amount,
    note: expenses[0].note,
    createdAt: expenses[0].createdAt
  }
  wrapper.find('ExpenseForm').prop('onSubmit')(expense)
  expect(spy).toHaveBeenLastCalledWith(expense)
  expect(history.push).toHaveBeenLastCalledWith('/')
})
