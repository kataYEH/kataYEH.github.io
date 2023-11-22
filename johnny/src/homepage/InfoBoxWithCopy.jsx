import React from 'react'
import "./InfoBoxWithCopy.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

library.add(fas, fab)



const InfoBoxWithCopy = ({infoValue}) => {
    const handleCopy = () => {
        const textField = document.createElement('textarea');
        textField.innerText = infoValue;
        document.body.appendChild(textField);
        textField.select();
        document.execCommand('copy');
        textField.remove();



        toast.info('🦄 已複製到剪貼板！', {
            position: "bottom-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
          
      };

  return (
    <main className='InfoBoxWithCopy'>
        <a>{infoValue}</a>
        <FontAwesomeIcon 
            key={`${infoValue}-CopyButton`}
            icon="fa-solid fa-copy" 
            className='CopyButton' 
            onClick={handleCopy}
        />
        <ToastContainer />
    </main>
  )
}

export default InfoBoxWithCopy