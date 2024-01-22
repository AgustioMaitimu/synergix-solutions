import React from 'react';
import logo from '../assets/logo.svg';

export default function AppCallToAction() {
  return (
    <div className="lg:bg-action-image -mt-20 flex h-56 w-[90vw] flex-col items-center justify-center gap-4 bg-gray-200 bg-cover bg-center py-2 lg:flex-row lg:justify-evenly">
      <h1 className="font-bold text-blue-600 lg:text-xl">
        SYNERGIX <span className="font-light text-black">Solutions</span>
      </h1>
      <div className="flex flex-col gap-4">
        <h2 className="text-center text-xs font-bold lg:text-base">
          Elevate Your Potential with Synergix Solutions
        </h2>
        <h3 className="w-[75vw] text-center text-xs lg:w-[40vw] lg:text-base">
          Experience seamless collaboration, heightened productivity, and
          innovative solutions. Unleash the power of Synergix products to
          transform the way you work.
          <span className="font-bold"> Get started today!</span>
        </h3>
      </div>
      <button className="flex items-center justify-center rounded-sm bg-blue-600 px-6 py-1 text-sm font-semibold text-white lg:rounded lg:px-10 lg:py-3">
        Try Now
      </button>
    </div>
  );
}
