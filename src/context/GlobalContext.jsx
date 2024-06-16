import { createContext, useEffect, useReducer } from "react";
import AppReducer from "./AppReducer";

export const GlobalContext = createContext();

const initialState = {
  watchList: localStorage.getItem("watchList")
    ? JSON.parse(localStorage.getItem("watchList"))
    : [],
  watched: localStorage.getItem("watched")
    ? JSON.parse(localStorage.getItem("watched"))
    : [],
};

export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem("watchList", JSON.stringify(state.watchList));
    localStorage.setItem("watched", JSON.stringify(state.watched));
  }, [state]);

  const addMovieToWatchList = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_WATCHLIST", payload: movie });
  };

  const RemoveFromWatchL = (id) => {
    dispatch({ type: "REMOVE_MOVIE_FROM_WATCHLIST", payload: id });
  };

  const removeFromWatched = (id) => {
    dispatch({ type: "REMOVE_MOVIE_FROM_WATCHED", payload: id });
  };
  const moveToWatchlist = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_WATCHL", payload: movie });
  };

  const addMovieToWatched = (movie) => {
    if (!state.watched.find((m) => m.id === movie.id)) {
      dispatch({ type: "ADD_MOVIE_TO_WATCHED", payload: movie });
    }
  };
  return (
    <GlobalContext.Provider
      value={{
        addMovieToWatchList,
        RemoveFromWatchL,
        addMovieToWatched,
        removeFromWatched,
        moveToWatchlist,
        watchList: state.watchList,
        watched: state.watched,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
