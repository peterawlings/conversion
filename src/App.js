import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'

import UnitWrapper from './Components/Unit/UnitWrapper.js'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  max-width: 800px;
  margin: 0 auto;
  @media (max-width: 700px) {
    flex-wrap: wrap;
  }
`
const Header = styled.h1`
  text-align: center;
  font-family: 'helvetica neue', sans-serif;
  font-weight: 100;
  letter-spacing: 3px;
  font-size: 60px;
  margin-bottom: 15px;
  margin-top: 70px;
  @media (max-width: 430px) {
    font-size: 40px;
  }
`
const Equals = styled.div`
  display: flex;
  width: 80px;
  justify-content: center;
  font-size: 30px;
  text-align: center;
  align-items: center;
  margin-top: -10px;
  @media (max-width: 700px) {
    flex-basis: 100%;
    margin-bottom: 6px;
    margin-top: 0;
  }
`
const Subtitle = styled.p`
  margin: 0 auto;
  text-align: center;
  font-family: 'helvetica neue', sans-serif;
  margin-bottom: 80px;
  color: #848484;
  font-weight: 300;
  letter-spacing: 0.5px;
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
    unitTwo: 'Kilograms',
    valueOne: '',
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
    this.setState(
      {
        valueOne: Number(event.target.value) // Ensure value is a number
      },
      () => {
        this.handleConversion(this.state.unitOne, this.state.unitTwo)
      }
    )
  }

  handleConversion(firstUnit, secondUnit) {
    const { valueOne } = this.state
    // Reset error state to false
    this.setState({ error: false })
    // Perform calculation
    if (firstUnit === 'Pound' && secondUnit === 'Kilograms') {
      // Conditional prevents '0' appearing in second input when no value in first
      this.setState({ valueTwo: valueOne > 0 ? +(valueOne * 2.2).toFixed(2) : '' })
    } else if (firstUnit === 'Kilograms' && secondUnit === 'Pound') {
      this.setState({ valueTwo: valueOne > 0 ? +(valueOne / 2.2).toFixed(2) : '' })
    } else if (firstUnit === 'Pound' && secondUnit === 'Ounces') {
      this.setState({ valueTwo: valueOne > 0 ? +(valueOne * 16).toFixed(2) : '' })
    } else if (firstUnit === 'Ounces' && secondUnit === 'Pound') {
      this.setState({ valueTwo: valueOne > 0 ? +(valueOne / 16).toFixed(2) : '' })
    } else if (firstUnit === 'Feet' && secondUnit === 'Inches') {
      this.setState({ valueTwo: valueOne > 0 ? +(valueOne * 12).toFixed(2) : '' })
    } else if (firstUnit === 'Inches' && secondUnit === 'Feet') {
      this.setState({ valueTwo: valueOne > 0 ? +(valueOne / 12).toFixed(2) : '' })
    } else if (firstUnit === 'Feet' && secondUnit === 'Meters') {
      this.setState({ valueTwo: valueOne > 0 ? +(valueOne * 0.3).toFixed(2) : '' })
    } else if (firstUnit === 'Meters' && secondUnit === 'Feet') {
      this.setState({ valueTwo: valueOne > 0 ? +(valueOne / 0.3).toFixed(2) : '' })
    } else if (firstUnit === 'Pint' && secondUnit === 'Fluid Ounces') {
      this.setState({ valueTwo: valueOne > 0 ? +(valueOne * 16).toFixed(2) : '' })
    } else if (firstUnit === 'Fluid Ounces' && secondUnit === 'Pint') {
      this.setState({ valueTwo: valueOne > 0 ? +(valueOne / 16).toFixed(2) : '' })
    } else {
      this.setState({
        error: true,
        valueOne: '',
        valueTwo: ''
      })
    }
  }

  componentDidMount() {
    // Assumption: The data is coming from an external API
    const json = 'https://api.myjson.com/bins/cn3pd'
    axios
      .get(json)
      .then((response) => {
        this.setState({ apiData: response.data })
      })
      .catch((err) => console.log(err))
  }

  render() {
    const { unitOne, unitTwo, valueOne, valueTwo, apiData, error } = this.state
    return (
      <React.Fragment>
        <Header>Conversioniser</Header>
        <Subtitle>Convert units of measurement</Subtitle>
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
          />
        </Wrapper>
        <ErrorMessage error={ error }>Sorry, this combination cannot be converted.</ErrorMessage>
      </React.Fragment>
    )
  }
}

export default App
