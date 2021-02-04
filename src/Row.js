import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";
import movieTrailer from "movie-trailer";
import Youtube from "react-youtube";

function Row({ title, fetchUrl, isLargeRow, setNotFound }) {
  const base_url = "https://image.tmdb.org/t/p/original/";
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  useEffect(() => {
    async function fetchMovies() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchMovies();
  }, [fetchUrl]);
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  //console.log(movies);

  function handleClick(movie) {
    if (trailerUrl) setTrailerUrl("");
    else {
      // console.log(movie.original_name || movie.original_title);
      movieTrailer(movie.original_name || movie.original_title)
        .then((response) => {
          console.log(response);
          const urlParam = new URLSearchParams(new URL(response).search);
          console.log(urlParam.get("v"));
          setTrailerUrl(urlParam.get("v"));
          console.log(trailerUrl);
        })
        .catch((error) => {
          setNotFound(true);
        });
    }
  }

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row_posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={() => {
              handleClick(movie);
            }}
            className="row_poster"
            src={`${base_url}${
              isLargeRow ? movie.backdrop_path : movie.poster_path
            }`}
            alt=""
          ></img>
        ))}
      </div>
      {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;
