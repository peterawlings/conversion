import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

// Transition animation added on 'error' state change
const Input = styled.input`
  padding: 7px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin-right: 6px;
  transition: all 0.5s ease-in-out;
  border-color: ${(props) => (props.error ? '#d44a4a' : '#ccc')};
  background-color: ${(props) => (props.error ? 'rgba(251, 197, 197, 0.3)' : 'rgba(251, 197, 197, 0)')};
`

const UnitInput = ({ value, handleInputChange, disabled, error }) => {
  return (
    <Input
      value={ value }
      onChange={ handleInputChange }
      readOnly={ disabled || error } // Input disabled when 'error' is true and if 'disabled' prop passed in. Covers the second input being disabled
      error={ error }
    />
  )
}

UnitInput.propTypes = {
  value: PropTypes.number,
  handleSelectChange: PropTypes.func,
  disabled: PropTypes.bool,
  error: PropTypes.bool
}

export default UnitInput
