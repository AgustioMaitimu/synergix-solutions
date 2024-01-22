import React from 'react';
import logo from '../assets/logo-gray.png';
import divider from '../assets/miscs/divider.svg';

export default function AppFooter() {
  return (
    <div className="w-screen">
      <div className="flex flex-col gap-9 border-b-[1px] border-gray-400 bg-gray-100 px-5 py-9 xl:flex-row xl:justify-evenly">
        <div className="flex items-center justify-center gap-1 xl:self-start">
          <img src={logo} alt="" className="h-6" />
          <h1 className="font-generic text-xl font-bold text-gray-600">
            SYNERGIX
          </h1>
        </div>
        <div className="flex justify-evenly gap-8 text-gray-600">
          <div>
            <h1 className="mb-4 cursor-pointer font-generic font-bold hover:underline">
              PRODUCTS
            </h1>
            <p className="mb-2 cursor-pointer text-sm hover:underline">
              CollaboratePro Suite
            </p>
            <p className="mb-2 cursor-pointer text-sm hover:underline">
              TaskMaster Pro
            </p>
            <p className="mb-2 cursor-pointer text-sm hover:underline">
              ServiceDesk Central
            </p>
            <p className="mb-2 cursor-pointer text-sm hover:underline">
              Techguard Security Suite
            </p>
            <p className="mb-4 cursor-pointer text-sm hover:underline">
              TeamFlow
            </p>
            <p className="cursor-pointer text-sm text-blue-500 hover:underline">
              View all products
            </p>
          </div>
          <div>
            <h1 className="mb-4 cursor-pointer font-generic font-bold hover:underline">
              RESOURCES
            </h1>
            <p className="mb-2 cursor-pointer text-sm hover:underline">
              Technical Support
            </p>
            <p className="mb-2 cursor-pointer text-sm hover:underline">
              Purchasing & Licensing
            </p>
            <p className="mb-2 cursor-pointer text-sm hover:underline">
              Synergix Community
            </p>
            <p className="mb-2 cursor-pointer text-sm hover:underline">
              Knowledge Base
            </p>
            <p className="mb-4 cursor-pointer text-sm hover:underline">
              Marketplace
            </p>
            <p className="cursor-pointer text-sm text-blue-500 hover:underline">
              Create support ticket
            </p>
          </div>
        </div>
        <div className="flex justify-evenly gap-8 text-gray-600">
          <div>
            <h1 className="mb-4 cursor-pointer font-generic font-bold hover:underline">
              EXPAND & LEARN
            </h1>
            <p className="mb-2 cursor-pointer text-sm hover:underline">
              Partners
            </p>
            <p className="mb-2 cursor-pointer text-sm hover:underline">
              Training & Certification
            </p>
            <p className="mb-2 cursor-pointer text-sm hover:underline">
              Documentation
            </p>
            <p className="mb-2 cursor-pointer text-sm hover:underline">
              Developer Resources
            </p>
            <p className="mb-4 cursor-pointer text-sm hover:underline">
              Enterprise Services
            </p>
            <p className="cursor-pointer text-sm text-blue-500 hover:underline">
              View all resources
            </p>
          </div>
          <div>
            <h1 className="mb-4 cursor-pointer font-generic font-bold hover:underline">
              ABOUT SYNERGIX
            </h1>
            <p className="mb-2 cursor-pointer text-sm hover:underline">
              Company
            </p>
            <p className="mb-2 cursor-pointer text-sm hover:underline">
              Careers
            </p>
            <p className="mb-2 cursor-pointer text-sm hover:underline">
              Events
            </p>
            <p className="mb-2 cursor-pointer text-sm hover:underline">Blogs</p>
            <p className="mb-4 cursor-pointer text-sm hover:underline">
              Trust & Security
            </p>
            <p className="cursor-pointer text-sm text-blue-500 hover:underline">
              Contact Us
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-3 bg-gray-100 text-sm text-gray-600 xl:self-end">
          <p className="cursor-pointer text-sm hover:underline">
            Privacy Policy
          </p>
          <img src={divider} alt="" className="h-6" />
          <p className="cursor-pointer text-sm hover:underline">Terms</p>
          <img src={divider} alt="" className="h-6" />
          <p className="cursor-pointer text-sm hover:underline">Impressum</p>
        </div>
      </div>
    </div>
  );
}
