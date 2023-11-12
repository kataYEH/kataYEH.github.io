import React from 'react'
import ListContainer from './ListContainer'
import AddItem from './AddItem';
import Search from './Search';
import { useState } from 'react';



const Content = () => {
    const storgeList = JSON.parse(localStorage.getItem("actionList"))

    const [actionList, setactionList] = useState(storgeList === null ? [] : storgeList)
    const setAdnSaveActionList = (newList) => {
        setactionList(newList)
        localStorage.setItem("actionList",JSON.stringify(newList))
    }
    const handleCheck = (id) => {
        const itemLists = actionList.map((item) => 
          {
            return item.id === id ? {...item,checked: !item.checked} : item
          }
        )
        setactionList(itemLists)
        setAdnSaveActionList(itemLists)
    }
    const deleteItem = (id) => {
        const itemLists = actionList.filter((item) => 
          {
            return item.id !== id 
          }
        )
        setactionList(itemLists)
        setAdnSaveActionList(itemLists)
    }
    const [newItem , setNewItem] = useState("")   
    const addItem = (item) => {
        const id = actionList.length ? actionList[actionList.length -1].id + 1 : 1
        const addNewIten = {
            id:id,
            ckeck:false,
            item
        }
        const itemLists = [...actionList, addNewIten]
        setactionList(itemLists)
        setAdnSaveActionList(itemLists)
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        if (!newItem) return
        console.log("submitted")
        addItem(newItem)
        setNewItem('')
    }
    const [search , setSearch] = useState("")

  return (
    <main>
        <Search
            search = {search}
            setSearch = {setSearch}
        />
        <AddItem 
            newItem = {newItem}
            setNewItem = {setNewItem}
            handleSubmit = {handleSubmit}
        />
        <ListContainer 
            // actionList = {actionList}
            actionList={
                actionList.filter(item => (
                    (item.item).toLowerCase()).includes(search.toLowerCase())
                )
            }
            handleCheck = {handleCheck}
            deleteItem = {deleteItem}
        />
    </main>
  )
}

export default Content