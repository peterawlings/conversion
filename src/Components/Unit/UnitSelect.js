import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Select = styled.select`
  display: block;
  width: 100%;
  padding: 0.375rem 0.75rem;
  height: 40px;
  font-size: 1rem;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
`
const UnitSelect = ({ unit, value, handleSelectChange, apiData }) => {
  console.log()
  return (
    <Select
      unit={ unit }
      onChange={ handleSelectChange }
      value={ unit }
    >
      {apiData.map((measurement, index) => {
        return <option key={ `tag-${index}` }>{measurement.name}</option>
      })}
    </Select>
  )
}

UnitSelect.propTypes = {
  unit: PropTypes.string,
  handleSelectChange: PropTypes.func,
  apiData: PropTypes.array
}

export default UnitSelect
