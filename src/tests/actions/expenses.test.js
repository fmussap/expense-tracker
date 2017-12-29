import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import { createExpense, addExpense, removeExpense, editExpense } from '../../actions/expenses'
import expenses from '../fixtures/expenses'
import database from '../../firebase/firebase'

const createMockStore = configureMockStore([thunk])

describe('createExpense', () => {
  const expense = expenses[0]
  test('should add an expense', () => {
    const action = createExpense(expense)
    expect(action).toEqual({
      type: 'ADD_EXPENSE',
      expense
    })
  })
})

describe('addExpense', () => {
  const store = createMockStore({})
  const expenseData = {
    description: expenses[1].description,
    amount: expenses[1].amount,
    note: expenses[1].note,
    createdAt: expenses[1].createdAt
  }
  test('should add an expense to the database and store', async () => {
    await store.dispatch(addExpense(expenseData))
    const actions = store.getActions()

    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        ...expenseData
      }
    })
    const idSaved = await database.ref(`expenses/${actions[0].expense.id}`).once('value')
    expect(idSaved.val()).toEqual(expenseData)
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
    const expense = expenses[0]
    const action = createExpense(expense)
    const action2 = editExpense(action.expense.id, {note: 'note updated'})
    expect(action.expense.note).not.toBe(action2.updates.note)
  })
})
