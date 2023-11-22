import React from 'react'
import "./BubbleButton.css"

const BubbleButton = ({itemName ,handleShowing , handleCloseMenu}) => {
  return (
    <li className='BubbleButton' onClick={()=>{
        handleShowing(itemName)
        handleCloseMenu()
      }}>
        {itemName}
        <span></span><span></span><span></span><span></span>
    </li>
  )
}

export default BubbleButton