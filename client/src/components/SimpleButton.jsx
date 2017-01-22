import React from 'react'

const SimpleButton = ({
  onClick,
  text,
}) => (
  <button
  className='button'
  onClick={onClick}
  >
    {text}
  </button>
)

export default SimpleButton
