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
      <div className='page-header'>
        <div className='content-container'>
          <h1>Add Expense</h1>
        </div>
      </div>
      <div className='content-container'>
        <ExpenseForm onSubmit={handleSubmit} />
      </div>
    </div>
  )
}

export default connect(undefined, {
  addExpense
})(AddExpensePage)
