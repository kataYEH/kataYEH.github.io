import React, { useState } from 'react'
import "./Skills.css"
import SkillCard from './SkillCard'
const Skills = () => {
    const [mySkills, setMySkills] = useState([
        {
            Color:"var(--Blue)",
            Icon: "fa-solid fa-code",
            Title: "Programming",
            Tags: ["JavaScript","Jquery","React","HTML","CSS","Python","Python Django","Python OpenCV"],
            Contents:[
                {
                    Title:"Jquery",
                    Content:"Created a website service showcasing real-time IoT data, along with another service dedicated to searching historical data and generating analytical charts."
                },
                {
                    Title:"React",
                    Content:"Designed an entry portal for an IoT system."
                },
                {
                    Title:"Django",
                    Content:"Developed the backend for an entry portal website for an IoT system and participated in maintaining backend systems for other websites."
                },
                {
                    Title:"Python OpenCV",
                    Content:"During my academic studies, my primary research focus was in AOI, predominantly utilizing Python with OpenCV."
                }
            ]
        },
        {
            Color:"var(--Green)",
            Icon: "fa-solid fa-toolbox",
            Title: "Tools",
            Tags: ["Git","Docker","Kafka","MQTT","Grafana","MongoDB"],
            Contents:[
                {
                    Title:"Git",
                    Content:"Utilizing Git for code version control and team collaboration."
                },
                {
                    Title:"Docker",
                    Content:"I containerized the developed application using Docker and deployed it onto various servers."
                },
                {
                    Title:"Kafka",
                    Content:"Utilized Kafka to integrate IoT data from production line devices into a web service."
                },
                {
                    Title:"MQTT",
                    Content:"Implementing communication between production line devices and an IoT-enabled urban environment using MQTT."
                },
                {
                    Title:"Grafana",
                    Content:"Created a dashboard in Grafana to monitor server performance and status."
                },
                {
                    Title:"MongoDB",
                    Content:"Designed and established the necessary database for the IoT system."
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