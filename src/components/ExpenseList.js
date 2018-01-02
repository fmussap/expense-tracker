import React from 'react'
import { connect } from 'react-redux'

import ExpenseListItem from './ExpenseListItem'
import SelectExpenses from '../selectors/expenses-selector'

export const ExpenseList = (props) => {
  const renderList = () => {
    return (
      <div>
        <div className='list-header'>
          <div className='show-for-mobile'>Expenses</div>
          <div className='show-for-desktop'>Expense</div>
          <div className='show-for-desktop'>Amount</div>
        </div>
        <div className='list-body'>
          {props.expenses.length === 0
            ? (
              <div className='list-item list-item--message'>
                <span>no expenses</span>
              </div>
            )
            : props.expenses.map((expense) => {
              return <ExpenseListItem key={expense.id} {...expense} />
            })
          }
        </div>
      </div>
    )
  }
  return (
    <div className='content-container'>
      {renderList()}
    </div>
  )
}

const mapStateToProps = ({ expenses, filters }) => ({
  expenses: SelectExpenses(expenses, filters)
})

export default connect(mapStateToProps, undefined)(ExpenseList)
