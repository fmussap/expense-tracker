import React from 'react'
import { connect } from 'react-redux'

import ExpenseForm from './ExpenseForm'
import { addExpense } from '../actions/expenses'

export const AddExpensePage = (props) => {
  const handleSubmit = (expense) => {
    props.addExpense(expense)
    props.history.push('/')
  }
  return (
    <div>
      <h1>Add Expense</h1>
      <ExpenseForm onSubmit={handleSubmit} />
    </div>
  )
}

export default connect(undefined, {
  addExpense
})(AddExpensePage)
