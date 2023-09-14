import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header.jsx'
import MainContent from "./components/MainContent.jsx"
import './index.css'
import Footer from './components/Footer.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <MainContent/>
    <Footer/>
    
  </React.StrictMode>,
)
