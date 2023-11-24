import './NavBar.css';
import Text3D from './Text3D/Text3D';
import 'animate.css';
import NavMenu from './NavMenu';

function NavBar({ToggleFullMenu,menuList}) {
  return (
    <main className='NavBar ' >
      <Text3D ToggleFullMenu={ToggleFullMenu} name="Johnny Yeh" />
      <NavMenu menuList={menuList}/>
    </main>
  );
}

export default NavBar;
