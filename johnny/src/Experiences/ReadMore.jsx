import React from 'react'
import "./ReadMore.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fas, fab)

const ReadMore = ({handleClick}) => {
    return (
        <a class="link" onClick={handleClick}>
            <span class="mask">
                <div class="link-container">
                    <span class="link-title1 title">Read more</span>
                    <span class="link-title2 title">READ MORE</span>
                </div>
            </span>
            <div class="link-icon">
            <FontAwesomeIcon icon="fa-brands fa-readme" className='icon'/>
            <FontAwesomeIcon icon="fa-solid fa-right-long" className='icon'/>

            </div>
        </a>
    )
}

export default ReadMore