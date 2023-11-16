import React from 'react'

const Fotter = () => {
    const today = new Date()
  return (
    <fotter>
        {/* <a>Copyright &copy; {today.getFullYear()}</a> */}
        <p style={{width:"100%",textAlign:"center"}}>This website is developed using React | &copy; 2023 Johnny Yeh</p>
    </fotter>
  )
}

export default Fotter