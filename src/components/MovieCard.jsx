import React from "react";
import MovieControl from "./MovieControl";

function MovieCard({ movie, type }) {
  return (
    <div className="movie-card">
      <div className="overlay"> </div>
      {movie ? (
        <img
          src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
          alt=""
        />
      ) : (
        <div className="filler-poster"></div>
      )}
      <MovieControl movie={movie} type={type} />
    </div>
  );
}

export default MovieCard;
