import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import UnitSelect from './UnitSelect.js'
import UnitInput from './UnitInput.js'

const UnitWrap = styled.div`
  display: flex;
  max-width: 430px;
`

const UnitWrapper = ({ unit, value, apiData, handleSelectChange, handleInputChange, disabled, error }) => {
  return (
    <React.Fragment>
      <UnitWrap>
        <UnitInput
          value={ value }
          handleInputChange={ handleInputChange }
          disabled={disabled}
          error={error}
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
  value: PropTypes.string,
  apiData: PropTypes.array,
  handleSelectChange: PropTypes.func,
  handleInputChange: PropTypes.func,
  disabled: PropTypes.bool,
  error: PropTypes.bool
}

export default UnitWrapper
