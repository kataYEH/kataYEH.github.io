import Homepage from './homepage/homepage';
import NavBar from './components/NavBar/NavBar';
import Fotter from './components/Fotter';
import FullPageMenu from './components/FullPageMenu/FullPageMenu';
import AboutMe from './AboutMe/AboutMe';
import HW1Content from './HW1/HW1Content';



import { useState } from 'react';



// Learn
import Content from './learn/Content';

function App() {
const menuList = ["Home","About Me","Skills","Contact"]
const [displayFullPageMenu, ToggleFullMenu] = useState(false)
const [showingPage, setShowingPage] = useState("Home")


return (
    <div className="App">
      { displayFullPageMenu && <FullPageMenu 
          ToggleFullMenu={ToggleFullMenu} 
          setShowingPage={setShowingPage} 
          menuList={menuList}
        />  
      }
      <NavBar 
        ToggleFullMenu={ToggleFullMenu} 
        menuList={menuList} 
        setShowingPage={setShowingPage}
      />
      <Homepage />
      <AboutMe />
      {/* {showingPage === "Home" && <Homepage />} */}
      {/* {showingPage === "About Me" && <AboutMe />} */}
      {/* <Content /> */}
      {/* <HW1Content /> */}
      {/* <Fotter /> */}
    </div>
  );
}

export default App;
