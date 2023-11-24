import React from 'react'
import "./ExpContainer.css"
// Icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import PEGA from '../images/PEGA.png';
library.add(fas, fab)

const ExpContainer = ({BelongTo,Position,Infomation,Content}) => {
    let iconToShow;

    if (BelongTo.type === 'componey') {
        iconToShow =  <FontAwesomeIcon icon="fa-solid fa-building" className='Exp-TypeIcon'/>
    } else if (BelongTo.type === 'school') {
        iconToShow = <FontAwesomeIcon icon="fa-solid fa-school" className='Exp-TypeIcon'/>
    } else if (BelongTo.type === 'store') {
        iconToShow = <FontAwesomeIcon icon="fa-solid fa-store" className='Exp-TypeIcon'/>
    } else {
        // 預設顯示的圖示，可依需求修改
        iconToShow =  <FontAwesomeIcon icon="fa-solid fa-house" className='Exp-TypeIcon'/>
    }


    return (
        <main className='ExpContainer'>
            <top className="Exp-top">
                <div className='Exp-BelongTo'>
                    {iconToShow}
                    <p className='Exp-TypeName'>{BelongTo.name}</p>
                </div>
                <div className='Exp-Position'>
                    <p className='Exp-PositionName'>{Position.name}</p>
                </div>

            </top>
            <buttom className="Exp-buttom">
                <div className='Exp-Infomation'>
                    <p className='Exp-Time'>{Infomation.name}</p>
                    <img
                    src={Infomation.img}
                    alt=""
                />
                </div>
                <div className='Exp-Content'>
                    <p>{Content.name}</p>

                </div>
            </buttom>
        </main>
    )
}

export default ExpContainer