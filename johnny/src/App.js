import Homepage from './homepage/homepage';
import NavBar from './components/NavBar/NavBar';
import Fotter from './components/Fotter';


function App() {
  const MyName = "Johnny Yeh"



  return (
    <div className="App">
      <NavBar />
      <Homepage />
      <Fotter />
    </div>
  );
}

export default App;
