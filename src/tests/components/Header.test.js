// react-test-renderer
import { shallow } from 'enzyme'
import React from 'react'
import Header from '../../components/Header'


test('should render header correctly', () => {
    // const renderer = new ReactShallowRenderer()
    // renderer.render(<Header />)
    // expect(renderer.getRenderOutput()).toMatchSnapshot()
    // expect(wrapper.find('h1').text()).toBe("Expensify")
    const wrapper = shallow(<Header />)
    expect(wrapper).toMatchSnapshot()
})
