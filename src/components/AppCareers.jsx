import React from 'react';

export default function AppCareers() {
  return (
    <div className="flex w-screen flex-col items-center justify-center gap-3 bg-sign-in bg-cover bg-center py-32">
      <h1 className="font-gnome text-blue-600">CAREERS</h1>
      <h2 className="text-3xl font-bold text-gray-700">Join Our Journey</h2>
      <h3 className="mb-2 w-[70vw] text-center text-gray-600 md:w-[35vw] md:text-lg xl:w-[30mw]">
        Join our global team and be part of the Synergix Solutions journey.
        Together, let's create the future of collaboration and innovation."
      </h3>
      <button className="rounded bg-blue-600 px-5 py-[0.6rem] align-middle text-sm font-semibold text-white hover:bg-blue-900">
        Join the team
      </button>
    </div>
  );
}
