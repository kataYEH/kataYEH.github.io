import React, { useState } from 'react'
import "./Experiences.css"
import ExpContainer from './ExpContainer'

import PEGA_Image from '../images/PEGA.png';
import ThreeSchool from '../images/threeSchool.png';
import AA702_1 from '../images/AA702-1.png';

import PEGA from './Exp_Detail/PEGA';

const Experiences = () => {
    const [myExperience, setMyExperience] = useState([
        {
            BelongTo: {
                type: "componey",
                name: "PEGATRONCORP"
            },
            Position: {
                name: "Software Engineer"
            },
            Infomation: {
                name: "2021/09 - Now",
                img: PEGA_Image
            },
            Content: {
                name:[ `Dedicated to developing an 'Automated Production Line AIoT Integration System,' 
                    providing real-time production line insights and issue analysis. 
                    I also developed ancillary systems such as 'Remote Deployment' and 'Electronic SOP from Paper,' 
                    successfully operational in factories located in Shanghai, Suzhou, and Mexico.`
                    ,
                    `My primary responsibilities encompass front-end web design, 
                    Python back-end system development, and supporting Microservice tasks. 
                    All application services undergo docker containerization, 
                    ensuring their independence and portability for swift deployment across various factory zones. 
                    Additionally, I assist in gathering IoT device data to optimize production capacity, 
                    manufacturing metrics, and machinery analysis, primarily managing data through the MongoDB database.`
                
                ]

            },
            Detail:<PEGA />
        },
        {
            BelongTo: {
                type: "school",
                name: "新北市立三峽國中"
            },
            Position: {
                name: "Computer Science Teacher"
            },
            Infomation: {
                name: "2021/09 - 2023/07",
                img: ThreeSchool
            },
            Content: {
                name: [`I served as an information technology teacher for seventh and eighth-grade gifted students. 
                My teaching curriculum comprised Python programming, 
                app development, and integrating MicroBit with robotics.`
                ,
                `Sharing knowledge is a joyful endeavor. I transformed my knowledge and problem-solving experiences into engaging stories and courses, sharing them with my students. 
                My goal was to instill a joyful approach to learning programming languages and aspire to become their guide in the world of coding.`]
            },
            Detail:"新北市立三峽國中"
        },
        {
            BelongTo: {
                type: "school",
                name: "MinChuan University - Robotics Research Center"
            },
            Position: {
                name: "Captain of a Soccer Robot Team"
            },
            Infomation: {
                name: "2017/09 - 2019/07",
                img: AA702_1
            },
            Content: {
                name: [`Participated in the school-level Robotics Research Center, 
                leading a team representing the school in national and international robotics competitions. 
                Won the championship in the 2018 Three-on-Three Medium-Sized Soccer Robot Competition, 
                and had the honor of representing the school for media interviews.`
                ,
                `During competitions, the most challenging aspects were quick reflexes and crisis management. 
                I accumulated experience in problem-solving and handling situations on the spot. 
                Additionally, being the team captain, 
                I learned extensively about delegation, team training, and effective communication within a group.`]
            },
            Detail:"MinChuan University - Robotics Research Center"
        }
    ])

    const tags = ['software engineer', 'front-end', 'back-end', 'IoT', 'Soccer Robot','Team leader'];
    return (
        <main className='Experiences' id="Experiences">
            <h1>Experiences</h1>
            <div className='Experiences-Tags'>
                {tags.map((tag, index) => (
                    <li className='Tag' key={index}>
                        <a>{tag}</a>
                    </li>
                ))}
            </div>
            {myExperience.map((item, index) => (
                <ExpContainer
                    BelongTo={item.BelongTo}
                    Position={item.Position}
                    Infomation={item.Infomation}
                    Content={item.Content}
                    Detail={item.Detail}
                />
            ))}


        </main>
    )
}

export default Experiences