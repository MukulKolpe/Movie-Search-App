import React, { useEffect, useState } from "react";
import Axios from "axios";
import MovieList from "../../components/MovieList/MovieList";
import Search from "../../components/Search/Search";
import AddNomination from "../../components/Buttons/AddNomination";
import RemoveNomination from "../../components/Buttons/RemoveNomination";
const API_KEY = process.env.REACT_APP_API_KEY;

function Home() {
  const [movies, searchMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [nom, setNom] = useState([]);

  const movieRequest = async (searchString) => {
    const url = `https://www.omdbapi.com/?s=${searchString}&apikey=${API_KEY}`;

    const response = await Axios.get(url);

    console.log(response);
    if (response.data.Search) {
      searchMovies(response.data.Search);
    }
  };

  useEffect(() => {
    movieRequest(search);
  }, [search]);

  useEffect(() => {
    const movieNom = JSON.parse(localStorage.getItem("Nominations"));
    if (movieNom) {
      setNom(movieNom);
    }
  }, []);

  function saveToLocal(items) {
    localStorage.setItem("Nominations", JSON.stringify(items));
  }

  function nominateMovie(movie) {
    const newNom = [...nom, movie];
    setNom(newNom);
    saveToLocal(newNom);
  }

  function removeNomMovie(movie) {
    const newNom = nom.filter(
      (nomination) => nomination.imdbID !== movie.imdbID
    );
    setNom(newNom);
    saveToLocal(newNom);
  }

  return (
    <div className="container-fluid movie-app">
      <div className="row d-flex align-items-center mt-4 mb-4">
        <Search value={search} setValue={setSearch} />
      </div>
      <div className="row">
        <MovieList
          movies={movies}
          handleNomClick={nominateMovie}
          nomComponent={AddNomination}
        />
      </div>
      <h2
        style={{
          alignContent: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        Nominations
      </h2>
      <div className="row">
        <MovieList
          movies={nom}
          handleNomClick={removeNomMovie}
          nomComponent={RemoveNomination}
        />
      </div>
    </div>
  );
}

export default Home;
