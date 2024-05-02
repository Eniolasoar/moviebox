import "./MovieContent.css";
import NavBar from "./NavBar.jsx";
import SideBar from "./SideBar.jsx";
import Footer from "./Footer.jsx";
import React, { useEffect, useState } from 'react';

function MovieContent({info,id}) {
    console.log(info);
  

    const [movieDetails, setMovieDetails] = useState([]);
    const [error,setError]=useState(null);

    const [videos,setVideo]=useState([]);
    const [videoError,setVideoError]=useState(null);

    const videoTrailer=videos.results?videos.results[0].key:"";
    
    useEffect(() => {
 
        fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=d6c287e55b74adf5812bec5fad23e8b0`)
          .then((response) => response.json())
          .then((data) => setMovieDetails(data))
          .catch((error) => setError(error.message));
          console.log(movieDetails);
      }, [id]);
useEffect(() => {

  fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=d6c287e55b74adf5812bec5fad23e8b0`)
    .then((response) => response.json())
    .then((data) => setVideo(data))
    
    .catch((error) => setVideoError(error.message));
    console.log("VIDEO");
    console.log(videos);
},[id]);
      const director = movieDetails.crew ? movieDetails.crew.filter((member) => member.job === 'Director') : [];
  const writer = movieDetails.crew ? movieDetails.crew.filter((member) => member.department === 'Writing') : [];
  const actor = movieDetails.cast ? movieDetails.cast.filter((member) => member.known_for_department === 'Acting') : [];
  const filterdActor=actor.slice(0,3);
  // const popularActor=actor?actor.popularity.filter((popular)=>popular)

  //get a list of the actors based on how popular they are from ascending to decending
  const popularActor=actor.sort((a,b)=>a.popularity-b.popularity).reverse();

  const popularActorList=popularActor.slice(0,6);


  let image_path="https://image.tmdb.org/t/p/w500";

  return(
    <>
    <NavBar/>
    <div className="movie-content">
      <div className="movie2" style={{ position: "relative" }}>
        <img src={image_path+info.poster_path} alt=""/>
      </div>
      <div className="movieContainer">
      <div className="movieInfo">
        <iframe src={`https://youtube.com/embed/${videoTrailer}`}></iframe>
        <div className="container2">
          <p className="movieTitle2" data-testid="movie-title">
            {info.title}
          </p>
          <div className="genres">
            {info.genres.map(genre=>{
              return(
                <div className="genre">
                <span>{genre.name}</span>
              </div>
              )
              
            })} 
           
          </div>
          <div className="extraInfo">
            <div className="left">
            <p className="releaseDate" data-testid="movie-release-date">
            {info.release_date}
          </p>
          <p className="runTime" data-testid="movie-runtime">
            {info.runtime} mins
          </p>
            </div>
          
          <div className="rating">
          <img src="/Icons/Star.png" alt="" />
        <p className="rating">{info.vote_average} </p>
          <p className="ratingCount"> 10</p>
        </div>
          </div>
          
        </div>

        
      </div>

      <div className="overviewSection">
        <p className="overview" data-testid=" movie-overview">
          {info.overview}
        </p>
          
        <div className="castSection">
        <h2>Casts</h2>
        <div className="castList">
        {error?<span>error</span>:popularActorList.map((actor) => (
            <div className="cast">
              <img src={image_path+actor.profile_path} alt="" />
              <p>{actor.name}</p>
            </div>
          ))}
        </div>
          
        </div>
      </div>
        
      </div>
      </div>

     

      
<Footer/>
      
         
          </>
  );
  
}

export default MovieContent;
