import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'
import moment from 'moment'


test("Should set defaul state", () => {
    const state = expensesReducer(undefined, { type: "@@INIT"})

    expect(state).toEqual([])
})

test('should remove expense by id', () => {
    const action = {
        type: "REMOVE_EXPENSE",
        id: expenses[1].id
    }

    const state = expensesReducer(expenses, action)
    expect(state).toEqual([expenses[0], expenses[2]])
})

test('should not remove expense if id not found', () => {
    const action = {
        type: "REMOVE_EXPENSE",
        id: '-1'
    }

    const state = expensesReducer(expenses, action)
    expect(state).toEqual([expenses[0], expenses[1], expenses[2]])
})

test("Should add expense to array", () => {
    const expense =   {
        id: "109",
        description: 'Laptop',
        note: '',
        amount: 29500,
        createdAt: 200000
      }

    const action = {
        type: "ADD_EXPENSE",
        expense: expense
        
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([...expenses, expense])
})
test("Should edit an expense if match id", () => {
    
    const amount = 122000

    const action = {
        type: "EDIT_EXPENSE",
        id: expenses[1].id,
        updates: {
            amount: amount
        }
    }
    const state = expensesReducer(expenses, action)
    expect(state[1].amount).toEqual(amount)
})

test("Should NOT edit an expense if NO matching id", () => {
    
    const amount = 122000

    const action = {
        type: "EDIT_EXPENSE",
        id: "10",
        updates: {
            amount: amount
        }
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})