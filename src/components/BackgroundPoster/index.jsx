import styles from "./styles.module.scss";

const BackgroundPoster = ({ posterUrl }) => {
  return (
    <div
      className={styles.poster}
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(14,14,14,0.00) 43%, #0E0E0E 100%),
        url(${posterUrl})`,
      }}
    ></div>
  );
};

export default BackgroundPoster;
