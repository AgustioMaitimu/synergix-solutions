import React from 'react';
import logo from '../assets/logo.svg';
import apple from '../assets/icons/apple.svg';
import github from '../assets/icons/github.svg';
import slack from '../assets/icons/slack.svg';
import google from '../assets/icons/google.svg';
import microsoft from '../assets/icons/microsoft.svg';

export default function SignIn() {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div
      id="signin"
      className="bg-sign-in font-generic flex h-screen w-screen items-center justify-center bg-cover bg-center"
    >
      <div
        id="signin-container"
        className="all-around-shadow flex h-full w-full flex-col items-center justify-center rounded bg-white py-12 md:h-fit md:w-fit md:px-14"
      >
        <div
          id="signin-top"
          className="flex flex-col items-center justify-center gap-6"
        >
          <div id="appheader-logo" className="flex items-center gap-2">
            <img src={logo} alt="" className="h-8" />
            <h1 className="font-generic text-3xl font-bold text-blue-600">
              SYNERGIX
            </h1>
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            <h1 className="font-semibold">Log in to continue</h1>
            <form action="" className="flex flex-col items-center gap-2">
              <input
                className="h-12 w-80 rounded border-2 border-gray-300 pl-2"
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
              ></input>
              <button
                onClick={handleSubmit}
                className="h-12 w-80 rounded bg-blue-600 text-white hover:bg-blue-500"
              >
                Continue
              </button>
            </form>
          </div>
          <div className="flex flex-col items-center justify-center gap-5">
            <h2 className="text-sm font-semibold text-gray-500">
              Or continue with:
            </h2>
            <div className="flex flex-col items-center gap-4 font-semibold text-gray-600">
              <button className="flex h-12 w-80 items-center justify-center gap-2 rounded border-[1px] border-gray-400">
                <img src={google} alt="" className="h-8" /> Google
              </button>
              <button className="flex h-12 w-80 items-center justify-center gap-2 rounded border-[1px] border-gray-400">
                <img src={apple} alt="" className="h-8" /> Apple
              </button>
              <button className="flex h-12 w-80 items-center justify-center gap-2 rounded border-[1px] border-gray-400">
                <img src={microsoft} alt="" className="h-8" /> Microsoft
              </button>
              <button className="flex h-12 w-80 items-center justify-center gap-2 rounded border-[1px] border-gray-400">
                <img src={github} alt="" className="h-8" /> Github
              </button>
              <button className="flex h-12 w-80 items-center justify-center gap-2 rounded border-[1px] border-gray-400">
                <img src={slack} alt="" className="h-8" /> Slack
              </button>
            </div>
          </div>
          <div className="flex gap-2">
            <p className="cursor-pointer text-sm text-blue-600 hover:underline">
              Can't log in?
            </p>
            <p className="text-gray-500">•</p>
            <p className="cursor-pointer text-sm text-blue-600 hover:underline">
              Create an account
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
