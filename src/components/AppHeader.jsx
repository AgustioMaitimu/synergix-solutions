import React from 'react';
import AppMobileMenu from './AppMobileMenu';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';
import menu from '../assets/miscs/menu.svg';
import arrow from '../assets/miscs/down-arrow.svg';
import divider from '../assets/miscs/divider.svg';
import x from '../assets/miscs/x.png';

export default function AppHeader() {
  const appHeaderRef = React.useRef(null);
  const [menuOpened, setMenuOpened] = React.useState(false);

  function toggleMenu() {
    setMenuOpened(true);
  }

  function getMenuClose() {
    setMenuOpened(false);
  }

  return (
    <nav
      id="app-header"
      ref={appHeaderRef}
      className="flex w-full items-center justify-between p-4 font-generic lg:justify-around lg:p-6"
    >
      <div id="appheader-left-side" className="flex items-center gap-8">
        <div id="appheader-logo" className="flex gap-2">
          <img src={logo} alt="" className="h-8" />
          <h1 className="font-generic text-3xl font-bold text-blue-600">
            SYNERGIX
          </h1>
        </div>
        <ul className="hidden cursor-pointer gap-7 text-gray-700 lg:flex">
          <li className="flex items-center gap-2 rounded px-2 py-1 hover:bg-gray-200">
            Products <img src={arrow} alt="" className="h-6" />
          </li>
          <li className="flex items-center gap-2 rounded px-2 py-1 hover:bg-gray-200">
            Solutions <img src={arrow} alt="" className="h-6" />
          </li>
          <li className="flex items-center gap-2 rounded px-2 py-1 hover:bg-gray-200">
            Resources <img src={arrow} alt="" className="h-6" />
          </li>
        </ul>
      </div>
      <div id="appheader-right-side" className="flex items-center">
        <img
          src={menuOpened ? x : menu}
          alt=""
          className="h-8 lg:hidden"
          onClick={toggleMenu}
        />
        <button className="hidden rounded bg-blue-600 px-5 py-[0.35rem] align-middle text-sm font-semibold text-white hover:bg-blue-900 lg:block">
          Try Now
        </button>
        <img src={divider} alt="" className="hidden h-7 lg:block" />
        <Link to="/synergix-solutions/sign-in/">
          <button className="hidden text-sm font-semibold text-blue-600 lg:block">
            Sign In
          </button>
        </Link>
      </div>
      {menuOpened && <AppMobileMenu closeMenu={getMenuClose} />}
    </nav>
  );
}
