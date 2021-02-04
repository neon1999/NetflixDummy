import React, { useState } from "react";
import movieTrailer from "movie-trailer";
import Youtube from "react-youtube";
import CancelIcon from "@material-ui/icons/Cancel";
import { IconButton } from "@material-ui/core";
import "./customSearchRow.css";
function CustomSearchRow({
  searchMovie,
  searchListActive,
  setSearchListActive,
}) {
  const base_url = "https://image.tmdb.org/t/p/original/";
  const [trailerUrl, setTrailerUrl] = useState("");
  function handleClick(movie) {
    if (trailerUrl) setTrailerUrl("");
    else {
      movieTrailer(movie.original_name || movie.original_title)
        .then((response) => {
          console.log(response);
          const urlParam = new URLSearchParams(new URL(response).search);
          console.log(urlParam.get("v"));
          setTrailerUrl(urlParam.get("v"));
          console.log(trailerUrl);
        })
        .catch((error) => {
          alert("TRAILER NOT FOUND");
          console.log(error);
        });
    }
  }
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  return (
    <div className="customRow">
      <div className="customSearchRow">
        <h2>Search Results</h2>
        <IconButton
          onClick={() => {
            setSearchListActive(false);
          }}
          className="cross_btn"
        >
          <CancelIcon className="cross_icon" />
        </IconButton>
      </div>

      <div className="row_posters">
        {searchMovie.map(
          (movie) =>
            movie.poster_path && (
              <img
                key={movie.id}
                onClick={() => {
                  handleClick(movie);
                }}
                className="row_poster"
                src={`${base_url}${movie.poster_path}`}
                alt=""
              ></img>
            )
        )}
      </div>
      {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default CustomSearchRow;
