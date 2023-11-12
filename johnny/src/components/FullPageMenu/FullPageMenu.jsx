import React, { useState } from 'react'
import './FullPageMenu.css'

const FullPageMenu = ({ ToggleFullMenu }) => {
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);

  const handleButtonClick = () => {
    // 切换动画状态
    setIsAnimatingOut(true);

    setTimeout(() => {
      setIsAnimatingOut(false);
      ToggleFullMenu(prev => !prev);
    }, 500); 

  };

  return (
    <main className={`FullPageMenu animate__animated ${isAnimatingOut ? 'animate__backOutLeft' : 'animate__backInLeft'}`}>
      <button onClick={handleButtonClick}>
        Close
      </button>
    </main>
  );
}

export default FullPageMenu;
