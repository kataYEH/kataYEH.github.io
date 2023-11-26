import React, { useState } from 'react'
import "./Skills.css"
import SkillCard from './SkillCard'
const Skills = () => {
    const [mySkills, setMySkills] = useState([
        {
            Color:"var(--Blue)",
            Icon: "fa-solid fa-code",
            Title: "Programming",
            Tags: ["JavaScript","Jquery","React","Python","Python Django","HTML","CSS"],
            Contents:[
                {
                    Title:"Jquery",
                    Content:"I've developed two frontend web services using jQuery."
                },
                {
                    Title:"React",
                    Content:"I've developed one frontend web services using jQuery."
                }
            ]
        },
        {
            Color:"var(--Green)",
            Icon: "fa-solid fa-code",
            Title: "Programming",
            Tags: ["JavaScript","Jquery","React","Python","Python Django","HTML","CSS"],
            Contents:[
                {
                    Title:"Jquery",
                    Content:"I've developed two frontend web services using jQuery."
                },
                {
                    Title:"React",
                    Content:"I've developed one frontend web services using jQuery."
                }
            ]
        }
    ])


  return (
    <main className='Skills' id='Skills'>
        {
            mySkills.map((item,index)=>(
                <SkillCard 
                    color={item.Color}
                    cardIcon = {item.Icon}
                    cardTitle = {item.Title}
                    cardTags = {item.Tags}
                    cardContents = {item.Contents}
                />
            ))
        }


    </main>
  )
}

export default Skills