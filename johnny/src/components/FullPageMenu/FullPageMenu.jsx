import React, { useState } from 'react'
import './FullPageMenu.css'
import CloseButton from './CloseButton';
import MenuList from './MenuList';

const FullPageMenu = ({ ToggleFullMenu ,setShowingPage}) => {
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);

  const handleButtonClick = () => {
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
      <CloseButton handleButtonClick={handleButtonClick} />
      <MenuList setShowingPage={setShowingPage}/>
    </main>
  );
}

export default FullPageMenu;
