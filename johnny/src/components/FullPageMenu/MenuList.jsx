import React from 'react'
import "./MenuList.css"
import GlitchText from './GlitchText'


const MenuList = ({  setShowingPage }) => {
    const handleShowing = (item) => {
        // 切换动画状态
        setShowingPage(item)
      };
    return (
        <main className='MenuList'>
            <GlitchText itemName="Home" handleShowing={handleShowing} />
            <GlitchText itemName="My Job" handleShowing={handleShowing}/>
            <GlitchText itemName="Life" handleShowing={handleShowing} />
            <GlitchText itemName="Side Project" handleShowing={handleShowing} />
            <GlitchText itemName="Contect Me" handleShowing={handleShowing}/>

        </main>
    )
}

export default MenuList