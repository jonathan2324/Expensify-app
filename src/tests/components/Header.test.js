// react-test-renderer
import { shallow } from 'enzyme'
import React from 'react'
import {Header} from '../../components/Header'
import { startLogin } from '../../actions/auth'


test('should render header correctly', () => {
    // const renderer = new ReactShallowRenderer()
    // renderer.render(<Header />)
    // expect(renderer.getRenderOutput()).toMatchSnapshot()
    // expect(wrapper.find('h1').text()).toBe("Expensify")
    const wrapper = shallow(<Header startLogout={() => {}}/>)
    expect(wrapper).toMatchSnapshot()
})

test("Should call startLogout onClick", () => {
    const startLogout = jest.fn()
    const wrapper = shallow(<Header startLogout={startLogout}/>)
    wrapper.find("button").simulate("click")
    expect(startLogout).toHaveBeenCalled()

})