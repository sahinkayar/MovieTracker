import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalContext";
import MovieCard from "./MovieCard";

function Watched() {
  const { watched } = useContext(GlobalContext);
  //  useEffect((effect)=>{
  // watched.filter((filter)=>)
  //  })
  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">Movies to Watch</h1>{" "}
          <div className="count-pill">
            {watched.length} {watched.length < 2 ? "Movie" : "Movies"}
          </div>
        </div>

        {watched.length > 0 ? (
          <div className="movie-grid">
            {watched.map((movie, index) => {
              console.log(movie);
              return <MovieCard movie={movie} key={index} type={"watched"} />;
            })}
          </div>
        ) : (
          <h2>No movies on your list...</h2>
        )}
      </div>
    </div>
  );
}

export default Watched;
