import React from 'react'
import "./Photo.css"
import PhotoImg from '../images/Photo-1.jpg';

const Photo = () => {
  return (
    <div className='Photo'>
        <img
            src={PhotoImg}
        >
        </img>
    </div>
  )
}

export default Photo