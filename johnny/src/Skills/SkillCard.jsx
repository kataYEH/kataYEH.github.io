import React from 'react'
import "./SkillCard.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fas, fab)



const SkillCard = ({cardIcon,cardTitle,cardTags,cardContents,color="var(--Blue)"}) => {
  return (
    <main className='SkillCard'>
        <div className='Card-Logo' style={{borderColor:color}}>
            <FontAwesomeIcon icon={cardIcon} className='Card-LogoIcon' style={{color:color}}/>
        </div>
        <div className='Card-Title'>
            <a>{cardTitle}</a>
        </div>  
        <div className='Card-Tags'>
            {
                cardTags.map((item)=>(<span>{item}</span>))
            }

        </div>  
        <div className='Card-Contents'>
            {
                cardContents.map((item)=>(
                    <li className='Card-List'>
                        <a className='List-Title'>{item.Title}</a>
                        <a className='List-Contents'>{item.Content}</a>
                    </li>
                ))
            }
        </div>
    </main>
  )
}

export default SkillCard