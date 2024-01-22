import React from 'react';
import { Link } from 'react-router-dom';
import arrow from '../assets/miscs/right-arrow.png';
import logo from '../assets/logo.svg';
import x from '../assets/miscs/x.png';

export default function AppMobileMenu(props) {
  return (
    <div
      className={`fixed left-0 top-0 z-50 flex h-screen w-screen flex-col border-t-2 bg-white`}
    >
      <div
        id="appheader-logo"
        className="flex items-center justify-between px-4 py-4"
      >
        <div className="flex gap-2">
          <img src={logo} alt="" className="h-8" />
          <h1 className="font-generic text-3xl font-bold text-blue-600">
            SYNERGIX
          </h1>
        </div>
        <img src={x} alt="" onClick={props.closeMenu} className="h-8" />
      </div>
      <div className="mt-2 flex items-center justify-between px-6">
        <button className="rounded bg-blue-600 px-5 py-[0.35rem] align-middle text-sm font-semibold text-white hover:bg-blue-900 md:block">
          Try Now
        </button>
        <Link to="/synergix-solutions/sign-in/">
          <button className="text-sm font-semibold text-blue-600 md:block">
            Sign In
          </button>
        </Link>
      </div>
      <ul className="mt-4 text-lg text-gray-600">
        <li className="flex items-center gap-6 border-b-[1px]  border-gray-400 px-5 py-3 ">
          Products <img src={arrow} alt="" className="flex h-3 items-center" />
        </li>
        <li className="flex items-center gap-6  border-b-[1px] border-gray-400 px-5 py-3 ">
          Solutions <img src={arrow} alt="" className="flex h-3 items-center" />
        </li>
        <li className="flex items-center gap-6  border-b-[1px] border-gray-400 px-5 py-3 ">
          Resources <img src={arrow} alt="" className="flex h-3 items-center" />
        </li>
      </ul>
    </div>
  );
}
