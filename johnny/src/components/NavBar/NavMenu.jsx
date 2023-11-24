import React from 'react'
import "./NavMenu.css"
const NavMenu = ({menuList}) => {
  return (
    <main className='NavMenu'>
        {menuList.map((item)=>(<a>{item}</a>))}
    </main>
  )
}

export default NavMenu