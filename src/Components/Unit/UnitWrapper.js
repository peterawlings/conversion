import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
// Separate different types of import with an empty line
import UnitSelect from './UnitSelect.js'
import UnitInput from './UnitInput.js'

const UnitWrap = styled.div`
  display: flex;
  max-width: 430px;
  padding: 0 20px;
  @media (max-width: 700px) {
    flex-basis: 100%;
  }
`

// Container for Unit drop down and Input
const UnitWrapper = ({ unit, value, apiData, handleSelectChange, handleInputChange, disabled, error }) => {
  return (
    <React.Fragment>
      <UnitWrap>
        <UnitInput
          value={ value }
          handleInputChange={ handleInputChange }
          disabled={ disabled } // Assumption: The only field that can be edited is the first. The second input field is based on that of the first
          error={ error }
        />
        <UnitSelect
          unit={ unit }
          value={ value }
          apiData={ apiData }
          handleSelectChange={ handleSelectChange }
          handleInputChange={ handleInputChange }
        />
      </UnitWrap>
    </React.Fragment>
  )
}

UnitWrapper.propTypes = {
  unit: PropTypes.string,
  value: PropTypes.number,
  apiData: PropTypes.array,
  handleSelectChange: PropTypes.func,
  handleInputChange: PropTypes.func,
  disabled: PropTypes.bool,
  error: PropTypes.bool
}

export default UnitWrapper
