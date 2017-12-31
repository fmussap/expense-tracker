import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import {
  createExpense,
  addExpense,
  setExpenses,
  startSetExpenses,
  removeExpenseState,
  removeExpense,
  editExpenseState,
  editExpense
} from '../../actions/expenses'
import expenses from '../fixtures/expenses'
import database from '../../firebase/firebase'

const uid = 'fakeuid'
const createMockStore = configureMockStore([thunk])
const expense = {
  description: expenses[0].description,
  amount: expenses[0].amount,
  note: expenses[0].note,
  createdAt: expenses[0].createdAt
}

beforeEach(async () => {
  const expenseDataInitial = {}
  expenses.forEach(({ id, description, note, amount, createdAt }) => {
    expenseDataInitial[id] = { description, note, amount, createdAt }
  })
  await database.ref(`users/${uid}/expenses`).set(expenseDataInitial)
})

describe('createExpense', () => {
  test('should add an expense', () => {
    const action = createExpense(expense)
    expect(action).toEqual({
      type: 'ADD_EXPENSE',
      expense
    })
  })
})

describe('addExpense', () => {
  const store = createMockStore({ auth: { uid } })
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
    const idSaved = await database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value')
    expect(idSaved.val()).toEqual(expenseData)
  })
})

describe('setExpenses', () => {
  test('should setup setExpenses action with data', () => {
    const action = setExpenses(expenses)
    expect(action).toEqual({
      type: 'SET_EXPENSES',
      expenses
    })
  })
})

describe('startSetExpenses', async () => {
  test('should get all expenses from database and set as the state', async () => {
    const store = createMockStore({ auth: { uid } })
    await store.dispatch(startSetExpenses())
    const actions = store.getActions()
    expect(actions[0]).toEqual({
      type: 'SET_EXPENSES',
      expenses: expenses
    })
  })
})

describe('removeExpenseState', async() => {
  test('should remove an expense of the state', () => {
    const id = expenses[0].id
    const action = removeExpenseState({id})
    expect(action).toEqual({
      type: 'REMOVE_EXPENSE',
      id
    })
  })
})

describe('removeExpense', async () => {
  test('should remove an expense from database and state', async () => {
    const id = expenses[0].id
    const store = createMockStore({ auth: { uid } })
    await store.dispatch(removeExpense({id}))
    const isRemoved = await database.ref(`users/${uid}/expenses/${id}`).once('value')
    const actions = store.getActions()
    expect(actions[0]).toEqual({
      type: 'REMOVE_EXPENSE',
      id
    })
    expect(isRemoved.val()).toBeNull()
  })
})

describe('editExpenseState', () => {
  test('should edit an expense on the state', () => {
    const id = expenses[0].id
    const updates = {note: 'note updated'}
    const action = editExpenseState(id, updates)
    expect(action).toEqual({
      type: 'EDIT_EXPENSE',
      id,
      updates
    })
  })
})

describe('editExpense', async () => {
  test('should edit an expense from database and state', async () => {
    const id = expense.id
    const store = createMockStore({ auth: { uid } })
    const updates = {...expense, note: 'note updated'}
    await store.dispatch(editExpense(id, updates))
    const isUpdated = await database.ref(`users/${uid}/expenses/${id}`).once('value')
    const actions = store.getActions()
    expect(actions[0]).toEqual({
      type: 'EDIT_EXPENSE',
      id,
      updates
    })
    expect(isUpdated.val().note).toBe(updates.note)
  })
})
