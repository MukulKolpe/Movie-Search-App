import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "./Home.css";
import Axios from "axios";
import SearchIcon from "@mui/icons-material/Search";
import Movie from "../../components/Movie/Movie";

const API_KEY = process.env.REACT_APP_API_KEY;
const Home = () => {
  const [search, setSearch] = useState();
  const [timeoutId, setTimeoutId] = useState();
  const [movieList, setMovieList] = useState();

  const movieRequest = async (searchString) => {
    const url = `https://www.omdbapi.com/?s=${searchString}&apikey=${API_KEY}`;

    const response = await Axios.get(url);
    console.log(response);
    setMovieList(response.data.Search);
  };

  const onTextChange = (e) => {
    clearTimeout(timeoutId);
    setSearch(e.target.value);
    const timeout = setTimeout(() => movieRequest(e.target.value), 500);
    setTimeoutId(timeout);
  };
  return (
    <div className="home">
      <Box
        className="search-input"
        component="form"
        sx={{
          "& > :not(style)": { m: 1 },
        }}
        noValidate
      >
        <SearchIcon fontSize="large" />
        <TextField
          className="text-input"
          id="outlined-basic"
          label="Search Movie..."
          variant="outlined"
          color="success"
          value={search}
          onChange={onTextChange}
        />
      </Box>
      <div className="movie-list">
        {movieList?.length
          ? movieList.map((movie, index) => <Movie key={index} movie={movie} />)
          : "No Movies Found"}
      </div>
    </div>
  );
};

export default Home;
