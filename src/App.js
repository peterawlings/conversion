import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'

import UnitWrapper from './Components/Unit/UnitWrapper.js'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  max-width: 800px;
  margin: 0 auto;
`
const Header = styled.h1`
  text-align: center;
  font-family: 'helvetica neue', sans-serif;
  font-weight: 100;
  letter-spacing: 3px;
  font-size: 60px;
`

const Equals = styled.div`
  display: flex;
  width: 80px;
  justify-content: center;
  font-size: 30px;
  text-align: center;
  align-items: center;
`

const ErrorMessage = styled.div`
  text-align: center;
  font-family: 'helvetica neue', sans-serif;
  font-weight: 100;
  letter-spacing: 3px;
  font-size: 23px;
  color: #d44a4a;
  opacity: ${(props) => (props.error ? 1 : 0)};
  margin-top: ${(props) => (props.error ? '30px' : '50px')};
  transition: opacity 0.5s ease-in-out, margin-top 0.5s ease-in-out;
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

  handleFirstSelectChange(event) {
    this.setState(
      {
        unitOne: event.target.value
      },
      () => {
        this.handleConversion(this.state.unitOne, this.state.unitTwo)
      }
    )
  }

  handleSecondSelectChange(event) {
    this.setState(
      {
        unitTwo: event.target.value
      },
      () => {
        this.handleConversion(this.state.unitOne, this.state.unitTwo)
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
        this.handleConversion(this.state.unitOne, this.state.unitTwo)
      }
    )
  }

  handleConversion(firstUnit, secondUnit) {
    const { valueOne } = this.state

    this.setState({ error: false })

    if (
      (firstUnit === 'Pound' && secondUnit === 'Kilograms') ||
      (firstUnit === 'Kilograms' && secondUnit === 'Pound')
    ) {
      // Conditional prevents 0 appearing in second input when no value in first
      this.setState({ valueTwo: valueOne > 0 ? +(valueOne * 2.2).toFixed(2) : '' })
    } else if (
      (firstUnit === 'Pound' && secondUnit === 'Ounces') ||
      (firstUnit === 'Ounces' && secondUnit === 'Pound')
    ) {
      this.setState({ valueTwo: valueOne > 0 ? +(valueOne * 16).toFixed(2) : '' })
    } else if (
      (firstUnit === 'Feet' && secondUnit === 'Inches') ||
      (firstUnit === 'Inches' && secondUnit === 'Feet')
    ) {
      this.setState({ valueTwo: valueOne > 0 ? +(valueOne * 12).toFixed(2) : '' })
    } else if (
      (firstUnit === 'Feet' && secondUnit === 'Meters') ||
      (firstUnit === 'Meters' && secondUnit === 'Feet')
    ) {
      this.setState({ valueTwo: valueOne > 0 ? +(valueOne * 0.3).toFixed(2) : '' })
    } else if (
      (firstUnit === 'Pint' && secondUnit === 'Fluid Ounces') ||
      (firstUnit === 'Fluid Ounces' && secondUnit === 'Pint')
    ) {
      this.setState({ valueTwo: valueOne > 0 ? +(valueOne * 16).toFixed(2) : '' })
    } else {
      this.setState({
        error: true,
        valueOne: '',
        valueTwo: ''
      })
    }
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
        <Header>Converteriser</Header>
        <Wrapper>
          <UnitWrapper
            unit={ unitOne }
            value={ valueOne }
            apiData={ apiData }
            handleSelectChange={ this.handleFirstSelectChange.bind(this) }
            handleInputChange={ this.handleFirstInputChange.bind(this) }
            error={ error }
          />
          <Equals>=</Equals>
          <UnitWrapper
            disabled={ true }
            unit={ unitTwo }
            value={ valueTwo }
            apiData={ apiData }
            handleSelectChange={ this.handleSecondSelectChange.bind(this) }
            error={ error }
            // handleInputChange={ this.handleSecondInputChange.bind(this) }
          />
        </Wrapper>
        <ErrorMessage error={ error }>Sorry, this combination cannot be converted.</ErrorMessage>
      </React.Fragment>
    )
  }
}

export default App
