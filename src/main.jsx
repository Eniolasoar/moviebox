import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header.jsx';
import NavBar from './components/NavBar.jsx';
import MainContent from "./components/MainContent.jsx";
import './index.css';
import Footer from './components/Footer.jsx';
import MovieDetails from './components/MovieDetails.jsx';
import Search from './components/Search.jsx';
import Layout from './components/Layout.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeLoader from './components/HomeLoader.jsx';
import { useState } from 'react';
import { GlobalProvider, useGlobalContext } from '../GlobalProvider';

import { HomeLayout } from './components/HomeLayout.jsx';

const App = () => {
  return (
    <GlobalProvider>
    <Router>
      <Routes>
        <Route path="/" element={<HomeLayout />} />


        <Route path="/movies/:id" element={<MovieDetails />} />
        <Route path='/search/:query' element={<Search />} />
      </Routes>
    </Router>
    </GlobalProvider>
  );
};

export default App;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
