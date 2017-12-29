import getTotalExpenses from '../../selectors/expenses-total'

import expenses from '../fixtures/expenses'

describe('getTotalExpenses', () => {
  test('should return 0 with an empty array', () => {
    expect(getTotalExpenses([])).toBe(0)
  })

  test('should return the value of a single amount expense', () => {
    expect(getTotalExpenses([expenses[0]])).toBe(expenses[0].amount)
  })

  test('should return the total amount expense', () => {
    const total = expenses[0].amount + expenses[1].amount
    expect(getTotalExpenses(expenses)).toBe(total)
  })
})
