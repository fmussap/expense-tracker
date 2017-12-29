import React from 'react'
import { connect } from 'react-redux'
import numeral from 'numeral'

import SelectExpenses from '../selectors/expenses-selector'
import ExpensesTotal from '../selectors/expenses-total'

export const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
  return (
    <div>
      <h1>
        Viewing {expenseCount} totalling {expensesTotal}
      </h1>
    </div>
  )
}

const mapStateToProps = ({ expenses, filters }) => {
  const visibleExpenses = SelectExpenses(expenses, filters)
  return {
    expenseCount: visibleExpenses.length,
    expensesTotal: numeral(ExpensesTotal(visibleExpenses)).format('$0,0.00')
  }
}

export default connect(mapStateToProps, undefined)(ExpensesSummary)
