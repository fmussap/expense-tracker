import React from 'react'
import { shallow } from 'enzyme'
import numeral from 'numeral'

import ExpenseListItem from '../../components/ExpenseListItem'
import expenses from '../fixtures/expenses'

test('should render ExpenseList with expenses', () => {
  const wrapper = shallow(<ExpenseListItem {...expenses[0]} />)
  expect(wrapper).toMatchSnapshot()
})

test('should show the description of the expense', () => {
  const wrapper = shallow(<ExpenseListItem {...expenses[0]} />)
  expect(wrapper.find('h3').first().text()).toBe(expenses[0].description)
})

test('should show the amount of the expense', () => {
  const amount = numeral(expenses[0].amount).format('$0,0.00')
  const wrapper = shallow(<ExpenseListItem {...expenses[0]} />)
  expect(wrapper.find('h3').at(1).text()).toBe(amount)
})
