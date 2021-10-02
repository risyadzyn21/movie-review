import styles from './movieInfo.module.css';
import React, { useState, useEffect } from 'react';
import onePieceBackground from "./onePiece.jpeg";
import { MovieDBId } from '../../services';

function MovieInfo({ bannerId }) {
    const [banners, setBanners] = useState()

    useEffect(() => {
        MovieDBId(bannerId)
            .then((res) => {
                setBanners(res.data.data)
            })
    }, [])

    return (
        <>
            <div></div>
            <div className={styles.bodyMovieInfo}>
                <div key={banners?._id} >
                    <img
                        src={`https://image.tmdb.org/t/p/original${banners?.poster}`} alt={banners?.title} />
                    <div className={styles.movieName}>
                        <p>{banners?.title} </p>
                    </div>
                </div>

            </div>

        </>
    );
}

export default MovieInfo;

{/* <img src={onePieceBackground} alt="Background" />
                <div className={styles.movieName}>
                    <p>One Piece Stampede </p>
                </div>
                <div className={styles.ratingMovie}>
                    dddd
                </div> */}