import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { getMovieById } from "../../store/moviesSlice";
import { makeRequest } from "../../utils";
import Rating from "./Rating";
import styles from "./styles.module.scss";

const MovieRecord = ({ movie }) => {
  const [movieExtended, setMovieExtended] = useState(null);
  const dispatch = useDispatch();

  const movieRecordClickHandler = () => {
    dispatch(getMovieById(movie.imdbID));
    scrollToTop();
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    getMovieExtended();
  }, []);

  const getMovieExtended = async () => {
    const response = await makeRequest(
      `${process.env.REACT_APP_MOVIE_API}&i=${movie.imdbID}`
    );
    setMovieExtended(response.data);
  };

  return (
    <div
      className={styles.movieRecord}
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(14,14,14,0.00) 0%, #0E0E0E 100%), url(${movie.Poster})`,
      }}
      onClick={movieRecordClickHandler}
    >
      <section className={styles.details}>
        <h1>{movie.Title}</h1>
        {movieExtended && (
          <>
            <p>{movieExtended.Genre}</p>
            <Rating imdbRating={movieExtended.imdbRating} />
          </>
        )}
      </section>
    </div>
  );
};

export default MovieRecord;
