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
      <Carousel className='carouselContainer'>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.teahub.io/photos/full/53-532602_best-desktop-background-hd-anime-anime-wallpapers-hd.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>film 1</h3>
            <p>tes tes</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://wallpaperaccess.com/full/44729.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.pinimg.com/originals/1e/86/65/1e8665c76382762185653f97c9e05037.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
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
