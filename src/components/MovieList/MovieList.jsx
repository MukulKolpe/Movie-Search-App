import React from "react";
import Movie from "../Movie/Movie";
import "./MovieList.css";
const MovieList = () => {
  return (
    <div className="movie-list">
      <Movie />
      <Movie />
      <Movie />
      <Movie />
    </div>
  );
};

export default MovieList;
