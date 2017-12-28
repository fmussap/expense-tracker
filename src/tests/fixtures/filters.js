import moment from 'moment'

export const filters = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
}

export const filtersAlter = {
  text: '',
  sortBy: 'amount',
  startDate: moment(0),
  endDate: moment(0).add(1, 'days')
}
