import FullPageMenu from './components/FullPageMenu/FullPageMenu';
import NavBar from './components/NavBar/NavBar';
import Homepage from './homepage/homepage';
import AboutMe from './AboutMe/AboutMe';
import Experiences from './Experiences/Experiences';

import Fotter from './components/Fotter';
import HW1Content from './HW1/HW1Content';

import { useState ,useRef} from 'react';





// Learn
import Content from './learn/Content';

function App() {
const menuList = ["Home","About Me","Experiences","Skills","Protfolio"]
const [displayFullPageMenu, ToggleFullMenu] = useState(false)
const [showingPage, setShowingPage] = useState("Home")



const scrollToPage = (item) => {
  let goingPage = document.getElementById(item)
  if(goingPage)
  {
    goingPage.scrollIntoView({ behavior: 'smooth' });
  }

};


return (
    <div className="App">
      { displayFullPageMenu && <FullPageMenu  
          ToggleFullMenu={ToggleFullMenu} 
          setShowingPage={setShowingPage} 
          menuList={menuList}
          scrollToPage = {scrollToPage}
        />  
      }
      <NavBar 
        ToggleFullMenu={ToggleFullMenu} 
        menuList={menuList} 
        setShowingPage={setShowingPage}
      />
      <Homepage />
      <AboutMe />
      <Experiences />

      {/* {showingPage === "Home" && <Homepage />} */}
      {/* {showingPage === "About Me" && <AboutMe />} */}
      {/* <Content /> */}
      {/* <HW1Content /> */}
      {/* <Fotter /> */}
    </div>
  );
}

export default App;
