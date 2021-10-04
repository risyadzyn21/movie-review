import React, { useEffect, useState } from 'react'
import './MovieCarousel.css'
import { Link } from 'react-router-dom';

import { Carousel } from "react-bootstrap";
import { MovieDB } from '../../services';

function MovieCarousel() {
  const [posters, setPosters] = useState([])

  useEffect(() => {
    MovieDB()
      .then((res) => {
        setPosters(res.data.data.docs)
      });
  }, []);

  return (
    <>
      <div className='carouselContainer'>
        <Carousel >

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://ih0.redbubble.net/cover.1572299.2400x600.jpg"
              alt="Third slide"
            />
            <Carousel.Caption>
              <img className='bannerImg' src='http://assets.stickpng.com/images/5ede4a3fb760540004f2c5e9.png' />
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://dafunda.com/wp-content/uploads/2018/02/10-tahun-marvel-banner-1140x487.jpeg"
              alt="First slide"
            />
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/c35b0e102808543.602f20eab5024.png"
              alt="Second slide"
            />
          </Carousel.Item>



        </Carousel>
      </div>
      {/* <Carousel>
        <Carousel.Item>
        <div className={MovieCarouselCss.movieCollection}>

        </div>
        </Carousel.Item>
      </Carousel>

      <div className={MovieCarouselCss.movieCollection}>
        {posters.map((poster) => {
          return (
            <Link to={`/movie-detail/${poster._id}`} key={poster._id} className={MovieCarouselCss.movieBox}>
              <img
                src={`https://image.tmdb.org/t/p/original${poster.poster}`}
                alt={poster.title}
              />
              <div className={MovieCarouselCss.movieInfo}>
                <p className={MovieCarouselCss.genreInfo}>{`${poster.genres[0]}, ${poster.genres[1]}`}</p>
                <p className={MovieCarouselCss.titleInfo}>{poster.title}</p>
              </div>
            </Link>
          );
        })}
      </div> */}
    </>
  );
};

export default MovieCarousel;
