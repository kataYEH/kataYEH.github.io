import React from 'react'
import "./GlitchText.css"
import { FaServicestack } from "react-icons/fa";

const GlitchText = ({itemName ,handleShowing , handleCloseMenu}) => {



  return (
    <div className="container" onClick={()=>{
      handleShowing(itemName)
      handleCloseMenu()
    }}>
        <FaServicestack className='stackIcon' />
      <div className="stack" style={{ '--stacks': 3 }}>
        <span style={{ '--index': 0 }}>{itemName}</span>
        <span style={{ '--index': 1 }}>{itemName}</span>
        <span style={{ '--index': 2 }}>{itemName}</span>
      </div>
    </div>
  );
};

export default GlitchText;
