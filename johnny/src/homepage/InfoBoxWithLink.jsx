import React from 'react'
import "./InfoBoxWithLink.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
const InfoBoxWithLink = ({ infoValue }) => {
    const handleCopy = () => {
        window.open(infoValue, '_blank');

    };
    return (
        <main className='InfoBoxWithCopy'>
            <a>{infoValue}</a>
            <FontAwesomeIcon
                key={`${infoValue}-LinkButton`}
                icon="fa-solid fa-link"
                className='LinkButton'
                onClick={handleCopy}
            />
        </main>
    )
}

export default InfoBoxWithLink