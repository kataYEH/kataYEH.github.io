import React from 'react'
import './CloseButton.css'




export default function CloseButton({handleButtonClick}) {
  return (
    <div className="close-container" onClick={handleButtonClick}>
        <div className="leftright"></div>
        <div className="rightleft"></div>
        <label className="close">close</label>
    </div>
  )
}
