import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

const InputNumber = ({
  value,
  defaultValue,
  size = 'middle',
  onChange = () => {}
}) => {
  const [innerValue, setInnerValue] = useState('')

  useEffect(() => {
    setInnerValue(defaultValue)
  }, [])

  return (
    <div>
      <input
        onChange={(e) => {
          if (value === undefined) {
            setInnerValue(e.target.value)
          }
          onChange()
        }}
      />
    </div>
  )
}

InputNumber.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  size:PropTypes.string,
}

function App(){
  const [value,setValue] = useState('aaa')
  return (
      <div>
      <InputNumber value={value} onChange={e => {}}/>
      <InputNumber defaultValue={value} onChange={e => {}}/>
      </div>
  )
}

export default App;
