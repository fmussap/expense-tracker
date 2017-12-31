import database from '../firebase/firebase'
import * as actions from './actions-type'

export const createExpense = (expense) => {
  return ({
    type: actions.ADD_EXPENSE,
    expense
  })
}

export const addExpense = (expenseData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid
    const {
      description = '',
      note = '',
      amount = 0,
      createdAt = 0
    } = expenseData
    const expense = { description, note, amount, createdAt }
    return database.ref(`users/${uid}/expenses`).push(expense)
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

export const removeExpenseState = ({ id } = {}) => ({
  type: actions.REMOVE_EXPENSE,
  id
})

export const removeExpense = ({ id } = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid
    return database.ref(`users/${uid}/expenses/${id}`).remove()
      .then(() => {
        dispatch(removeExpenseState({ id }))
      })
      .catch((e) => {
        console.log('Error on remove expense', e)
      })
  }
}

export const editExpenseState = (id, updates) => ({
  type: actions.EDIT_EXPENSE,
  id,
  updates
})

export const editExpense = (id, updates) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid
    return database.ref(`users/${uid}/expenses/${id}`).set(updates)
      .then(() => {
        dispatch(editExpenseState(id, updates))
      })
      .catch((e) => {
        console.log('Error on edit expense', e)
      })
  }
}

export const setExpenses = (expenses) => ({
  type: actions.SET_EXPENSES,
  expenses
})

export const startSetExpenses = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid
    return database.ref(`users/${uid}/expenses`).once('value')
      .then((snapshot) => {
        const expenses = []
        snapshot.forEach((childSnapshot) => {
          expenses.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
          })
        })
        dispatch(setExpenses(expenses))
      })
  }
}
