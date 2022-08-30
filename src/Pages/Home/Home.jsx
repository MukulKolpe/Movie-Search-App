import React, { useEffect, useState } from "react";
import Axios from "axios";
import MovieList from "../../components/MovieList/MovieList";
import Search from "../../components/Search/Search";
import AddNomination from "../../components/Buttons/AddNomination";
import heroImg from "../../Assets/HeroImg.webp";
import "./Home.css";
import { useNavigate } from "react-router-dom";
const API_KEY = process.env.REACT_APP_API_KEY;

function Home() {
  const [movies, searchMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [nom, setNom] = useState([]);
  const navigate = useNavigate();

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
    if (items.length < 6) {
      localStorage.setItem("Nominations", JSON.stringify(items));
    } else {
      alert("You have reached the maximum number of nominations");
      navigate("/nominees");
    }
  }

  function nominateMovie(movie) {
    const newNom = [...nom, movie];

    setNom(newNom);

    saveToLocal(newNom);
  }

  return (
    <div className="container-fluid movie-app">
      <div className="row d-flex align-items-center mt-4 mb-4">
        <Search value={search} setValue={setSearch} />
      </div>
      <div className="row">
        {movies.length > 0 ? (
          <MovieList
            movies={movies}
            handleNomClick={nominateMovie}
            nomComponent={AddNomination}
          />
        ) : (
          <div className="no-movies">
            <img src={heroImg} alt="Movies-Landing" className="heroImg" />
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
