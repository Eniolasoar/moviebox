import React, { useEffect, useState, useRef } from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";

function Header({ movieData }) {
  const [filteredMovies, setFilteredMovies] = useState([]);
  const slideIndexRef = useRef(0);

  useEffect(() => {
    if (!movieData.length) return;

    const filteredData = movieData.filter(
      (movie) => !["653346", "1093995"].includes(movie.id)
    );
    setFilteredMovies(filteredData.slice(10, 20)); // Pre-filter for efficiency

    const slideShow = () => {
      const slides = document.getElementsByClassName("mySlides");
      if (slides.length === 0) return; // Ensure slides are available

      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slides[slideIndexRef.current].style.display = "block"; // Direct manipulation

      slideIndexRef.current = (slideIndexRef.current + 1) % slides.length;
    };

    // Ensure DOM elements are rendered before calling slideShow
    const timeoutId = setTimeout(() => {
      slideShow(); // Show the first slide immediately
      const intervalId = setInterval(slideShow, 7000);

      // Cleanup interval on unmount
      return () => clearInterval(intervalId);
    }, 0); // Execute after current call stack

    return () => clearTimeout(timeoutId); // Cleanup timeout on unmount
  }, [movieData]);

  const image_path = "https://image.tmdb.org/t/p/w500";
  const navigate = useNavigate();

  const goToMovie = (cardId) => navigate(`/movies/${cardId}`);

  return (
    <section className="header">
      {filteredMovies.map((movie, index) => (
        <div className="mySlides fade" key={index}>
          <img
            src={image_path + movie.poster_path}
            width="100%"
            className="cover"
          />

          <div className="slideInfo">
            <div className="text">
              <h1>{movie.title}</h1>
              <div className="rating">
                <div className="imdb2">
                  <img src="/Icons/IMDB.png" alt="" />
                  {movie.vote_average}/10
                </div>
                <div className="rottenTomatoes2">
                  <img src="/Icons/tomato.png" alt="" />
                {Math.round(movie.vote_average * 10)}%
                </div>
              </div>
              <p className="paragraph"> {movie.overview}</p>

              <button onClick={() => goToMovie(movie.id)}>
                <img src="/Icons/play.png" alt="" />
                <p>FULL DETAILS</p>
              </button>
            </div>

            <div className="poster">
              <img
                src={image_path + movie.poster_path}
                className="posterImage"
              />
            </div>
          </div>

          <button onClick={() => goToMovie(movie.id)} className="mobileBtn">
            <img src="/Icons/play.png" alt="" />
            <p>FULL DETAILS</p>
          </button>
        </div>
      ))}

    </section>
  );
}

export default Header;
