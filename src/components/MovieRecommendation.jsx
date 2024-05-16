import React, { useState,useEffect } from 'react'; 
import { useNavigate } from 'react-router-dom';
import './Card.css'


function MovieRecommendation({genreList}){
    let image_path="https://image.tmdb.org/t/p/w500";
    // let rating=movie.info.vote_average;
    // let rottenTomatoes=rating * 10;

const [movies, setMovies] = useState([])
const [error, setError] = useState([])
const [genreInfo, setGenreInfo] = useState([])
const [genreInfoError, setGenreInfoError] = useState([])

    useEffect(() => {
 
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=d6c287e55b74adf5812bec5fad23e8b0`)
          .then((response) => response.json())
          .then((data) => setMovies(data.results))
          .catch((error) => setError(error.message));
      }, []);
    useEffect(() => {
 
        fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=d6c287e55b74adf5812bec5fad23e8b0`)
          .then((response) => response.json())
          .then((data) => setGenreInfo(data.genres))
          .catch((error) => setGenreInfoError(error.message));
      }, []);

      const filteredGenres = genreInfo.filter(genre => {
        const movieGenres = genre.name;
        console.log(movieGenres); // Check if movieGenres is correctly retrieved
        console.log(genreList); // Check the content of genreList
      
        // Check if every genre in genreList matches movieGenres
        const matchesAllGenres = genreList.every(genreItem => {
          console.log(genreItem); // Check each genreItem in genreList
          const matches = movieGenres === genreItem;
          console.log("Matches:", matches); // Check if there's a match
          return matches;
          console.log("Hiiiiii");
        });
      
        // If every genre in genreList matches movieGenres, include it in filteredGenres
        return matchesAllGenres;
      });
      
      console.log(filteredGenres); // Check the content of filteredGenres
      
      
      // const movieRecommendations=movies.filter((movie)=>movie.genres_id!=)
    
    
    const [heartColor, setBackgroundColor] = useState('#9CA3AF');

  const handleClick = () => {
    setBackgroundColor('red');
  };
     const navigate=useNavigate();

// const cardId=movie.info.id;
  const goToMovie = () => {
    navigate(`/movies/${cardId}`);
  };




//   const filterMovies = info.filter(movie => {
//     const movieGenres = movie.genres.map(genre => genre.name);
//     // Check if all selected genres are present in the movie's genres
//     return genreList.every(genre => movieGenres.includes(genre));
//   });
   
    return(           
        
                // <div className="movieCard" data-testid="movie-card" onClick={goToMovie}>
                //     <div className="poster">
                //         <img src={image_path+movie.info.poster_path} alt="" width="250" height="370" data-testid="movie-poster"/>
                //         <img src="Icons/heart.svg" alt="" className="heart" onClick={handleClick} style={{backgroundColor:heartColor}}/>
                //     </div>
                    
                //     <p className="releaseDate" data-testid="movie-release-date">{movie.info.release_date}</p>
                //     <p className="movieTitle" data-testid="movie-title">{movie.info.title}</p>
                //     <div className="rating">
                //         <div className="imdb ">
                //             <img src="/Icons/IMDB.png" alt=""/>
                //             {movie.info.vote_average}/10
                //         </div>
                //         <div className="rottenTomatoes">
                //             <img src="/Icons/tomato.png" alt="" />
                //             {rottenTomatoes}%
                //         </div>
                //     </div>
                // </div>
                <div></div>

    

        )
}

export default MovieRecommendation;
