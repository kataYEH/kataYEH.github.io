import React from 'react'
import "./Homepage.css"
import Homepage_Image from '../images/avatar-cartoon.png';

const Homepage = () => {
  return (
<header class="Homepage">
   <div class="Homepage__content">
      <article class="Homepage__text">
         <p class="mainHeading__preTitle">Hi, I'm</p>
         <h2 class="mainHeading__title">Johnny Yeh</h2>
         <p class="mainHeading__description">
         "Hi, I'm Johnny, dedicated to developing AIoT integration systems for automated production lines and optimizing manufacturing processes globally."
         </p>
         {/* <button class="cta">know more</button> */}
      </article>

      <figure class="Homepage__image">
         <img
            src={Homepage_Image}
            alt=""
         />
      </figure>
   </div>
</header>

  )
}

export default Homepage