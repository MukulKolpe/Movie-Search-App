import React from "react";
import "./MovieList.css";
function MovieList(props) {
  const NomComponent = props.nomComponent;
  return (
    <>
      <div className="movie-list">
        {props.movies.map((movie, index) => (
          <div className="movie">
            <img
              src={movie.Poster}
              alt="Movie Poster"
              className="movie-poster"
            ></img>
            <span className="movie-name">{movie.Title}</span>
            <div className="movie-info">
              <span className="info-span">Year: {movie.Year}</span>
              <span className="info-span">{movie.Type}</span>
            </div>
            <button
              onClick={() => props.handleNomClick(movie)}
              className="nominateBtn"
            >
              <NomComponent />
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default MovieList;
