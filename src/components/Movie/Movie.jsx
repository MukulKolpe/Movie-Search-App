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
      <span className="movie-name">Avengers Endgame</span>
      <div className="movie-info">
        <span className="info-span">Year: 2022</span>
        <button className="nominateBtn">Nominate</button>
      </div>
    </div>
  );
};

export default Movie;
