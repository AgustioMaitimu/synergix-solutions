import React from 'react';

export default function AppTop() {
  return (
    <div className="flex h-fit w-screen items-center justify-center bg-main-image bg-cover bg-center pb-36 pt-16 md:h-[60vh]">
      <div className="flex h-fit w-full flex-col items-center justify-center gap-6 bg-blue-600 py-10 text-white opacity-90 md:w-fit md:gap-16 md:px-10 md:py-14">
        <h1 className="font-generic text-3xl font-bold md:text-6xl">
          Innovate Together
        </h1>
        <p className="w-60 text-center text-lg font-medium md:w-96 md:text-2xl">
          Unleashing Possibilities Through Technological Synergy.
        </p>
      </div>
    </div>
  );
}
