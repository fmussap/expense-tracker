import { addExpense, removeExpense, editExpense } from '../../actions/expenses'

describe('addExpense', () => {
  test('should add an expense', () => {
    const expense = {
      description: 'test desc',
      note: 'note test',
      amount: 5,
      createdAt: 1514282568444
    }
    const action = addExpense(expense)
    expect(action).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        ...expense,
        id: expect.any(String)
      }
    })
  })

  test('should add an unique id when creating an expense', () => {
    const expense = {
      description: 'test desc',
      note: 'note test',
      amount: 5,
      createdAt: 1514282568444
    }
    const action = addExpense(expense)
    const action2 = addExpense(expense)
    expect(action.expense.id).not.toBeNull()
    expect(action2.expense.id).not.toBeNull()
    expect(action.expense.id).not.toBe(action2.expense.id)
  })
})

describe('removeExpense', () => {
  test('should remove an expense', () => {
    const id = 123
    const action = removeExpense({id})
    expect(action).toEqual({
      type: 'REMOVE_EXPENSE',
      id
    })
  })
})

describe('editExpense', () => {
  test('should edit an expense', () => {
    const expense = {
      description: 'test desc',
      note: 'note test',
      amount: 5,
      createdAt: 1514282568444
    }
    const action = addExpense(expense)
    const action2 = editExpense(action.expense.id, {note: 'note updated'})
    expect(action.expense.note).not.toBe(action2.updates.note)
  })
})
