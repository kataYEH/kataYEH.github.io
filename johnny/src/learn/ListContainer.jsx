import React from 'react'
import ListItem from './ListItem'

const ListContainer = ( {actionList,handleCheck,deleteItem} ) => {
  return (
    <main>
        {
            actionList.length === 0 ? (
                <h1>No Items</h1>
                ) : (
                    actionList.map((item)=>(
                        <ListItem 
                            key={item.item+item.id}
                            item = {item}
                            handleCheck = {handleCheck}
                            deleteItem = {deleteItem}
                        />
                    ))
                )
        }
        
    </main>
  )
}

export default ListContainer