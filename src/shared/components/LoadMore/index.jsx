import { useSelector, useDispatch } from "react-redux";

import { getMovies } from "../../../store/moviesSlice";
import styles from "./styles.module.scss";

const LoadMore = () => {
  const { page } = useSelector((state) => state.movies);
  const dispatch = useDispatch();

  const loadMoviesHandler = () => {
    dispatch(getMovies("superhero", page + 1));
  };

  return (
    <a className={styles.loadMore} onClick={loadMoviesHandler}>
      <span>
        <img src="load.png"></img>
        <span>Load more</span>
      </span>
    </a>
  );
};

export default LoadMore;
