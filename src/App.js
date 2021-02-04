import "./App.css";
import React, { useEffect, useState } from "react";
import Banner from "./Banner";
import Nav from "./Nav";
import fetch from "./request";
import Row from "./Row";
import CustomSearchRow from "./CustomSearchRow";
import NotFound from "./NotFound";

function App() {
  // console.log(searchTitle);
  const [searchMovie, setSearchMovie] = useState([]);
  const [notFound, setNotFound] = useState(false);
  const [searchListActive, setSearchListActive] = useState(false);
  return (
    <div className="App">
      <Nav
        searchListActive={searchListActive}
        setSearchListActive={setSearchListActive}
        searchMovie={searchMovie}
        setSearchMovie={setSearchMovie}
      />
      <Banner setNotFound={setNotFound} fetchUrlB={fetch.fetchTrending} />
      {searchListActive && (
        <CustomSearchRow
          searchListActive={searchListActive}
          setSearchListActive={setSearchListActive}
          searchMovie={searchMovie}
        />
      )}
      {notFound && <NotFound setNotFound={setNotFound} />}
      <Row
        setNotFound={setNotFound}
        isLargeRow
        title="NETFLIX ORIGINALS"
        fetchUrl={fetch.fetchNetflix}
      />
      <Row
        setNotFound={setNotFound}
        title="TRENDING"
        fetchUrl={fetch.fetchTrending}
      />
      <Row
        setNotFound={setNotFound}
        title="TOP RATED"
        fetchUrl={fetch.fetchTopRated}
      />
      <Row
        setNotFound={setNotFound}
        title="ACTION"
        fetchUrl={fetch.fetchAction}
      />
      <Row
        setNotFound={setNotFound}
        title="ROMANCE"
        fetchUrl={fetch.fetchRomance}
      />
      <Row
        setNotFound={setNotFound}
        title="COMEDY"
        fetchUrl={fetch.fetchComedy}
      />
      <Row
        setNotFound={setNotFound}
        title="HORROR"
        fetchUrl={fetch.fetchHorror}
      />
      <Row
        setNotFound={setNotFound}
        title="DOCUMENTRIES"
        fetchUrl={fetch.fetchDocumentries}
      />
    </div>
  );
}

export default App;
