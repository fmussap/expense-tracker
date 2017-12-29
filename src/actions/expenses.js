import database from '../firebase/firebase'
import * as actions from './actions-type'

export const createExpense = (expense) => {
  return ({
    type: actions.ADD_EXPENSE,
    expense
  })
}

export const addExpense = (expenseData = {}) => {
  return (dispatch) => {
    const {
      description = '',
      note = '',
      amount = 0,
      createdAt = 0
    } = expenseData
    const expense = { description, note, amount, createdAt }
    return database.ref('expenses').push(expense)
      .then((ref) => {
        dispatch(createExpense({
          id: ref.key,
          ...expense
        }))
      })
      .catch((e) => {
        console.log('Error on add expense', e)
      })
  }
}

export const removeExpense = ({ id } = {}) => ({
  type: actions.REMOVE_EXPENSE,
  id
})

export const editExpense = (id, updates) => ({
  type: actions.EDIT_EXPENSE,
  id,
  updates
})
