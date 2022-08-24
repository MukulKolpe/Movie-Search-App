import React from "react";
import "./Movie.css";
const Movie = (props) => {
  return (
    <div className="movie">
      <img
        src="https://m.media-amazon.com/images/I/91fK1KIv66L._SY879_.jpg"
        alt="avengers-banner"
        className="movie-poster"
      ></img>
      <span>Movie</span>
    </div>
  );
};

export default Movie;
