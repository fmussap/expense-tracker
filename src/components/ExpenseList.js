import React from 'react'
import { connect } from 'react-redux'

import ExpenseListItem from './ExpenseListItem'
import ExpensesSummary from './ExpensesSummary'
import SelectExpenses from '../selectors/expenses-selector'

export const ExpenseList = (props) => {
  const renderList = () => {
    if (props.expenses.length === 0) {
      return <p>no expenses</p>
    }
    return props.expenses.map((expense) => {
      return <ExpenseListItem key={expense.id} {...expense} />
    })
  }
  return (
    <div>
      <ExpensesSummary />
      <h1>Expense List</h1>
      {renderList()}
    </div>
  )
}

const mapStateToProps = ({ expenses, filters }) => ({
  expenses: SelectExpenses(expenses, filters)
})

export default connect(mapStateToProps, undefined)(ExpenseList)
