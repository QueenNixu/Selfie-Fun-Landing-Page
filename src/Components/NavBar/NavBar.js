import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import "./NavBar.css";
import Dropdown from '../Dropdown/Dropdown';

const Navbar = () => {

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(false);
  const [dropdownMenu, setDropdownmenu] = useState(false);
  const location = useLocation();

  const handleClick = () => setClick(!click);
  
  const CloseMobileMenu = () => {
    setClick(false);
    setDropdownmenu(false);
  }

  const DropdownMenu = () => setDropdownmenu(!dropdownMenu);

  const showButton = () => {
    if(window.innerWidth<=960) {
      setButton(false);
    } else {
      setButton(true);
      setClick(false);
      setDropdownmenu(false);
    }
  };
  
  useEffect(() => {
    showButton();
    window.addEventListener('resize', showButton);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener('resize', showButton);
  }, []);

  const dropdownOptions = [
    { label: 'Espejo Magico', path: '/espejo_magico' },
    { label: 'Plataforma 360°', path: '/plataforma_360' },
    { label: 'Shimmer Wall', path: '/shimmer_wall' }
  ];

  return (
    <>
      <nav className="navbar">

        <div className='navbar-container'>

          <Link to="/" className='navbar-logo' onClick={CloseMobileMenu}>
            {/* <i className='fab fa-typo3'></i> */}
            <img src="/images/selfie-fun-logo-2.png" />
          </Link>

          <div className='menu-icon'>
            <i className={click ? "fas fa-times" : "fas fa-bars"} onClick={click ? CloseMobileMenu : handleClick}></i>
          </div>

          <ul className={click ? "nav-menu active" : "nav-menu"}>

            <li className='nav-item'>
              <Link to="/" className={`nav-links ${location.pathname === "/" ? "here" : ""}`} onClick={CloseMobileMenu}>
                Inicio
              </Link>
            </li>

            <li className='nav-item'>
              <Link 
                className={`servicios nav-links
                  ${location.pathname.startsWith("/servicios/espejo_magico") ||
                    location.pathname.startsWith("/servicios/plataforma_360") ||
                    location.pathname.startsWith("/servicios/shimmer_wall") 
                    ? "here" : ""}`} onClick={CloseMobileMenu && DropdownMenu}>
                Servicios <i className={`fa-solid fa-caret-${dropdownMenu ? "up" : "down"}`} style={{marginLeft: "5px"}}></i>
              </Link>
              <ul className={`${dropdownMenu ? 'dropdown-desktop dropdown-menu' : 'dropdown-menu'}`}>
                {dropdownMenu &&
                  <Dropdown
                  dropdownMenu={dropdownMenu}
                  pathOrigin={"/servicios"}
                  options={dropdownOptions}
                  onClick={DropdownMenu}
                />}
              </ul>
            </li>

            <ul className={`dropdown-mobile`}>
              {dropdownMenu &&
                <Dropdown
                pathOrigin={"/servicios"}
                dropdownMenu={dropdownMenu}
                options={dropdownOptions}
                onClick={CloseMobileMenu}
                fatherClass={"dropdown-mobile"}
              />}
            </ul>         

            <li className='nav-item'>
              <Link to="/contacto" className={`nav-links ${location.pathname === "/contacto" ? "here" : ""}`} onClick={CloseMobileMenu}>
                Contacto
              </Link>
            </li>

            <li className='nav-item'>
              <Link to="/acerca_de" className={`nav-links ${location.pathname === "/acerca_de" ? "here" : ""}`} onClick={CloseMobileMenu}>
                Acerca de
              </Link>
            </li>

          </ul>
        </div>

      </nav>
    </>
  );
};

export default Navbar;
