import React, { useEffect, useState } from "react";
import { ToastContainer, toast, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./NomineesPage.css";
import RemoveNomination from "../../components/Buttons/RemoveNomination";
import heroImg from "../../Assets/HeroImg2.webp";

const NomineesPage = (props) => {
  const notify = () => toast.success("Movie Removed!");
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
  return (
    <>
      <div className="movie-list">
        {nom.length > 0 ? (
          nom.map((movie, index) => (
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
                onClick={() => {
                  removeNomMovie(movie);
                  notify();
                }}
                className="nominateBtn"
              >
                <RemoveNomination />
              </button>
            </div>
          ))
        ) : (
          <div className="no-nom">
            <img src={heroImg} alt="Movies-Landing" className="heroImg" />
          </div>
        )}
      </div>
      <ToastContainer
        position="top-right"
        autoClose={500}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        transition={Flip}
      />
    </>
  );
};

export default NomineesPage;
