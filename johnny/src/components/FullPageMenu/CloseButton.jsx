import React from 'react'
import './CloseButton.css'




export default function CloseButton({handleCloseMenu}) {
  return (
    <div className="close-container" onClick={handleCloseMenu}>
        <div className="leftright"></div>
        <div className="rightleft"></div>
        <label className="close">close</label>
    </div>
  )
}
