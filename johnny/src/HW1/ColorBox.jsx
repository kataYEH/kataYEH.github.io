import React from 'react'

const ColorBox = ({color}) => {
  return (
    <div style={{
        background:color , 
        height:"10rem" , 
        width:"10rem", 
        border:"1px solid black",
        borderRadius : "1rem",
        margin:"1rem",
        display : "flex",
        alignItems :"center",   
        justifyContent : "center"
    }}>ColorBox</div>
  )
}

export default ColorBox