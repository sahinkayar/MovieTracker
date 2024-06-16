import React, { useContext, useState } from "react";

import { GlobalContext } from "../context/GlobalContext";

function ResultCard({ movie }) {
  const { watchList, watched, addMovieToWatchList, addMovieToWatched } =
    useContext(GlobalContext);
  const isMovieInWatchList = watchList.find((m) => m.id === movie.id);
  const isMovieInWatched = watched.find((m) => m.id === movie.id);
  return (
    <div className="result-card">
      <div className="poster-wrapper">
        {movie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt=""
          />
        ) : (
          <div className="filler-poster"></div>
        )}
      </div>
      <div className="info">
        <div className="header">
          <h3 className="title">{movie.title}</h3>
          <h4 className="release-date">
            {movie.release_date
              ? movie.release_date.substring(0, 4)
              : "unknown date"}
          </h4>
          <h4 className="release-date">
            IMDB :{" "}
            <b>
              {" "}
              {movie.vote_average
                ? movie.vote_average.toString().slice(0, 3)
                : "No Rating"}{" "}
            </b>
          </h4>
        </div>
        <div className="controls">
          <button
            className="btn"
            disabled={isMovieInWatchList}
            onClick={() => addMovieToWatchList(movie)}
          >
            {" "}
            add to Watchlist
          </button>
          <button
            className="btn"
            disabled={isMovieInWatched}
            onClick={() => addMovieToWatched(movie)}
          >
            {" "}
            add to Watched
          </button>
        </div>
      </div>
    </div>
  );
}

export default ResultCard;
