const getTotalExpenses = (expenses) => {
  return expenses.reduce((total, expense) => {
    return total + parseFloat(expense.amount)
  }, 0)
}

export default getTotalExpenses
