import React, { useEffect, useState } from "react";
import "./Nav.css";
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";
import CustomSearchRow from "./CustomSearchRow";
import axios from "./axios";
import request from "./request";

function Nav({ searchMovie, setSearchMovie, setSearchListActive }) {
  const [handleNav, setHandleNav] = useState(false);
  const [searchTitle, setSearchTitle] = useState("");
  const [searchURL, setSearchURL] = useState("");
  function isEmptyOrSpaces(str) {
    return str === null || str.match(/^ *$/) !== null;
  }

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 100 ? setHandleNav(true) : setHandleNav(false);
    });
  }, []);

  async function fetchSearch() {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=db7a5cf9e06cc0ab54b8057984df5465&query=${searchTitle.trim()}`
    )
      .then((request) => request.json())
      .then((data) => {
        setSearchMovie(data.results);
        console.log(data.results);
        setSearchListActive(true);
      });
  }
  return (
    <div className={`Nav ${handleNav && "Nav_black"}`}>
      <div className="left_nav">
        <img
          className="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt=""
        />
      </div>
      <div className="right_nav">
        <div className="search_bar_container">
          <input
            onFocus={(e) => {
              e.target.select();
            }}
            placeholder="Enter Movie Name"
            className="search_bar"
            type="text"
            value={searchTitle}
            onChange={(e) => {
              setSearchTitle(e.target.value);
            }}
          />
          <IconButton
            onClick={() => {
              console.log(searchTitle.trim());

              if (!isEmptyOrSpaces(searchTitle.trim())) {
                fetchSearch();
              }
            }}
            className="search_icon"
          >
            <SearchIcon />
          </IconButton>
        </div>
        <img className="avatar" src="/images/avatar.png" alt="" />
      </div>
    </div>
  );
}

export default Nav;
