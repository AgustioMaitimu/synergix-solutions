import React from 'react';
import AppServicesSect from './AppServicesSect';
import company1 from '../assets/icons/company-1.svg';
import company2 from '../assets/icons/company-2.svg';
import company3 from '../assets/icons/company-3.svg';
import company4 from '../assets/icons/company-4.svg';
import arrow from '../assets/miscs/right-arrow-blue.png';

export default function AppServices() {
  const [selectedServices, setSelectedServices] = React.useState(
    'Organizational Productivity',
  );

  function servicePick(e) {
    for (let child of e.target.parentElement.children) {
      child.style.backgroundColor = 'rgb(219, 234, 254)';
    }
    for (let child of e.target.parentElement.children) {
      child.style.color = 'rgb(29, 78, 216)';
    }
    e.target.style.backgroundColor = 'rgb(29, 78, 216)';
    e.target.style.color = 'white';
    setSelectedServices(e.target.innerHTML);
  }

  return (
    <div className="mt-16 flex flex-col items-center justify-center">
      <div className="mb-6 w-[80vw] text-center font-generic text-xl font-semibold text-blue-900 lg:mb-10">
        Synergix Products are Tailored for Every Work Dimension
      </div>
      <select
        onChange={(e) => setSelectedServices(e.target.value)}
        name="cars"
        id="cars"
        className="w-[80vw] rounded-full border-r-[1.5rem] border-blue-600 bg-blue-600 px-6 py-4 text-white lg:hidden"
      >
        <option value="Organizational Productivity">
          Organizational Productivity
        </option>
        <option value="IT Solutions and Support">
          IT Solutions and Support
        </option>
        <option value="Collaboration Services">Collaboration Services</option>
      </select>
      <div className="hidden gap-20 lg:flex">
        <button
          onClick={servicePick}
          className="rounded-full bg-blue-600 px-10 py-6 text-lg font-bold text-white  transition-all duration-200"
        >
          Organizational Productivity
        </button>
        <button
          onClick={servicePick}
          className="rounded-full bg-blue-100 px-10 py-4 text-lg font-bold text-blue-700  transition-all duration-200"
        >
          IT Solutions and Support
        </button>
        <button
          onClick={servicePick}
          className="rounded-full bg-blue-100 px-10 py-4 text-lg  font-bold text-blue-700 transition-all duration-200"
        >
          Collaboration Services
        </button>
      </div>
      <AppServicesSect service={selectedServices} />
      <div className="companies-gradient w-full">
        <h1 className="px-6 text-center font-medium md:text-lg">
          Join the 250,000+ companies that use our software to power team
          collaboration
          <p className="mt-4 cursor-pointer self-start pl-8 text-blue-600 hover:underline">
            See all customers
            <img src={arrow} alt="" className="inline h-6 cursor-pointer" />
          </p>
        </h1>
        <div className="flex items-center justify-evenly py-16">
          <img src={company4} alt="" className="w-[20vw] md:w-[10vw] " />
          <img src={company3} alt="" className="w-[20vw] md:w-[10vw] " />
          <img src={company2} alt="" className="w-[20vw] md:w-[10vw] " />
          <img src={company1} alt="" className="w-[20vw] md:w-[10vw] " />
        </div>
      </div>
    </div>
  );
}
