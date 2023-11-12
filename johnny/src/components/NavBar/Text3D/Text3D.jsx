import React from 'react'
import './Text3D.css'

const Text3D = (props) => {
  const onClick = () => {
    props.ToggleFullMenu(prev => !prev)
  }

  return (
    <span className="Text3D" onClick={onClick}>{props.name}</span>
  )
}

Text3D.defaultProps = {
  name : "No Name"
}

export default Text3D