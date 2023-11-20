import React, { useState } from 'react'

import "./Homepage.css"
import Homepage_Image from '../images/avatar-cartoon.png';
import KnowMe from './KnowMe';
import KnowMeDetail from './KnowMeDetail';


const Homepage = () => {

   const [myDeatilInfo, setMyDeatilInfo] = useState("none")

   return (
      <header className="Homepage">
         <div className="Homepage__content">
            <article className="Homepage__text">
               <p className="mainHeading__preTitle">Hi, I'm</p>
               <h2 className="mainHeading__title">Johnny Yeh</h2>
               <a className="mainHeading__description">
                  Software Engineer,<br></br>2 years Front-end and back-end web application development.
               </a>
               <KnowMe myDeatilInfo={myDeatilInfo} setMyDeatilInfo={setMyDeatilInfo}/>
               {(myDeatilInfo !== "none") && (<KnowMeDetail myDeatilInfo={myDeatilInfo} />)}
               {/* <KnowMeDetail myDeatilInfo={myDeatilInfo}/> */}
               {/* <button class="cta">know more</button> */}
            </article>

            <figure className="Homepage__image">
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