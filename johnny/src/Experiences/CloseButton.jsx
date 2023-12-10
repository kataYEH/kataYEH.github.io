import React from 'react'
import "./CloseButton.css"
const CloseButton = ({handleClick}) => {
  return (
    <div className="DetailDialog-CloseContainer" onClick={handleClick}>
    <div className="leftright"></div>
    <div className="rightleft"></div>
    <label className="close">close</label>
</div>
  )
}

export default CloseButton