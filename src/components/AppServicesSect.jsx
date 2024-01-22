import React from 'react';
import organization from '../assets/illustrations/organization.png';
import collaboration from '../assets/illustrations/collaboration.png';
import support from '../assets/illustrations/support.png';
import arrow from '../assets/miscs/right-arrow-blue.png';
import CollaborateProSuite from '../assets/icons/collaborate-pro.png';
import TaskMasterPro from '../assets/icons/taskmaster-pro.png';
import EfficiencyAnalytics from '../assets/icons/efficiency-analytics.png';
import ServiceDeskCentral from '../assets/icons/servicedesk-central.png';
import TechGuardSecuritySuite from '../assets/icons/techguard-security-suite.png';
import SystemOpsPro from '../assets/icons/systemops-pro.png';
import CollaborateHub from '../assets/icons/collaborate-hub.png';
import InnovateHub from '../assets/icons/innovatehub.png';
import TeamFlow from '../assets/icons/teamflow.png';

export default function AppServicesSect({ service }) {
  return (
    <div className="mb-16 mt-20 flex w-screen flex-col items-center justify-center lg:px-32 xl:flex-row-reverse xl:justify-between 2xl:px-96">
      <img
        src={
          service == 'Organizational Productivity'
            ? organization
            : service == 'IT Solutions and Support'
              ? support
              : collaboration
        }
        className="mb-20 w-[70vw] md:w-[40vw] xl:w-[25vw] xl:pt-36"
      />
      <div className="w-fit">
        <h1 className="pl-8 pr-12 text-xl font-medium">
          {service == 'Organizational Productivity'
            ? 'Elevate Collaboration, Streamline Workflow and Unleash Productivity Potential'
            : service == 'IT Solutions and Support'
              ? 'Tech Excellence Meets Proactive Support and Fortify Your Digital Backbone'
              : 'Agile Transformation, Seamless Collaboration: Redefining Software Development'}
        </h1>
        <p className="mt-4 cursor-pointer self-start pl-8 text-blue-600 hover:underline">
          {service == 'Organizational Productivity'
            ? 'Unlock Seamless Workflows'
            : service == 'IT Solutions and Support'
              ? 'Deliver Reliable Services'
              : 'Ignite Creativity, Share Ideas'}
          <img src={arrow} alt="" className="inline h-6 cursor-pointer" />
        </p>
        {service == 'Organizational Productivity' && (
          <div className="mt-12 flex flex-col gap-10 pl-8 font-generic">
            <div className="flex gap-4">
              <img
                src={CollaborateProSuite}
                alt=""
                className="hover:all-around-shadow  h-[8.5vh] cursor-pointer rounded bg-gray-200 p-2 transition-all duration-200 hover:h-[9vh] hover:shadow-md"
              />
              <div className="flex flex-col justify-center gap-2">
                <h1 className="font-semibold">CollaboratePro Suite</h1>
                <p className="font-light">Unified Team Collaboration</p>
              </div>
            </div>
            <div className="flex gap-4">
              <img
                src={TaskMasterPro}
                alt=""
                className="hover:all-around-shadow  h-[8.5vh] cursor-pointer rounded bg-gray-200 p-2 transition-all duration-200 hover:h-[9vh] hover:shadow-md"
              />
              <div className="flex flex-col justify-center gap-2">
                <h1 className="font-semibold">TaskMaster Pro</h1>
                <p className="font-light">Efficient Task Automation</p>
              </div>
            </div>
            <div className="flex gap-4">
              <img
                src={EfficiencyAnalytics}
                alt=""
                className="hover:all-around-shadow  h-[8.5vh] cursor-pointer rounded bg-gray-200 p-2 transition-all duration-200 hover:h-[9vh] hover:shadow-md"
              />
              <div className="flex flex-col justify-center gap-2">
                <h1 className="font-semibold">Efficiency Analytics</h1>
                <p className="font-light">Data-Driven Productivity Insights</p>
              </div>
            </div>
          </div>
        )}
        {service == 'IT Solutions and Support' && (
          <div className="mt-12 flex flex-col gap-10 pl-8 font-generic">
            <div className="flex gap-4">
              <img
                src={ServiceDeskCentral}
                alt=""
                className="hover:all-around-shadow  h-[8.5vh] cursor-pointer rounded bg-gray-200 p-2 transition-all duration-200 hover:h-[9vh] hover:shadow-md"
              />
              <div className="flex flex-col justify-center gap-2">
                <h1 className="font-semibold">ServiceDesk Central</h1>
                <p className="font-light">IT Service Excellence</p>
              </div>
            </div>
            <div className="flex gap-4">
              <img
                src={TechGuardSecuritySuite}
                alt=""
                className="hover:all-around-shadow  h-[8.5vh] cursor-pointer rounded bg-gray-200 p-2 transition-all duration-200 hover:h-[9vh] hover:shadow-md"
              />
              <div className="flex flex-col justify-center gap-2">
                <h1 className="font-semibold">TechGuard Security Suite</h1>
                <p className="font-light">Comprehensive Cybersecurity</p>
              </div>
            </div>
            <div className="flex gap-4">
              <img
                src={SystemOpsPro}
                alt=""
                className="hover:all-around-shadow  h-[8.5vh] cursor-pointer rounded bg-gray-200 p-2 transition-all duration-200 hover:h-[9vh] hover:shadow-md"
              />
              <div className="flex flex-col justify-center gap-2">
                <h1 className="font-semibold">SystemOps Pro</h1>
                <p className="font-light">Automated System Maintenance</p>
              </div>
            </div>
          </div>
        )}
        {service == 'Collaboration Services' && (
          <div className="mt-12 flex flex-col gap-10 pl-8 font-generic">
            <div className="flex gap-4">
              <img
                src={CollaborateHub}
                alt=""
                className="hover:all-around-shadow  h-[8.5vh] cursor-pointer rounded bg-gray-200 p-2 transition-all duration-200 hover:h-[9vh] hover:shadow-md"
              />
              <div className="flex flex-col justify-center gap-2">
                <h1 className="font-semibold">CollaborateHub</h1>
                <p className="font-light">Real-Time Team Collaboration</p>
              </div>
            </div>
            <div className="flex gap-4">
              <img
                src={InnovateHub}
                alt=""
                className="hover:all-around-shadow  h-[8.5vh] cursor-pointer rounded bg-gray-200 p-2 transition-all duration-200 hover:h-[9vh] hover:shadow-md"
              />
              <div className="flex flex-col justify-center gap-2">
                <h1 className="font-semibold">InnovateHub</h1>
                <p className="font-light">Inspiring Innovation Culture</p>
              </div>
            </div>
            <div className="flex gap-4">
              <img
                src={TeamFlow}
                alt=""
                className="hover:all-around-shadow  h-[8.5vh] cursor-pointer rounded bg-gray-200 p-2 transition-all duration-200 hover:h-[9vh] hover:shadow-md"
              />
              <div className="flex flex-col justify-center gap-2">
                <h1 className="font-semibold">TeamFlow</h1>
                <p className="font-light">Effortless Team Coordination</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
