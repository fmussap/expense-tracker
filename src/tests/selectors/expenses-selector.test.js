import moment from 'moment'
import getVisibleExpenses from '../../selectors/expenses-selector'

import expenses from '../fixtures/expenses'

describe('getVisibleExpenses', () => {
  test('should filter by text"apple" and "banana', () => {
    const expensesTextApple = [
      expenses[1]
    ]
    const expensesTextBanana = [
      expenses[0]
    ]
    const action = getVisibleExpenses(expenses, { text: 'apple' })
    const action2 = getVisibleExpenses(expenses, { text: 'banana' })
    expect(action).toEqual(expensesTextApple)
    expect(action2).toEqual(expensesTextBanana)
  })
  test('should sort by date', () => {
    const expensesOrderDate = [
      expenses[1],
      expenses[0]
    ]
    const action = getVisibleExpenses(expenses, { text: '', sortBy: 'date' })
    expect(action).toEqual(expensesOrderDate)
  })

  test('should sort by amount', () => {
    const expensesOrderAmount = [
      expenses[1],
      expenses[0]
    ]
    const action = getVisibleExpenses(expenses, { text: '', sortBy: 'amount' })
    expect(action).toEqual(expensesOrderAmount)
  })

  test('should filter by startDate and / or endDate', () => {
    const startDate = moment(expenses[0].createdAt)
    const endDate = moment(expenses[0].createdAt)
    const endDate2 = moment(expenses[1].createdAt)
    const expensesOrderGivenDate = [
      expenses[0]
    ]
    const expensesOrderGetAllDates = [
      expenses[1],
      expenses[0]
    ]

    const action = getVisibleExpenses(expenses, { text: '', startDate, endDate })
    const action2 = getVisibleExpenses(expenses, { text: '', startDate, endDate: endDate2 })
    const action3 = getVisibleExpenses(expenses, { text: '', sortBy: 'date', startDate })
    expect(action).toEqual(expensesOrderGivenDate)
    expect(action2).toEqual(expenses)
    expect(action3).toEqual(expensesOrderGetAllDates)
  })
})
