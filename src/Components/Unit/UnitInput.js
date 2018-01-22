import React from 'react'
import styled from 'styled-components'

const Input = styled.input`
  padding: 7px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ccc;
`

const UnitInput = ({ value, handleInputChange }) => {
  return <Input
    type='number'
    value={ value }
    onChange={ handleInputChange }
         />
}

export default UnitInput