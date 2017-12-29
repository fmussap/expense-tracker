import React from 'react'
import { shallow } from 'enzyme'
import { ExpensesSummary } from '../../components/ExpensesSummary'

test('should render ExpensesSummary correctly', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={12.5} expensesTotal={12} />)
  expect(wrapper).toMatchSnapshot()
})
