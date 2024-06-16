import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import MovieCard from "./MovieCard";

function WatchList() {
  const { watchList } = useContext(GlobalContext);

  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">Movies to Watch</h1>{" "}
          <div className="count-pill">
            {watchList.length} {watchList.length < 2 ? "Movie" : "Movies"}
          </div>
        </div>

        {watchList.length > 0 ? (
          <div className="movie-grid">
            {watchList.map((movie, index) => {
              return <MovieCard movie={movie} key={index} type={"watchList"} />;
            })}
          </div>
        ) : (
          <h2>No Movies on your list</h2>
        )}
      </div>
    </div>
  );
}

export default WatchList;
