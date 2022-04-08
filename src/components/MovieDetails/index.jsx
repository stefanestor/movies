import styles from "./styles.module.scss";

const MovieDetails = ({ movie }) => {
  if (movie) {
    const goToImdb = () => {
      console.log("movie", movie);
      window.open(`https://www.imdb.com/title/${movie.data.imdbID}`, "_blank");
    };
    return (
      <div className={styles.movieDetails}>
        <div className={styles.companyLogo}>
          <img src="/dotControl.png" alt="imdb logo"></img>
        </div>
        <h1>{movie.data.Title}</h1>
        <p>{movie.data.Plot}</p>
        <a target="_blank" href="" onClick={goToImdb} title="imdb">
          <span>More information</span>
          <img src="/imdb.svg" alt="imdb logo"></img>
        </a>
      </div>
    );
  }
  return null;
};

export default MovieDetails;
