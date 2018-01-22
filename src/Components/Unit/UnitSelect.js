import React from 'react'
import styled from 'styled-components'

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

const UnitSelect = ({ unit, handleSelectChange, measurements }) => {
  return (
    <Select
      unit={ unit }
      onChange={ handleSelectChange }
    >
      {measurements.map((measurement, index) => {
        return (
          <option key={ `tag-${index}` }>
            {measurement.name}
            {/* {`(${measurement.attr.unit})`} */}
          </option>
        )
      })}
    </Select>
  )
}

export default UnitSelect
