import React from 'react'
import styled from 'styled-components'
import UnitSelect from './UnitSelect.js'
import UnitInput from './UnitInput.js'

const UnitWrap = styled.div`
  display: flex;
  max-width: 430px;
`

const UnitWrapper = ({ unit, value, apiData, handleSelectChange, handleInputChange, disabled }) => {
  return (
    <React.Fragment>
      <UnitWrap>
        <UnitInput
          value={ value }
          handleInputChange={ handleInputChange }
          disabled={disabled}
        />
        <UnitSelect
          unit={ unit }
          value={ value }
          measurements={ apiData }
          handleSelectChange={ handleSelectChange }
          handleInputChange={ handleInputChange }
        />
      </UnitWrap>
    </React.Fragment>
  )
}

export default UnitWrapper
