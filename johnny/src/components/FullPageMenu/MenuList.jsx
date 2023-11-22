import React from 'react'
import "./MenuList.css"
import GlitchText from './GlitchText'
import BubbleButton from './BubbleButton'

const MenuList = ({ setShowingPage, handleCloseMenu, menuList }) => {
    console.log(menuList)
    const handleShowing = (item) => {
        // 切换动画状态
        setShowingPage(item)
    };
    return (
        <main className='MenuList'>
            {/* {menuList.map((itemName, index) => (
                <GlitchText
                    key={index} // 確保每個元素都有唯一的 key
                    itemName={itemName}
                    handleShowing={handleShowing}
                    handleCloseMenu={handleCloseMenu}
                />
            ))} */}

            {menuList.map((itemName, index) => (
                <BubbleButton
                    key={index} // 確保每個元素都有唯一的 key
                    itemName={itemName}
                    handleShowing={handleShowing}
                    handleCloseMenu={handleCloseMenu}
                />
            ))}
        </main>
    )
}

export default MenuList