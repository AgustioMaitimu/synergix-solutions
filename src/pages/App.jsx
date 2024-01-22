import React from 'react';
import AppHeader from '../components/AppHeader';
import AppTop from '../components/AppTop';
import AppServices from '../components/AppServices';
import AppCallToAction from '../components/AppCallToAction';
import AppNexus from '../components/AppNexus';
import AppCareers from '../components/AppCareers';
import AppFooter from '../components/AppFooter';

export default function App() {
  return (
    <div className="flex flex-col items-center">
      <AppHeader />
      <AppTop />
      <AppCallToAction />
      <AppServices />
      <AppNexus />
      <AppCareers />
      <AppFooter />
    </div>
  );
}
