import data from '/src/data/data.json';
import { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import UserProfile from '../user-profile/UserProfile';

const Navbar = () => {
  const [isMenuActive, setMenuActive] = useState(false);
  const toggleMenuRef = useRef(null);
  const navbarMenuRef = useRef(null);
  const navlinkRef = useRef(null);

  const handleClickToggleMenu = () => {
    document.body.classList.toggle('overlay-active');
    navbarMenuRef.current.classList.toggle('active');
    setMenuActive(!isMenuActive);
  };

  useEffect(() => {
    const handleClickMenuOutside = (e) => {
      if ((!toggleMenuRef.current.contains(e.target) && !navbarMenuRef.current.contains(e.target)) || navlinkRef.current.contains(e.target)) {
        document.body.classList.remove('overlay-active');
        navbarMenuRef.current.classList.remove('active');
        setMenuActive(false);
      }
    };

    document.addEventListener('click', handleClickMenuOutside);

    return () => {
      document.removeEventListener('click', handleClickMenuOutside);
    };
  }, []);

  return (
    <>
      <div className="navbar-brand">
        <a href="https://dedi-indrawan.vercel.app/">
          <img src="../src/assets/logo.png" alt="logo" />
          <h1>Dedi Indrawan</h1>
        </a>

        <button className="toggle-menu" ref={toggleMenuRef} onClick={handleClickToggleMenu}>
          {!isMenuActive ? <FontAwesomeIcon icon={faBars} /> : <FontAwesomeIcon icon={faXmark} />}
        </button>
      </div>

      <div className="navbar-menu" ref={navbarMenuRef}>
        <ul className="navlink" ref={navlinkRef}>
          {data.navLinks.map((navLink) => (
            <li key={navLink.id}>
              <a href={navLink.path}>{navLink.page}</a>
            </li>
          ))}
        </ul>

        <div className="user-profile">
          <UserProfile />
        </div>
      </div>
    </>
  );
};

export default Navbar;
