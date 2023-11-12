import React from 'react'
import { FaTrashAlt } from 'react-icons/fa'


const ListItem = ({item,handleCheck,deleteItem}) => {
  return (
    <li style={{display : "flex",margin:"1rem 2rem",alignItems:"center",gap:"1rem"}}>
        <input type='checkbox' checked={item.checked} onChange={()=>handleCheck(item.id)}/>
        <p 
            onClick={()=>handleCheck(item.id)}
            style={(item.checked) ? {textDecoration:"line-through",cursor:"pointer"} : {textDecoration:"none",cursor:"pointer"} }
        >
            {item.item}
        </p>
        <FaTrashAlt className='FaIcon' onClick={()=>deleteItem(item.id)} role="button" tabIndex="0" aria-label='Trash'/>

    </li>
  )
}

export default ListItem