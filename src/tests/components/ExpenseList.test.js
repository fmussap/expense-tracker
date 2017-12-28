import React from 'react'
import { shallow } from 'enzyme'

import { ExpenseList } from '../../components/ExpenseList'
import expenses from '../fixtures/expenses'

test('should render ExpenseList with expenses', () => {
  const wrapper = shallow(<ExpenseList expenses={expenses} />)
  expect(wrapper).toMatchSnapshot()
})

test('should render expenseListItem from each expense', () => {
  const wrapper = shallow(<ExpenseList expenses={expenses} />)
  expect(wrapper.find('ExpenseListItem').length).toBe(expenses.length)
})

test('should not render expenseListItem when there is no expenses', () => {
  const wrapper = shallow(<ExpenseList expenses={[]} />)
  expect(wrapper.find('ExpenseListItem').length).toBe(0)
})

test('should show "no expenses" when there is no expenses', () => {
  const wrapper = shallow(<ExpenseList expenses={[]} />)
  expect(wrapper.find('p').text()).toBe('no expenses')
})
