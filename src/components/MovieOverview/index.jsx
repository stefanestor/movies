import MovieRecord from "../MovieRecord";
import styles from "./styles.module.scss";

const MovieOverview = ({ movies }) => {
  return (
    <div className={styles.overviewContainer}>
      {movies &&
        movies.map((movie) => <MovieRecord key={movie.imdbID} movie={movie} />)}
    </div>
  );
};

export default MovieOverview;
