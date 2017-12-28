import React from 'react'
import { connect } from 'react-redux'

import ExpenseForm from './ExpenseForm'
import { editExpense, removeExpense } from '../actions/expenses'

export const EditExpensePage = (props) => {
  const handleSubmit = (expense) => {
    props.editExpense(props.expense.id, expense)
    props.history.push('/')
  }
  const handleClick = (e) => {
    props.removeExpense({ id: props.expense.id })
    props.history.push('/')
  }
  return (
    <div>
      <h1>Edit Expense</h1>
      <ExpenseForm onSubmit={handleSubmit} expense={props.expense} />
      <button onClick={handleClick}>Remove</button>
    </div>
  )
}

const mapStateToProps = ({ expenses }, props) => ({
  expense: expenses.find((expense) => expense.id === props.match.params.id)
})

export default connect(mapStateToProps, {
  editExpense,
  removeExpense
})(EditExpensePage)
