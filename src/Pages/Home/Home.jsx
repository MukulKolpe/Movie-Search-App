import React from "react";
import MovieList from "../../components/MovieList/MovieList";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "./Home.css";

const Home = () => {
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
        <TextField
          className="text-input"
          id="outlined-basic"
          label="Search Movie..."
          variant="outlined"
          color="success"
        />
      </Box>
      <MovieList />
    </div>
  );
};

export default Home;
