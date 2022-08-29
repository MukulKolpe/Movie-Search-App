import React from "react";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import "./ButtonStyles.css";

function AddNomination() {
  return (
    <div className="btn">
      <BookmarkAddIcon />
      <span>Nominate Movie</span>
    </div>
  );
}

export default AddNomination;
