import React from 'react';
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

// Create a separate layout component for the home page
const HomeLayout = () => (
  <>
    
    <NavBar/>
    <Header/>
      <MainContent />
      <Footer />
  
  </>
);

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeLayout />} />


        <Route path="/movies/:id" element={<MovieDetails />} />
        <Route path='/search/:query' element={<Search />} />
      </Routes>
    </Router>
  );
};

export default App;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
