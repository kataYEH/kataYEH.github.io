import React from 'react'
import "./FullPageDialog.css"
const FullPageDialog = () => {
    const [isAnimatingOut, setIsAnimatingOut] = useState(false);



  return (
    <dialog className={`FullPageDialog animate__animated ${isAnimatingOut ? 'animate__fadeOutTopLeft' : 'animate__fadeInTopLeft'}`}>

    </dialog>
  )
}

export default FullPageDialog