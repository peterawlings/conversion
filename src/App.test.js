import React from 'react'
import UnitInput from './Components/Unit/UnitInput.js'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

it('render an input', () => {
  const output = shallow(
    <UnitInput />
  )
  expect(output).toMatchSnapshot()
})

it('renders props correctly', () => {
  const output = shallow(<UnitInput />)
  console.log(output.props())
})
