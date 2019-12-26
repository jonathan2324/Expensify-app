import filtersReducer from "../../reducers/filters"
import moment from 'moment'


test('Should setup default filter values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT'})
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf("month"),
        endDate: moment().endOf("month")
    })
})

test ("should set sortBy to amount", () => {
    const state = filtersReducer(undefined, { type: "SORT_BY_AMOUNT"})
    expect(state.sortBy).toBe("amount")
})

test("Should set sortBy to date", () => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: "amount"
    }

    const action = { type: "SORT_BY_DATE"}

    const state = filtersReducer(currentState, action)

    expect(state.sortBy).toBe("date")
})

test("Should set text filter", () => {

    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: "date"
    }

    const action = { type: "SET_TEXT_FILTER", text: "yo"}

    const state = filtersReducer(currentState, action)

    expect(state.text).toEqual("yo")

})

test("Should set startDate filter", () => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: "date"
    }

    const action = { type: "SET_START_DATE", startDate: moment(0) }

    const state = filtersReducer(currentState, action)

    expect(state.startDate).toEqual(moment(0))
})

test("Should set endDate filter", () => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: "date"
    }

    const action = { type: "SET_END_DATE", endDate: moment(0) }

    const state = filtersReducer(currentState, action)

    expect(state.endDate).toEqual(moment(0))
})