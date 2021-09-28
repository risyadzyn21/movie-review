import styles from './movieInfo.module.css';
import React from 'react';
import onePieceBackground from "./onePiece.jpeg";

function MovieInfo() {

    return (
        <>
        <div className={styles.bodyMovieInfo}>
           <img src={onePieceBackground} alt="Background" />
            <div className={styles.movieName}>
             <p>One Piece Stampede </p>
            </div>
            <div className={styles.ratingMovie}>
                dddd
            </div>
        </div>
        
    </>
    );
}

export default MovieInfo;