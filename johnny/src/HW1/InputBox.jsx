import React from 'react'

const InputBox = ({color , setColor}) => {
  return (
    <input
            autoFocus
            id='enterColor'
            type='text'
            placeholder='Enter Your Color'
            required
            value={color}
            onChange={(e)=> {
                setColor(e.target.value)
                console.log(color)
            }}
        />
  )
}

export default InputBox