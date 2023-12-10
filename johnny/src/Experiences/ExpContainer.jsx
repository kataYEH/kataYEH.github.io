import React, { useState } from 'react';
import Modal from 'react-modal';

import "./ExpContainer.css"
import ReadMore from './ReadMore';
import CloseButton from './CloseButton';
// Icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fas, fab)

const ExpContainer = ({ BelongTo, Position, Infomation, Content, Detail}) => {
    Modal.setAppElement('#root');


    const [isModalOpen, setModalOpen] = useState(false);

    const handleButtonClick = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    let iconToShow;

    if (BelongTo.type === 'componey') {
        iconToShow = <FontAwesomeIcon icon="fa-solid fa-building" className='Exp-TypeIcon' />
    } else if (BelongTo.type === 'school') {
        iconToShow = <FontAwesomeIcon icon="fa-solid fa-school" className='Exp-TypeIcon' />
    } else if (BelongTo.type === 'store') {
        iconToShow = <FontAwesomeIcon icon="fa-solid fa-store" className='Exp-TypeIcon' />
    } else {
        // 預設顯示的圖示，可依需求修改
        iconToShow = <FontAwesomeIcon icon="fa-solid fa-house" className='Exp-TypeIcon' />
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
                    {Content.name.map(item => (<p>{item}</p>))}
                    <ReadMore handleClick={handleButtonClick} />
                </div>

            </buttom>
            

            <Modal
                isOpen={isModalOpen}
                onRequestClose={handleCloseModal}
                contentLabel="Example Modal"
                style={{
                    overlay: {
                      position: 'fixed',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      backgroundColor: 'rgba(0,0,0,.7)'
                    },
                    content: {
                      position: 'absolute',
                      top: '5rem',
                      left: '2rem',
                      right: '2rem',
                      bottom: '2rem',
                      border: '1px solid #ccc',
                      background: '#fff',
                      overflow: 'auto',
                      WebkitOverflowScrolling: 'touch',
                      borderRadius: '.5rem',
                      outline: 'none',
                      padding: '.5rem',
                      backgroundColor: '#e3edf7',                    
                      height: "fin-content"
                    }
                  }}
            >
                <div className='Exp-DetailDialog'>
                    <CloseButton handleClick={handleCloseModal}/>
                    {Detail}
                    <div className='DetailDialogContainer'>
                        
                    </div>
                </div>
            </Modal>

        </main>
    )
}

export default ExpContainer