import React, { useState } from 'react'

import "./Homepage.css"
import Homepage_Image from '../images/avatar-cartoon.png';
import KnowMe from './KnowMe';
import KnowMeDetail from './KnowMeDetail';


const Homepage = () => {

   const [myDeatilInfo, setMyDeatilInfo] = useState("none")

   return (
      <main className="Homepage">
         <div className="Homepage-Content">
            <div className="Homepage-MyInfo">
               <p className="Homepage-Title-Mid">Hi, I'm</p>
               <h2 className="Homepage-Title-Big">Johnny Yeh</h2>
               <p className="Homepage-Title-Mid" style={{opacity:0.6}}>Software Engineer</p>
               <a className="Homepage-Description">
                  2 years Front-end and back-end web application development.
               </a>
               <KnowMe myDeatilInfo={myDeatilInfo} setMyDeatilInfo={setMyDeatilInfo}/>
               {(myDeatilInfo !== "none") && (<KnowMeDetail myDeatilInfo={myDeatilInfo} />)}
            </div>
            <figure className="Homepage-Image">
               <img
                  src={Homepage_Image}
                  alt=""
               />
            </figure>
         </div>
      </main>

   )
}

export default Homepage