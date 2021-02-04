import React, { useEffect, useState } from "react";
import axios from "./axios";
import movieTrailer from "movie-trailer";
import Youtube from "react-youtube";

import "./Banner.css";

function Banner({ fetchUrlB, setNotFound }) {
  const base_url = "https://image.tmdb.org/t/p/original/";
  const [bannerTrailerUrl, setBannerTrailerUrl] = useState("");
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function fetchBanner() {
      const request = await axios.get(fetchUrlB);

      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchBanner();
  }, [fetchUrlB]);
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  function truncateString(str, num) {
    if (str?.length > num) {
      return str.slice(0, num) + "....";
    } else {
      return str;
    }
  }
  function handleClick() {
    if (bannerTrailerUrl) {
      setBannerTrailerUrl("");

      document.getElementById("play").innerHTML = "Play";
    } else {
      movieTrailer(movie.original_name || movie.original_title)
        .then((response) => {
          console.log(response);
          const urlParam = new URLSearchParams(new URL(response).search);
          console.log(urlParam.get("v"));
          setBannerTrailerUrl(urlParam.get("v"));
          document.getElementById("play").innerHTML = "Stop";
        })
        .catch((error) => {
          setNotFound(true);
        });
    }
  }

  return (
    <div>
      <header
        style={{ backgroundImage: `url("${base_url}${movie?.backdrop_path}")` }}
        className="banner"
      >
        <div className="banner_contents">
          <h1 className="banner_title">
            {movie?.name || movie?.original_name || movie?.title}
          </h1>
          <div className="banner_buttons">
            <button
              onClick={() => {
                handleClick();
              }}
              className="banner_button"
              id="play"
            >
              Play
            </button>
            <button className="banner_button">My List</button>
          </div>
          <h1 className="banner_descri">
            {truncateString(movie?.overview, 150)}
          </h1>
        </div>
        <div className="banner--fadeBottom"></div>
      </header>
      <div className="bannerTrailer">
        {bannerTrailerUrl && <Youtube videoId={bannerTrailerUrl} opts={opts} />}
      </div>
    </div>
  );
}

export default Banner;
