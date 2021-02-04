import React from "react";
import "./NotFound.css";

function NotFound({ setNotFound }) {
  return (
    <div className="not-found-container">
      <div className="not-found">
        <h2>We are sorry we couldn't find any trailer for this movie/series</h2>
        <button
          onClick={() => {
            setNotFound(false);
            console.log("hi");
          }}
        >
          It's OKay !
        </button>
      </div>
    </div>
  );
}

export default NotFound;
