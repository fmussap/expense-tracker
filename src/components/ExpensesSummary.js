import React from 'react'
import { connect } from 'react-redux'
import numeral from 'numeral'
import { Link } from 'react-router-dom'

import SelectExpenses from '../selectors/expenses-selector'
import ExpensesTotal from '../selectors/expenses-total'

export const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
  return (
    <div className='page-header'>
      <div className='content-container'>
        <h1 className='page-header__title'>
          Viewing <span>{expenseCount} </span>
          totalling <span>{expensesTotal}</span>
        </h1>
        <div className='page-header__actions'>
          <Link className='button' to='/create'>
            Add expense
          </Link>
        </div>
      </div>
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
