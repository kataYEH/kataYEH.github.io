import Homepage from './homepage/homepage';
import NavBar from './components/NavBar/NavBar';
import Fotter from './components/Fotter';
import FullPageMenu from './components/FullPageMenu/FullPageMenu';
import { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa'

function App() {

  const [displayFullPageMenu, ToggleFullMenu] = useState(false)
  const [count, setCount] = useState(0)
  const [TestArray, setTestArray] = useState([
    {
      id:"1",
      checked:false,
      item:"Item 1"
    },
    {
      id:"2",
      checked:true,
      item:"Item 2"
    },
    {
      id:"3",
      checked:false,
      item:"Item 3"
    }
  ])


  const checkState = (id) => {
    const listitem = TestArray.map((item) => 
      {
        return item.id === id ? {...item,checked: !item.checked} : item
      }
    )
    console.log(listitem)
    setTestArray(listitem)
  }
  const deleteItem = (id) => {
    const listitem = TestArray.filter((item) => 
      {
        return item.id !== id 
      }
    )
    console.log(listitem)
    setTestArray(listitem)
  }

  return (
    <div className="App">
      { displayFullPageMenu && <FullPageMenu/ >  }
      <NavBar ToggleFullMenu={ToggleFullMenu}/>

      <div>
        <ul>
          {
            TestArray.map((item) => (
              <li className='list' key={item.id}>
                <input type='checkbox' checked={item.checked} onChange={()=>checkState(item.id)}/>
                <a 
                  onClick={()=>checkState(item.id)}
                  style={(item.checked) ? {textDecoration:"line-through"} : {textDecoration:"none"} }
                >
                  {item.item}
                </a>
                <FaTrashAlt className='FaIcon' onClick={()=>deleteItem(item.id)} role="button" tabIndex="0"/>
              </li>
            ))}
        </ul>


      </div>
      
    </div>
  );
}

export default App;
