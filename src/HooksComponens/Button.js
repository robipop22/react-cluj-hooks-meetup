import React, { useState } from 'react'

const HoverBtn = () => {
  const [hovered, setHover] = useState(false)

  return (
    <button
      style={{
        backgroundColor: hovered ? '#2E7D32' : '#283593'
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      Hover me (I'm a hook Btn)
    </button>
  )
}

export default HoverBtn
