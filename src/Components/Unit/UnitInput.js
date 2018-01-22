import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Input = styled.input`
  padding: 7px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin-right: -1px;
  transition: all 0.5s ease-in-out;

  border-color: ${(props) => (props.error ? '#d44a4a' : '#ccc')};
  background-color: ${(props) => (props.error ? 'rgba(251, 197, 197, 0.3)' : 'rgba(251, 197, 197, 0)')};

`

const UnitInput = ({ value, handleInputChange, disabled, error }) => {
  return (
    <Input
      type='number'
      value={ value }
      onChange={ handleInputChange }
      readOnly={ disabled || error } // Input disabled on error and 'disabled' prop passed in
      error={ error }
    />
  )
}

UnitInput.propTypes = {
  value: PropTypes.string,
  handleSelectChange: PropTypes.func,
  disabled: PropTypes.bool,
  error: PropTypes.bool
}

export default UnitInput
