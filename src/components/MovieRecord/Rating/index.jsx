import styles from "./styles.module.scss";

const Rating = ({ imdbRating }) => {
  const ratingArray = [2, 4, 6, 8, 10];

  return (
    <div className={styles.ratingContainer}>
      <div className={styles.hearts}>
        {ratingArray.map((heart) => (
          <img key={heart} src="/heart.png" alt="rating"></img>
        ))}
      </div>
      <div className={styles.rating}>{imdbRating.replace(".", ",")}/10</div>
    </div>
  );
};

export default Rating;
