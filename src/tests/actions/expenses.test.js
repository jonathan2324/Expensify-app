import { startAddExpense, addExpense, editExpense, removeExpense, setExpenses, startSetExpenses, startRemoveExpense, startEditExpense } from '../../actions/expenses'
import moment from 'moment'
import expenses from '../fixtures/expenses'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { start } from 'repl'
import database from '../../firebase/firebase'

const uid = 'testuid'
const defaultAuthState = { auth: { uid }}
const createMockStore = configureMockStore([thunk])

beforeEach((done) => {
    const expensesData = {}
    expenses.forEach(({ id, description, note, amount, createdAt }) => {
        expensesData[id] = { description, note, amount, createdAt }
    })
    database.ref(`users/${uid}/expenses`).set(expensesData).then(() => done())
}) 

test("should setup remove expense action object", () => {
    const action = removeExpense({ id:'123abc' })
    expect(action).toEqual({
        type: "REMOVE_EXPENSE",
        id: "123abc"
    })
})

test("Should remove expense from firebas", (done) => {
    const store = createMockStore(defaultAuthState)
    const id = expenses[2].id
    store.dispatch(startRemoveExpense({id})).then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type: 'REMOVE_EXPENSE',
            id: id
        })
        return database.ref(`users/${uid}/expenses/${id}`).once('value')
    }).then((snapshot) => {
        expect(snapshot.val()).toBeFalsy()
        done()
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

test('should edit expense from firebase', (done) => {
    const store = createMockStore(defaultAuthState);
    const id = expenses[0].id;
    const updates = { amount: 21045 };
    store.dispatch(startEditExpense(id, updates)).then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: 'EDIT_EXPENSE',
        id,
        updates
      });
      return database.ref(`users/${uid}/expenses/${id}`).once('value');
    }).then((snapshot) => {
      expect(snapshot.val().amount).toBe(updates.amount);
      done();
    });
  });

test("Should setup add expense action object with values", () => {

    const action = addExpense(expenses[2])
    expect(action).toEqual({
        type: "ADD_EXPENSE",
        expense: expenses[2]
    })
})

test("Should add expense to database and store", (done) => {
    const store = createMockStore(defaultAuthState)
    const expenseData = {
        description: 'Mouse',
        amount: 3000,
        note: "This one is better",
        createdAt: 1000
    }
    store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type: "ADD_EXPENSE",
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        })

        return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once("value")
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData)
        done()
    })
})

test("Should add expense to database with defaults and store", () => {
    const store = createMockStore(defaultAuthState)
    const expenseDefaults = {
        
        description: '',
        note: '',
        amount: 0,
        createdAt: 0
  
      }
    store.dispatch(startAddExpense({})).then((done) => {
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type: "ADD_EXPENSE",
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        })

        return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once("value")
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseDefaults)
        done()
    })
})


test("Should setup set expense action object with data", () => {
    const action = setExpenses(expenses)
    expect(action).toEqual({
        type: 'SET_EXPENSES',
        expenses: expenses
    })
})

test('Should fetch the expenses from firebase', (done) => {
    const store = createMockStore(defaultAuthState)
    store.dispatch(startSetExpenses()).then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type: "SET_EXPENSES",
            expenses
        })
        done()
    })

})