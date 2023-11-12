import React from 'react'
import ColorBox from './ColorBox'
import InputBox from './InputBox'
import { useState } from 'react'

const HW1Content = () => {
  const [color , setColor] = useState("")  

  

  return (
    <main>
      <ColorBox color={color}/>
      <InputBox color={color} setColor = {setColor}/>
    </main>
  )
}

export default HW1Content


