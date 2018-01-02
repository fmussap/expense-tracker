import React from 'react'
import { connect } from 'react-redux'
import { startLogin } from '../actions/auth'

export const LoginPage = ({ startLogin }) => (
  <div className='box-layout'>
    <div className='box-layout__box'>
      <h1 className='box-layout__title'>Expense Tracker</h1>
      <p>Let's keep track of all expenses in one place.</p>
      <button className='loginBtn loginBtn--google' onClick={startLogin}>Sign in with Google</button>
    </div>
  </div>
)

export default connect(undefined, {startLogin})(LoginPage)
