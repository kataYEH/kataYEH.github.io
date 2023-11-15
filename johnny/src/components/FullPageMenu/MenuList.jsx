import React from 'react'
import "./MenuList.css"
import GlitchText from './GlitchText'


const MenuList = ({  setShowingPage ,handleCloseMenu ,menuList}) => {
    console.log(menuList)
    const handleShowing = (item) => {
        // 切换动画状态
        setShowingPage(item)
      };
    return (
        <main className='MenuList'>
             {menuList.map((itemName, index) => (
                <GlitchText
                key={index} // 確保每個元素都有唯一的 key
                itemName={itemName}
                handleShowing={handleShowing}
                handleCloseMenu={handleCloseMenu}
                />
            ))}
{/* 
            <GlitchText itemName="Home" handleShowing={handleShowing} handleCloseMenu={handleCloseMenu}/>
            <GlitchText itemName="My Job" handleShowing={handleShowing} handleCloseMenu={handleCloseMenu}/>
            <GlitchText itemName="Life" handleShowing={handleShowing} handleCloseMenu={handleCloseMenu}/>
            <GlitchText itemName="Side Project" handleShowing={handleShowing} handleCloseMenu={handleCloseMenu}/>
            <GlitchText itemName="Contect Me" handleShowing={handleShowing} handleCloseMenu={handleCloseMenu}/> */}

        </main>
    )
}

export default MenuList