import * as actions from './actions-type'
import uuid from 'uuid'

export const addExpense = (
  {
    description = '',
    note = '',
    amount = 0,
    createdAt = 0
  } = {}
) => {
  return ({
    type: actions.ADD_EXPENSE,
    expense: {
      id: uuid(),
      description,
      note,
      amount,
      createdAt
    }
  })
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
