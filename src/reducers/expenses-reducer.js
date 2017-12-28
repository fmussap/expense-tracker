import * as actions from '../actions/actions-type'

const INITIAL_STATE = []

const expensesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actions.ADD_EXPENSE:
      return [
        ...state,
        action.expense
      ]
    case actions.REMOVE_EXPENSE:
      return state.filter(({ id }) => id !== action.id)
    case actions.EDIT_EXPENSE:
      return state.map((expense) => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates
          }
        } else {
          return expense
        }
      })
    default:
      return state
  }
}

export default expensesReducer
