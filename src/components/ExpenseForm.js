import React, { Component } from 'react'
import moment from 'moment'
import { SingleDatePicker } from 'react-dates'

class ExpenseForm extends Component {
  constructor (props) {
    super()
    this.state = {
      description: props.expense ? props.expense.description : '',
      amount: props.expense ? props.expense.amount : 0,
      note: props.expense ? props.expense.note : '',
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calendarFocused: false,
      error: ''
    }
  }

  onDescriptionChange = (e) => {
    const description = e.target.value
    this.setState(() => ({ description }))
  }

  onAmountChange = (e) => {
    let amount = e.target.value
    if ( !amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      if (!amount) {
        amount = 0
      }
      this.setState(() => ({ amount }))
    }
  }

  onNoteChange = (e) => {
    const note = e.target.value
    this.setState(() => ({ note }))
  }

  onDateChange = (createdAt) => {
    if (createdAt) {
      this.setState(() => ({ createdAt }))
    }
  }

  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }))
  }

  handleSubmit = (e) => {
    e.preventDefault()
    let error = ''
    if (!this.state.description) {
      error = 'Description field is required'
      this.setState(() => ({ error }))
    } else if (!this.state.amount) {
      error = 'Amount field is required'
      this.setState(() => ({ error }))
    } else {
      this.props.onSubmit({
        description: this.state.description,
        amount: this.state.amount,
        note: this.state.note,
        createdAt: this.state.createdAt.valueOf()
      })
    }
    
  }

  render () {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            placeholder='Description'
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />
          <input
            type='number'
            placeholder='Amount'
            value={this.state.amount}
            min="0" step="0.01"
            onChange={this.onAmountChange}
          />
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
          <textarea
            placeholder='Add a note for your expense'
            value={this.state.note}
            onChange={this.onNoteChange}
          />
          <button type='submit'>{this.props.expense ? 'Edit Expense' : 'Add Expense'}</button>
        </form>
      </div>
    )
  }
}

export default ExpenseForm
