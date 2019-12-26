import { addExpense, editExpense, removeExpense } from '../../actions/expenses'
import moment from 'moment'

test("should setup remove expense action object", () => {
    const action = removeExpense({ id:'123abc' })
    expect(action).toEqual({
        type: "REMOVE_EXPENSE",
        id: "123abc"
    })
})

test("should setup edit expense action object", () => {
    const action = editExpense( "123", {note: "Hola"})
    expect(action).toEqual({
        type: "EDIT_EXPENSE",
        id: "123",
        updates: {note: "Hola"}
    })
})

test("Should setup add expense action object with values", () => {
    const expenseData = {
        description: "Rent",
        amount: 109500,
        createdAt: 1000,
        note: "this was last months rent"
    }
    const action = addExpense(expenseData)
    expect(action).toEqual({
        type: "ADD_EXPENSE",
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
})

test("Should setup action object with defaults", () => {
    const expenseData = {
        
        description: '',
        amount: 0,
        createdAt: 0,
        note: ''
    }
    const action = addExpense()
    expect(action).toEqual({
        type: "ADD_EXPENSE",
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
})

