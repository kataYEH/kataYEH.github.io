import React from 'react'
import "./TextContent.css"
import HT from './HT'
import InfoList from './InfoList'

const TextContent = () => {

  return (
    <div className='TextContent'>
        <h1 className='TextContent-Title'>About Me</h1>
        {/* <p className='TextContent-P'>
            <a className='blank'></a>
            嗨，我是<HT t="Johnny" />，
            是一位
            <HT t="軟體工程師"/>．
            我擁有兩年的前端和後端網頁設計的經驗．擅長
            <HT t ="Python"/>、
            <HT t ="Javascript"/>、
            <HT t ="JQuery"/>、
            <HT t ="React"/>
            等程式語言．
        </p> */}
        <p className='TextContent-P'>
            Hi, I'm <HT t="Johnny" />,
            a 
            <HT t=" software engineer"/>.
            Two years of experience in both front-end and back-end web development.
            Good at programming languages such as 
            <HT t =" Python"/>, 
            <HT t =" Javascript"/>, 
            <HT t =" HTML"/> and 
            <HT t =" CSS"/>
            
        </p>
        <p className='TextContent-P'>

            Over the past two years, 
            I've been dedicated to developing the company's 
            <HT t='" Automated Production Line AIoT Integration System"'/>. 
            Primarily responsible for web service application development and related microservices. 
            Currently, it's running smoothly in factories located in Shanghai, Suzhou, and Mexico.
        </p>
        {/* <p className='TextContent-P'>
            <a className='blank'></a>

            近兩年致力於公司的「
            <HT t="自動化產線AIoT虛實整合系統"/>
            」開發，
            是一個從零開始的專案，
            主要負責網頁服務應用程式開發以及相關的Microservices，
            目前穩定運行於上海、蘇州及墨西哥等工廠。
        </p> */}
        <InfoList/>
    </div>
  )
}

export default TextContent