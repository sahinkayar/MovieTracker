import React, { useState, useContext } from "react";
import ResultCard from "./resultCard";

function Add() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const apiKey = import.meta.env.VITE_TMDB_KEY;

  const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(
    query
  )}`;

  const HandleChange = (e) => {
    debugger;

    setQuery(e.target.value);
    fetch(url)
      .then((res) => res.json())
      .then((data) => setResults(data.results));
    console.log(results);
  };

  return (
    <div className="add-page">
      <div className="container">
        <div className="add-content">
          <img
            src="https://media.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,00192f,00baff)/hoVj2lYW3i7oMd1o7bPQRZd1lk1.jpg"
            alt=""
          />
          <div className="titles">
            <h1>Welcome!</h1>
            <h2>
              Millions of movies, TV shows and people to discover. Discover now.
            </h2>
          </div>
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Search for a Movie,Tv series or person....."
              onChange={HandleChange}
              // onChange={(e) => setQuery(e.target.value)}
              value={query}
            />
          </div>
        </div>
      </div>{" "}
      <div className="main">
        {results.map((movie) => {
          return <ResultCard key={movie.id} movie={movie} />;
        })}{" "}
      </div>
    </div>
  );
}

export default Add;
