import { 
    setStartDate, 
    setEndDate, 
    setTextFilter, 
    sortByAmount, 
    sortByDate
} from '../../actions/filters'
import moment from 'moment'


test("Should generate set start date action object", ()=> {
    const action = setStartDate(moment(0))

    expect(action).toEqual({
        type: "SET_START_DATE",
        startDate: moment(0)
    })
})

test("Should generate set end date action object", () => {
    const action = setEndDate(moment(0))
    expect(action).toEqual({
        type:"SET_END_DATE",
        endDate: moment(0)
    })
})

test("Should generate sorted by amount", () => {
    const action = sortByAmount()

    expect(action).toEqual({
        type: "SORT_BY_AMOUNT"
    })
})

test("Should generate sorted by date", () => {
    const action = sortByDate()

    expect(action).toEqual({
        type: "SORT_BY_DATE"
    })
})

test('Should generate filter to defaul', () => {
    const action = setTextFilter()

    expect(action).toEqual({
        type: "SET_TEXT_FILTER",
        text: ''
    })

})

test('Should generate filter to text', () => {


    const action = setTextFilter("Yo")

    expect(action).toEqual({
        type: "SET_TEXT_FILTER",
        text: 'Yo'
    })

})