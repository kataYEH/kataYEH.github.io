import React from 'react'
import "./KnowMe.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fas, fab)

const KnowMe = ({ myDeatilInfo, setMyDeatilInfo }) => {

    const handleMyDetailInfo = (infoName) => {
        setMyDeatilInfo(myDeatilInfo === infoName ? "none" : infoName);
    };
    const iconsInfo = [
        { id: 'Gmail', icon: "fa-solid fa-envelope", color: "#ea4236" },
        // { id: 'Phone', icon: "fa-solid fa-mobile-screen-button", color: "#2092ec" },
        // { id: 'Line', icon: "fa-brands fa-line", color: "#06c253" },
        { id: 'Bank104', icon: "fa-solid fa-building-columns", color: "#ffa74e" },
        { id: 'Linkedin', icon: "fa-brands fa-linkedin", color: "#0077b5" },
        { id: 'Github', icon: "fa-brands fa-github", color: "#000000" },
        { id: 'Discord', icon: "fa-brands fa-discord", color: "#5c6af3" },
    ];
    return (
        <main className='KnowMe'>
            {iconsInfo.map(({ id, icon, color }) => (
                <a 
                    key={id} 
                    className={`btn ${id === myDeatilInfo ? 'HightLight' : ''}`}
                    id={id} 
                    onClick={() => handleMyDetailInfo(id)}
                >
                    <FontAwesomeIcon icon={icon} style={{ color }} size="lg" />
                </a>
            ))}
        </main>

    )
}

export default KnowMe