import "./MovieContent.css";
import NavBar from "./NavBar.jsx";
import SideBar from "./SideBar.jsx";
import React, { useEffect, useState } from 'react';

function MovieContent({info,id}) {
    console.log(info);
  

    const [movieDetails, setMovieDetails] = useState([]);
    const [error,setError]=useState(null);
    
    useEffect(() => {
 
        fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=d6c287e55b74adf5812bec5fad23e8b0`)
          .then((response) => response.json())
          .then((data) => setMovieDetails(data))
          .catch((error) => setError(error.message));
          console.log(movieDetails)
      }, [id]);

      const director = movieDetails.crew ? movieDetails.crew.filter((member) => member.job === 'Director') : [];
  const writer = movieDetails.crew ? movieDetails.crew.filter((member) => member.department === 'Writing') : [];
  const actor = movieDetails.cast ? movieDetails.cast.filter((member) => member.known_for_department === 'Acting') : [];
  const filterdActor=actor.slice(0,3);

  let image_path="https://image.tmdb.org/t/p/w500";

  return(
    <>
    <NavBar/>
    <div className="movie-content">
      <div className="movie2" style={{ position: "relative" }}>
        <img src={image_path+info.poster_path} alt=""/>
      </div>
      <div >
      <div className="movieInfo">
        <iframe src=""/>
        <div className="container2">
          <p className="movieTitle" data-testid="movie-title">
            {info.title}
          </p>
          {/* <div className={styles.genres}></div> */}
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

        <div className="buttons">
          <button>
            <img src="/Icons/Twotickets.png" alt="" />
            <p>See Showtimes</p>
          </button>

          <button>
            <img src="/Icons/List.png" alt="" />
            <p>More watch options</p>
          </button>
        </div>
      </div>

      <div className="movieDetails">
        <div className="cast">
          <p>
            Director: <span className="castName">{error?<span>error</span>:director.map((d) => d.name).join(', ')}</span>
          </p>
          <p>
            Writers: <span className="castName">{error?<span>error</span>:writer.map((w) => w.name).join(', ')}</span>
          </p>
          <p>
            Stars: <span className="castName">{error?<span>error</span>:filterdActor.map((actor) => actor.name).join(', ')}</span>
          </p>
        </div>

      </div>

      </div>
          </div>
          </>
  );
  
}

export default MovieContent;
