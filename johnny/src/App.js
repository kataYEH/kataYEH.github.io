import Homepage from './homepage/homepage';
import NavBar from './components/NavBar/NavBar';
import Fotter from './components/Fotter';
import FullPageMenu from './components/FullPageMenu/FullPageMenu';
import HW1Content from './HW1/HW1Content';

import { useState } from 'react';



// Learn
import Content from './learn/Content';

function App() {

const [displayFullPageMenu, ToggleFullMenu] = useState(false)


return (
    <div className="App">
      { displayFullPageMenu && <FullPageMenu ToggleFullMenu={ToggleFullMenu} />  }
      <NavBar ToggleFullMenu={ToggleFullMenu}/>
      <Content />
      <HW1Content />
    </div>
  );
}

export default App;
