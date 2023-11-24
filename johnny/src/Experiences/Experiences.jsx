import React, { useState } from 'react'
import "./Experiences.css"
import ExpContainer from './ExpContainer'
import PEGA from '../images/PEGA.png';
import ThreeSchool from '../images/threeSchool.png';

const Experiences = () => {
    const [myExperience, setMyExperience] = useState([
        {
            BelongTo: {
                type: "componey",
                name: "PEGATRONCORP"
            },
            Position: {
                name: "Sofeware Engineer"
            },
            Infomation: {
                name: "2023-09-01 - Now",
                img: PEGA
            },
            Content: {
                name: `Are you still looking for the best template to make an awesome self-introduction for college admission? 
                Look no further - this template has it all! 
                With a bright and colorful design, you can show off everything that makes you unique. 
                From your hobbies to your goals and experiences, 
                everything can be highlighted in this template. 
                Perfect for countries where the new semester starts in March, 
                put yourself out there and start building up your future with this template now!`

            }
        },
        {
            BelongTo: {
                type: "school",
                name: "新北市立三峽國中"
            },
            Position: {
                name: "Sofeware Engineer"
            },
            Infomation: {
                name: "2023-09-01 - Now",
                img: ""
            },
            Content: {
                name: `Are you still looking for the best template to make an awesome self-introduction for college admission? 
                Look no further - this template has it all! 
                With a bright and colorful design, you can show off everything that makes you unique. 
                From your hobbies to your goals and experiences, 
                everything can be highlighted in this template. 
                Perfect for countries where the new semester starts in March, 
                put yourself out there and start building up your future with this template now!`

            }
        }
    ])

    const tags = ['software engineer', 'front-end', 'back-end', 'IoT', 'Robot'];
    return (
        <main className='Experiences'>
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
                />
            ))}


        </main>
    )
}

export default Experiences