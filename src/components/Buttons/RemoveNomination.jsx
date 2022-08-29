import React from "react";
import BookmarkRemoveIcon from "@mui/icons-material/BookmarkRemove";
import "./ButtonStyles.css";

function RemoveNomination() {
  return (
    <div className="btn">
      <BookmarkRemoveIcon />
      <span>Remove Movie</span>
    </div>
  );
}

export default RemoveNomination;
