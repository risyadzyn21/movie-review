import styles from './movieInfo.module.css';
import React from 'react';
import onePieceBackground from "./onePiece.jpeg";
import StarRatingShow from './StarRatingShow';
import {Button} from 'react-bootstrap';


function MovieInfo() {

    return (
        <>
        <div className={styles.bodyMovieInfo}>
           <img src={onePieceBackground} alt="Background" />
            <div className={styles.movieName}>
             <p>One Piece Stampede </p>
            </div>
            <div className={styles.ratingMovie}>
                <StarRatingShow />
                <span className={styles.spanRating}>220 Reviews</span>
            </div>
            <div className={styles.synopsis}>
            <p>Mereka diundang ke acara besar yang dikenal sebagai Pirates expo! 
                Semua bajak laut terhebat berkumpul di pameran bajak laut,tiba-tiba angkatan laut ikut campur dalam kegiatan tersebut, 
                Sebenarnya ada konspirasi apakah dibalik acara tersebut?
            </p>
            </div>
            <div className={styles.buttonTrailerWatchlist}>
                <Button variant="danger" className={styles.buttonTrailer}>Watch Trailer</Button>{' '}
                <Button variant="outline-light">Add to Watchlist</Button>{' '}
            </div>
        </div>
        
    </>
    );
}

export default MovieInfo;