import React from 'react'
import "./NavMenu.css"
const NavMenu = ({menuList,setShowingPage,scrollToPage}) => {
  const handleShowing = (item) => {
    // 切换动画状态
    setShowingPage(item)
    scrollToPage(item)
};

  return (
    <main className='NavMenu'>
        {menuList.map((item)=>(<a onClick={()=>{
        handleShowing(item)
      }}>{item}</a>))}
    </main>
  )
}

export default NavMenu