import React from 'react'

const Button = props => {
  return (
    <div
      style={{ height: '100px', width: '300px', backgroundColor: '#1976D2' }}
    >
      <button onClick={() => alert('Hey from the function')}>
        {props.text}
      </button>
    </div>
  )
}

export default Button
