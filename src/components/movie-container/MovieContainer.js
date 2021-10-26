import MovieContainerCss from './MovieContainer.module.css'
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Link, NavLink, Route, useParams, useLocation } from 'react-router-dom';
import { MovieDB, MovieGenreDB, MovieDBGenre, MovieSearch } from '../../services';
import { Spinner } from 'react-bootstrap'
import Pagination1 from "../../components/pagination/Pagination"

function MovieContainer({ search }) {

  const location = useLocation()
  const [movies, setMovies] = useState([])
  const [genres, setGenres] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [activeFilter, setActiveFilter] = useState('All')
  const [meta, setMeta] = useState({})



  // Get All Movies by Genre

  useEffect(() => {
    setIsLoading(true)
    if (activeFilter === 'All') {
      MovieDB()
        .then((res) => {
          setMovies(res.data.data.movies)
          console.log("isinya", res.data)
          setMeta({
            currentPage: res.data.currentPage,
            previousPage: res.data.previousPage,
            nextPage: res.data.nextPage,
            totalPage: res.data.totalPage
          })

        })
      setIsLoading(false)
    } else {
      MovieDBGenre(activeFilter)
        .then((res) => {

          setMovies(res.data.data)
          setIsLoading(false)
        });
    }

  }, [activeFilter]);



  // Get All Genres Filter

  useEffect(() => {
    MovieGenreDB()
      .then((res) => setGenres([{ id: 0, name: 'All' }].concat(res.data.data)))
      .catch((error) => {
        console.log(error)
      })

  }, [])


  if (isLoading) return <div className={MovieContainerCss.loadingSpinner}>
    <Spinner animation="grow" role="status">
      <span className="visually-hidden" ></span>
    </Spinner>Loading...</div>

  console.log(movies)
  return (
    <>
      <div className={MovieContainerCss.wrapper}>
        <div className={MovieContainerCss.filterContainer}>
          <h3>Browse by category</h3>
          <div className={MovieContainerCss.filters}>
            {genres.map(genre => (
              <button
                key={genre.name}
                onClick={() => setActiveFilter(genre.name)}
                className={`${MovieContainerCss.filtersItem} ${genre.name === activeFilter ? MovieContainerCss.active : ''}`}>
                {genre.name}
              </button>
            ))}
          </div>
        </div>



        <div className={MovieContainerCss.movieCollection}>
          {movies?.map((movie) => {
            return (
              <Link to={`/movie-detail/${movie.id}`} key={movie.id} className={MovieContainerCss.movieBox}>
                <img
                  src={movie.poster}
                  alt={movie.title}
                />
                <div className={MovieContainerCss.movieInfo}>
                  {/* <p className={MovieContainerCss.genreInfo}>{`${movie.genres[0]}, ${movie.genres[1]}`}</p> */}
                  <p className={MovieContainerCss.titleInfo}>{movie.title}</p>
                </div>
              </Link>
            );
          })}
        </div>
        <Pagination1 meta={meta} />
      </div>
    </>
  )
}



export default MovieContainer


