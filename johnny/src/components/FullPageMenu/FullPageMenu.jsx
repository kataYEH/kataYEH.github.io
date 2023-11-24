import React, { useState } from 'react'
import './FullPageMenu.css'
import CloseButton from './CloseButton';
import MenuList from './MenuList';

const FullPageMenu = ({ ToggleFullMenu ,setShowingPage, menuList, scrollToPage}) => {
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);

  const handleCloseMenu = () => {
    // 切换动画状态
    setIsAnimatingOut(true);
    setTimeout(() => {
      setIsAnimatingOut(false);
      ToggleFullMenu(prev => !prev);
    }, 500); 

  };



  console.log(ToggleFullMenu)

  return (
    <main className={`FullPageMenu animate__animated ${isAnimatingOut ? 'animate__fadeOutTopLeft' : 'animate__fadeInTopLeft'}`}>
      <CloseButton handleCloseMenu={handleCloseMenu} />
      <MenuList 
        setShowingPage={setShowingPage} 
        handleCloseMenu={handleCloseMenu} 
        menuList={menuList}
        scrollToPage = {scrollToPage}
      />
    </main>
  );
}

export default FullPageMenu;
