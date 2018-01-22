import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'

import UnitWrapper from './Components/Unit/UnitWrapper.js'

const Wrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  display: flex;
`

const Equals = styled.div`
  width: 20px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`

class App extends Component {
  state = {
    unitOne: 'Pound',
    unitTwo: 'Pound',
    valueOne: '1',
    valueTwo: '',
    apiData: [],
    error: false
  }
  // Better way to do this?
  handleFirstSelectChange(event) {
    this.setState(
      {
        unitOne: event.target.value
      },
      () => {
        this.conversion(this.state.unitOne, this.state.unitTwo)
      }
    )
  }

  handleSecondSelectChange(event) {
    this.setState(
      {
        unitTwo: event.target.value
      },
      () => {
        this.conversion(this.state.unitOne, this.state.unitTwo)
      }
    )
  }

  handleFirstInputChange(event) {
    console.log(event.target.value)
    this.setState(
      {
        valueOne: event.target.value
      },
      () => {
        this.conversion(this.state.unitOne, this.state.unitTwo)
      }
    )
  }

  // handleSecondInputChange(event) {
  //   console.log(event.target.value)
  //   this.setState({ valueTwo: event.target.value })
  // }

  conversion(firstUnit, secondUnit) {
    const { valueOne, valueTwo } = this.state
    if (firstUnit === 'Pound' && secondUnit === 'Kilograms') {
      console.log('test', valueOne * 2.2)
      this.setState({ valueTwo: +(valueOne * 2.2).toFixed(2) })
    } else if (firstUnit === 'Pound' && secondUnit === 'Ounces') {
      this.setState({ valueTwo: +(valueOne * 16).toFixed(2) })
    } else if (firstUnit === 'Feet' && secondUnit === 'Inches') {
      this.setState({ valueTwo: +(valueOne * 12).toFixed(2) })
    } else if (firstUnit === 'Feet' && secondUnit === 'Meters') {
      this.setState({ valueTwo: +(valueOne * 0.3).toFixed(2) })
    } else if (firstUnit === 'Pint' && secondUnit === 'Fluid Ounces') {
      this.setState({ valueTwo: +(valueOne * 16).toFixed(2) })
    } else {
      this.setState({ error: true })
    }
     console.log(valueOne, valueTwo)
  }

  componentDidMount() {
    const json = 'https://api.myjson.com/bins/cn3pd'
    axios
      .get(json)
      .then((response) => {
        console.log(response.data)
        this.setState({ apiData: response.data })
      })
      .catch((err) => console.log(err))
  }

  render() {
    const { unitOne, unitTwo, valueOne, valueTwo, apiData, error } = this.state

    return (
      <React.Fragment>
        <Wrapper>
          <UnitWrapper
            unit={ unitOne }
            value={ valueOne }
            apiData={ apiData }
            handleSelectChange={ this.handleFirstSelectChange.bind(this) }
            handleInputChange={ this.handleFirstInputChange.bind(this) }
            error={error}
          />
          <Equals>=</Equals>
          <UnitWrapper
            disabled={ true }
            unit={ unitTwo }
            value={ valueTwo }
            apiData={ apiData }
            handleSelectChange={ this.handleSecondSelectChange.bind(this) }
            error={error}
            // handleInputChange={ this.handleSecondInputChange.bind(this) }
          />
        </Wrapper>
      </React.Fragment>
    )
  }
}

export default App
