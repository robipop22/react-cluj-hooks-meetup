import React from 'react'
import { useHover } from '../customHooks'

const HoverBtn = () => {
  const [hoverRef, isHovered] = useHover()

  return (
    <button ref={hoverRef} style={{ color: isHovered ? '#FFF' : '#000' }}>
      Hello there I'm a custom hook
    </button>
  )
}

export default HoverBtn
