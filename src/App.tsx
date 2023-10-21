import React from 'react';
import { Outlet } from 'react-router-dom';

import './App.scss';

import { Header } from './components/Header';
import { Footer } from './components/Footer';

const App = () => {
  return (
    <>
      <Header />

      <Outlet />

      <Footer />
    </>
  );
};

export default App;
