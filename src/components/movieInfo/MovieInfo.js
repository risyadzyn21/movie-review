import styles from "./movieInfo.module.css";
import React, { useState, useEffect } from "react";
import onePieceBackground from "./onePiece.jpeg";
import StarRatingShow from "./StarRatingShow";
import { Button } from "react-bootstrap";
import { MovieDBId } from "../../services";

function MovieInfo({ bannerId }) {
  const [banners, setBanners] = useState();

  useEffect(() => {
    MovieDBId(bannerId).then((res) => {
      setBanners(res.data.data.movie);
    });
  }, []);

  return (
    <>
      <div className={styles.bodyMovieInfo}>
        <div key={banners?.id}>
          <img
            src={banners?.poster}
            alt={banners?.title}
          />
          <div className={styles.movieName}>
            <h2>{banners?.title} </h2>
            <p>{banners?.synopsis}</p>
          </div>
          <div className={styles.buttonContainer}>
            <a href={banners?.trailer}>
              <Button variant="danger" className={styles.trailerBtn} >Watch Trailer</Button>{" "}
            </a>
            <Button variant="outline-light" disabled={true} >Add to Watchlist</Button>{" "}
          </div>
        </div>
      </div>
    </>
  );
}

export default MovieInfo;

{
  /* <img src={onePieceBackground} alt="Background" />
                <div className={styles.movieName}>
                    <p>One Piece Stampede </p>
                </div>
                <div className={styles.ratingMovie}>
                    dddd
                </div> */
}
