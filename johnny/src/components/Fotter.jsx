import React from 'react'

const Fotter = () => {
    const today = new Date()
  return (
    <fotter>
        <a>Copyright &copy; {today.getFullYear()}</a>
    </fotter>
  )
}

export default Fotter