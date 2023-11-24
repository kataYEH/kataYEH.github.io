import React from 'react'
import { forwardRef } from 'react';
import "./AboutMe.css"
import Photo from './Photo'
import TextContent from './TextContent'

const AboutMe = forwardRef(() => {
  return (
    <main className='AboutMe' id="About Me">
        <Photo />
        <TextContent />
    </main>
  )
})

export default AboutMe