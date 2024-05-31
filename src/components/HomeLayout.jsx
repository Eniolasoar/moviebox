import React from 'react';
import { useGlobalContext } from '../../GlobalProvider';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';
import NavBar from './NavBar';
import HomeLoader from './HomeLoader';
import { useState,useEffect } from 'react';
// Create a separate layout component for the home page
export const HomeLayout = () => {
  // const { loaded } = useGlobalContext();  // Use the context values
  let API_KEY = "d6c287e55b74adf5812bec5fad23e8b0";
  let url = "https://api.themoviedb.org/3/movie/popular?api_key=" + API_KEY;
  const [urlset, setUrl] = useState(url);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loaded, setLoaded] = useState(false);
  console.log(data.length);
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data.results)
      })

      .catch((error) => setError(error.message));
  }, [urlset]);
  return(

  <>
  {data.length > 0 ? (
        <>
          <NavBar />
          <Header movieData={data} />
          <MainContent />
          <Footer />
        </>
      ) : (
        <HomeLoader />
      )}
</>
  
  )
};