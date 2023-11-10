import './NavBar.css';
import Text3D from '../Text3D/Text3D';


function NavBar({ToggleFullMenu}) {



  return (
    <main className='NavBar'>
      <Text3D ToggleFullMenu={ToggleFullMenu}  name="Johnny Yeh"/>
      <div className='Meun'></div>
    </main>
  );
}

export default NavBar;
