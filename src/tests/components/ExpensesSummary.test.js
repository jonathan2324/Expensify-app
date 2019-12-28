import React from 'react'
import { shallow } from 'enzyme'
import expenses from '../fixtures/expenses'
import {ExpensesSummary} from '../../components/ExpensesSummary'

test("Should render ExpensesSummary page 1", () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={235}/>)
    expect(wrapper).toMatchSnapshot()
})

test("Should render ExpensesSummary page mult", () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={23} expensesTotal={23500}/>)
    expect(wrapper).toMatchSnapshot()
})