import React from 'react'
import { shallow } from 'enzyme'

import ExpenseListItem from '../../components/ExpenseListItem'
import expenses from '../fixtures/expenses'

test('should render ExpenseList with expenses', () => {
  const wrapper = shallow(<ExpenseListItem {...expenses[0]} />)
  expect(wrapper).toMatchSnapshot()
})

test('should show a description of the expense', () => {
  const wrapper = shallow(<ExpenseListItem {...expenses[0]} />)
  expect(wrapper.find('h3').text()).toBe(expenses[0].description)
})

test('should show the amount and createdAt of the expense', () => {
  const wrapper = shallow(<ExpenseListItem {...expenses[0]} />)
  expect(wrapper.find('p').text()).toBe(`${expenses[0].amount} - ${expenses[0].createdAt}`)
})
