import { Box } from "@material-ui/core";
import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import { TextField } from "@mui/material";
import "./Search.css";

function Search(props) {
  return (
    <div className="Search">
      <Box
        className="search-input"
        component="form"
        sx={{
          "& > :not(style)": { m: 1 },
        }}
        autoSave="off"
        noValidate
      >
        <SearchIcon fontSize="large" />
        <TextField
          className="text-input"
          id="outlined-basic"
          label="Search Movie..."
          variant="outlined"
          color="success"
          value={props.value}
          onChange={(event) => {
            props.setValue(event.target.value);
          }}
        />
      </Box>
    </div>
  );
}

export default Search;
