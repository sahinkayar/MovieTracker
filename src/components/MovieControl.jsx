import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";

function MovieControl({ movie, type }) {
  const {
    watched,
    RemoveFromWatchL,
    addMovieToWatched,
    moveToWatchlist,
    removeFromWatched,
  } = useContext(GlobalContext);

  return (
    <>
      {type === "watchList" && (
        <div className="inner-card-controls">
          <button className="ctrl-btn" onClick={() => addMovieToWatched(movie)}>
            <i className="fas fa-eye"></i>
          </button>
          <button
            className="ctrl-btn"
            onClick={() => RemoveFromWatchL(movie.id)}
          >
            <i className="fas fa-times"></i>
          </button>
        </div>
      )}
      {type === "watched" && (
        <div className="inner-card-controls">
          <button className="ctrl-btn" onClick={() => moveToWatchlist(movie)}>
            <i className="fas fa-eye-slash"></i>
          </button>
          <button
            className="ctrl-btn"
            onClick={() => removeFromWatched(movie.id)}
          >
            <i className="fas fa-times"></i>
          </button>
        </div>
      )}
    </>
  );
}

export default MovieControl;
