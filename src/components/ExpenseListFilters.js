import React, { Component } from 'react'
import { connect } from 'react-redux'
import { DateRangePicker } from 'react-dates'
import {
  setTextFilter,
  sortByDate,
  sortByAmount,
  setStartDate,
  setEndDate
} from '../actions/filters'

export class ExpenseListFilters extends Component {
  state = {
    calendarFocused: null
  }

  handleInput = (e) => (
    this.props.setTextFilter(e.target.value)
  )

  handleSelect = (e) => {
    if (e.target.value === 'date') {
      this.props.sortByDate()
    } else if (e.target.value === 'amount') {
      this.props.sortByAmount()
    }
  }

  onDatesChange = ({ startDate, endDate }) => {
    this.props.setStartDate(startDate)
    this.props.setEndDate(endDate)
  }

  onFocusChange = (calendarFocused) => {
    this.setState(() => ({ calendarFocused }))
  }

  render () {
    return (
      <div>
        <input type='text' value={this.props.filters.text} onChange={this.handleInput} />
        <select value={this.props.filters.sortBy} onChange={this.handleSelect}>
          <option value='date'>Date</option>
          <option value='amount'>Amount</option>
        </select>
        <DateRangePicker
          startDate={this.props.filters.startDate}
          endDate={this.props.filters.endDate}
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          startDateId='start'
          endDateId='end'
          numberOfMonths={1}
          isOutsideRange={() => false}
          showClearDates={true}
        />
      </div>
    )
  }
}

const mapStateToProps = ({ filters }) => ({
  filters
})

export default connect(mapStateToProps, {
  setTextFilter,
  sortByDate,
  sortByAmount,
  setStartDate,
  setEndDate
})(ExpenseListFilters)
