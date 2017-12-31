import moment from 'moment'
const expenses = [
  {
    description: 'banana',
    note: 'note test',
    amount: 5,
    createdAt: 1514282568444,
    id: '1'
  },
  {
    description: 'apple',
    note: 'note test 2',
    amount: 8,
    createdAt: moment(1515282568444).add(2, 'days').valueOf(),
    id: '2'
  }
]

export default expenses
