import React from 'react'
import styled from 'styled-components'

const Input = styled.input`
  padding: 7px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ccc;
  border-color: ${(props) => (props.error ? '#d44a4a' : '#ccc')};
  background-color: ${(props) => (props.error ? 'rgba(251, 197, 197, 0.3)' : '#fff')};
`

const UnitInput = ({ value, handleInputChange, disabled, error }) => {
  return <Input
    type='number'
    value={ value }
    onChange={ handleInputChange }
    readOnly={ disabled }
    error={ error }
         />
}

export default UnitInput
