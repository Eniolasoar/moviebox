import React, { useState,useEffect } from 'react'; 
import { useNavigate } from 'react-router-dom';
import './Card.css'


function MovieRecommendation({genreList}){
    let image_path="https://image.tmdb.org/t/p/w500";
    // let rating=movie.info.vote_average;
    // let rottenTomatoes=rating * 10;

    const genres = [
      { id: 28, name: "Action" },
      { id: 12, name: "Adventure" },
      { id: 16, name: "Animation" },
      { id: 35, name: "Comedy" },
      { id: 80, name: "Crime" },
      { id: 99, name: "Documentary" },
      { id: 18, name: "Drama" },
      { id: 10751, name: "Family" },
      { id: 14, name: "Fantasy" },
      { id: 36, name: "History" },
      { id: 27, name: "Horror" },
      { id: 10402, name: "Music" },
      { id: 9648, name: "Mystery" },
      { id: 10749, name: "Romance" },
      { id: 878, name: "Science Fiction" },
      { id: 10770, name: "TV Movie" },
      { id: 53, name: "Thriller" },
      { id: 10752, name: "War" },
      { id: 37, name: "Western" }
    ];
    
  const genresMap=genres.reduce((acc,genre)=>{
    acc[genre.name]=genre.id;
    return acc;
  }, {});


  const genresId=genreList.map((genre)=>genresMap[genre]);
 

const [movies, setMovies] = useState([])
const [error, setError] = useState([]);
const [error2, setError2] = useState([]);



    useEffect(() => {
 
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=d6c287e55b74adf5812bec5fad23e8b0&with_genres=${genresId.join(",")}`)
          .then((response) => response.json())
          .then((data) => setMovies(data.results))
          .catch((error) => setError(error.message));
      }, [genreList]);
   
      
      useEffect(()=>{
      
        window.scrollTo({
          top: 0,
          behavior: "smooth" // Optional: smooth scroll animation
      });
      })

      // const filteredGenres = genreInfo.filter(genre => {
      //   const movieGenres = genre.name;
      //   console.log(movieGenres); // Check if movieGenres is correctly retrieved
      //   console.log(genreList); // Check the content of genreList
      
      //   // Check if every genre in genreList matches movieGenres
      //   const matchesAllGenres = genreList.every(genreItem => {
      //     console.log(genreItem); // Check each genreItem in genreList
      //     const matches = movieGenres === genreItem;
      //     console.log("Matches:", matches); // Check if there's a match
      //     return matches;
      //     console.log("Hiiiiii");
      //   });
      
      //   // If every genre in genreList matches movieGenres, include it in filteredGenres
      //   return matchesAllGenres;
      // });
      
      // console.log(filteredGenres); // Check the content of filteredGenres
      
      
      // const movieRecommendations=movies.filter((movie)=>movie.genres_id!=)
    
    
    const [heartColor, setBackgroundColor] = useState('#9CA3AF');

  const handleClick = () => {
    setBackgroundColor('red');
  };
     const navigate=useNavigate();

// const cardId=movie.info.id;
  const goToMovie = (cardId) => {
  
    navigate(`/movies/${cardId}`);
  };



//   const filterMovies = info.filter(movie => {
//     const movieGenres = movie.genres.map(genre => genre.name);
//     // Check if all selected genres are present in the movie's genres
//     return genreList.every(genre => movieGenres.includes(genre));
//   });
   
    return(           
      <>
      {movies.map((movie,index)=>(
        <div className="movieCard" data-testid="movie-card" onClick={()=>goToMovie(movie.id)}>
                    <div className="poster">
                        <img src={image_path+movie.poster_path} alt="" width="250" height="370" data-testid="movie-poster"/>
                        <img src="/Icons/heart.svg" alt="" className="heart" onClick={handleClick} style={{backgroundColor:heartColor}}/>
                    </div>
                    
                    <p className="releaseDate" data-testid="movie-release-date">{movie.release_date}</p>
                    <p className="movieTitle" data-testid="movie-title">{movie.title}</p>
                    <div className="rating">
                        <div className="imdb ">
                            <img src="/Icons/IMDB.png" alt=""/>
                            {movie.vote_average}/10
                        </div>
                        <div className="rottenTomatoes">
                            <img src="/Icons/tomato.png" alt="" />
                            {Math.round(movie.vote_average * 10)}%
                        </div>
                    </div>
                </div>
               
      ))}
      </>
        
                

    

        )
}

export default MovieRecommendation;
