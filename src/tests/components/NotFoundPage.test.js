import React from 'react'
import { shallow } from 'enzyme'
import expenses from '../fixtures/expenses'
import NotFoundPage from '../../components/NotFoundPage'


test("Should render dashboard page", () => {
    const wrapper = shallow(<NotFoundPage />)
    expect(wrapper).toMatchSnapshot()
})