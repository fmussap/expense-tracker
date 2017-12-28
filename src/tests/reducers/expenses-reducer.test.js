import expensesReducer from '../../reducers/expenses-reducer'
import expenses from '../fixtures/expenses'

describe('expensesReducer', () => {
  test('should add a new expense to the state', () => {
    const action = {
      type: 'ADD_EXPENSE',
      expense: {
        ...expenses[0]
      }
    }
    const action2 = {
      type: 'ADD_EXPENSE',
      expense: {
        ...expenses[1]
      }
    }
    const state = expensesReducer(undefined, action)
    expect(state).toEqual([
      expenses[0]
    ])
    const state2 = expensesReducer([{...expenses[0]}], action2)
    expect(state2).toEqual([
      expenses[0],
      expenses[1]
    ])
  })

  test('should remove an expense from state', () => {
    const action = {
      type: 'REMOVE_EXPENSE',
      id: expenses[1].id
    }
    const state = expensesReducer([...expenses], action)
    expect(state).toEqual([
      expenses[0]
    ])
  })

  test('should edit an expense from state', () => {
    const action = {
      type: 'EDIT_EXPENSE',
      id: expenses[0].id,
      updates: {
        description: 'pineapple',
        amount: 10
      }
    }
    const state = expensesReducer([...expenses], action)
    expect(state[0]).toEqual({
      ...expenses[0],
      description: 'pineapple',
      amount: 10
    })
  })
})
