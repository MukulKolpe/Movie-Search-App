import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import "./Search.css";

function Search(props) {
  return (
    <div className="search">
      <SearchIcon />
      <input
        type="text"
        className="search-input"
        placeholder="Search Movies..."
        onChange={(event) => {
          props.setValue(event.target.value);
        }}
      />
    </div>
  );
}

export default Search;
