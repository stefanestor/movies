import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';

import BackgroundPoster from './components/BackgroundPoster';
import { getMovieById, getMovies } from "./store/moviesSlice";
import MovieDetails from './components/MovieDetails';
import MovieOverview from './components/MovieOverview';
import LoadMore from './shared/components/LoadMore';
import styles from './App.module.scss';





function App() {
  const {selectedMovie, movies} = useSelector(state=> state.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  useEffect(()=>{
    if(!selectedMovie && movies.length > 0) {
      dispatch(getMovieById(movies[0].imdbID));
    }

  },[movies, dispatch, selectedMovie])

  return (
    <div className={styles.appContainer}>
      <BackgroundPoster posterUrl={selectedMovie?.data?.Poster}/>
      <div className={styles.detailsAndOverview}>
        <MovieDetails movie={selectedMovie}/>
        <MovieOverview movies={movies}/>
      </div>
      <LoadMore/>
    </div>
  );
}

export default App;
