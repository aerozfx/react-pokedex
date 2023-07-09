import { slide as Menu } from "react-burger-menu";

import { Link } from "react-router-dom";

const Navbar = () => {

  let styles = {
    bmBurgerButton: {
      position: 'sticky',
      width: '36px',
      height: '30px',
      left: '36px',
      top: '0px'
    },
    bmBurgerBars: {
      background: '#373a47'
    },
    bmBurgerBarsHover: {
      background: '#a90000'
    },
    bmCrossButton: {
      height: '24px',
      width: '24px'
    },
    bmCross: {
      background: '#bdc3c7'
    },
    bmMenuWrap: {
      position: 'fixed',
      top: '0px',
      left: '0px',
      height: '100%'
    },
    bmMenu: {
      background: '#edf4ff',
      padding: '2.5em 1.5em 0',
      fontSize: '1.15em'
    },
    bmMorphShape: {
      fill: '#cddefa'
    },
    bmItemList: {
      color: '#cddefa',
      padding: '0.8em'
    },
    bmItem: {
      display: 'flex',
      flexDirection: 'column',
      color: "black"
    },
    bmOverlay: {
      top: '0px',
      background: 'rgba(0, 0, 0, 0.3)'
    }
  }
  return (
    <ul className="navbar">
      <Menu styles={styles}>
          <Link to="/">Home</Link>
          <Link to="/new">Añadir pokemon</Link>
          <Link to="/search">Buscar</Link>
      </Menu>
    </ul>
  );
};

export default Navbar;
