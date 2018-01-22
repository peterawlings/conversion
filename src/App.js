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
    unitOne: '',
    unitTwo: '',
    valueOne: '',
    valueTwo: '',
    apiData: []
  }
  // Better way to do this?
  handleFirstSelectChange(event) {
    console.log(event.target.value)
    this.setState({ unitOne: event.target.value })
  }

  handleSecondSelectChange(event) {
    console.log(event.target.value)
    this.setState({ unitTwo: event.target.value })
  }
  handleFirstInputChange(event) {
    console.log(event.target.value)
    this.setState({ valueOne: event.target.value })
  }

  handleSecondInputChange(event) {
    console.log(event.target.value)
    this.setState({ valueTwo: event.target.value })
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
    const { unitOne, unitTwo, valueOne, valueTwo, apiData } = this.state

    return (
      <React.Fragment>
        <Wrapper>
          <UnitWrapper
            unit={ unitOne }
            value={ valueOne }
            apiData={ apiData }
            handleSelectChange={ this.handleFirstSelectChange.bind(this) }
            handleInputChange={ this.handleFirstInputChange.bind(this) }
          />
          <Equals>=</Equals>
          <UnitWrapper
            unit={ unitTwo }
            value={ valueTwo }
            apiData={ apiData }
            handleSelectChange={ this.handleSecondSelectChange.bind(this) }
            // handleInputChange={ this.handleSecondInputChange.bind(this) }
          />
        </Wrapper>
      </React.Fragment>
    )
  }
}

export default App
