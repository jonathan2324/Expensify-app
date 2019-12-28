import selectExpensesTotal from '../../selectors/expenses-total'
import expenses from '../fixtures/expenses'

test("should produce 0 if no expenses", () => {
    const result = selectExpensesTotal([])
    expect(result).toEqual(0)

})

test("Should produce total for one expense", () => {
    const result = selectExpensesTotal([expenses[0]])
    expect(result).toEqual(195)
})


test("Should produce total for multiple expenses", () => {
    const result = selectExpensesTotal(expenses)
    expect(result).toEqual(114195)
})