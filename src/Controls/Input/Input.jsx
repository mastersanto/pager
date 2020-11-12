import React from 'react'

import './Input.css'

const Input = (props) => {
  const {
    className,
    id,
    placeholder,
    value,
    onChange
  } = props;

  return (
      <input
          id={id}
          name={id}
          type='text'
          placeholder={placeholder || ''}
          value={value}
          onChange={onChange}
          className={`input ${className}`}
      />
  )
};

export default Input
