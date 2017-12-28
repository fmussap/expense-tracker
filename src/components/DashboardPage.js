import React from 'react'
import { Link } from 'react-router-dom'

import ExpenseList from './ExpenseList'
import ExpenseListFilters from './ExpenseListFilters'

const DashboardPage = () => (
  <div>
    <Link to='/create'>
      create
    </Link>
    <ExpenseListFilters />
    <ExpenseList />
  </div>
)

export default DashboardPage
