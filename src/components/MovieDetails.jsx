import SideBar from "./SideBar.jsx"
import MovieContent from "./MovieContent.jsx"
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './MovieDetails.css'
function MovieDetails(){
    const { id } = useParams();
    const [movieDetails, setMovieDetails] = useState(null);
    const [error,setError]=useState(null)
    useEffect(() => {
 
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=d6c287e55b74adf5812bec5fad23e8b0`)
          .then((response) => response.json())
          .then((data) => setMovieDetails(data))
          .catch((error) => setError(error.message));
      }, [id]);
      return (
        <div className="container">
          {error ? (
            
            <p style={{ textAlign: "center", width: "500px" }}>{error + " movie Details from database. Please Try again"}</p>
          ) : (
            
            <>
              
              {movieDetails && <MovieContent info={movieDetails} id={id}/>}
              
            </>
          )}
        </div>
      );
}
export default MovieDetails