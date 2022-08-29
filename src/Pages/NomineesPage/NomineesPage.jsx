import React, { useEffect, useState } from "react";
import BookmarkRemoveIcon from "@mui/icons-material/BookmarkRemove";

import "./NomineesPage.css";
import RemoveNomination from "../../components/Buttons/RemoveNomination";

const NomineesPage = (props) => {
  const [nom, setNom] = useState([]);
  useEffect(() => {
    let oldFav = localStorage.getItem("Nominations");

    oldFav = JSON.parse(oldFav) || [];
    console.log(oldFav);

    setNom(oldFav);
  }, []);
  function saveToLocal(items) {
    localStorage.setItem("Nominations", JSON.stringify(items));
  }
  function removeNomMovie(movie) {
    const newNom = nom.filter(
      (nomination) => nomination.imdbID !== movie.imdbID
    );
    setNom(newNom);
    saveToLocal(newNom);
  }
  const NomComponent = props.nomComponent;
  return (
    <>
      <div className="movie-list">
        {nom.map((movie, index) => (
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
              onClick={() => removeNomMovie(movie)}
              className="nominateBtn"
            >
              <RemoveNomination />
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default NomineesPage;
