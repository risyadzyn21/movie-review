import MovieContainerCss from './MovieContainer.module.css'
// import './MovieContainer.css'
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Link, NavLink } from 'react-router-dom';
import { MovieDB } from '../../services';

function MovieContainer() {
  const [movies, setMovies] = useState([])
  const [activeFilter, setActiveFilter] = useState('')



  useEffect(() => {
    MovieDB()
      .then((res) => setMovies(res.data.data.docs));
  }, []);

  const genres = ['All', 'Action', 'Adventure', 'Anime', 'Comedy', 'Science Fiction']

  return (
    <>
      <div className={MovieContainerCss.filterContainer}>
        <h3>Browse by category</h3>
        <Router>
          <ul className={MovieContainerCss.filters}>
            <li>
              <NavLink exact to='/' activeClassName={MovieContainerCss.active}>
                All
              </NavLink>
            </li>
            <li>
              <NavLink exact to='/action' activeClassName={MovieContainerCss.active}>
                Action
              </NavLink>
            </li>
            <li>
              <NavLink to='/adventure' activeClassName={MovieContainerCss.active}>
                Adventure
              </NavLink>
            </li>
            <li>
              <NavLink to='/anime' activeClassName={MovieContainerCss.active}>
                Anime
              </NavLink>
            </li>
            <li>
              <NavLink to='/comedy' activeClassName={MovieContainerCss.active}>
                Comedy
              </NavLink>
            </li>
            <li>
              <NavLink to='/science-fiction' activeClassName={MovieContainerCss.active}>
                Science Fiction
              </NavLink>
            </li>
          </ul>
        </Router>
      </div>

      {/* <div className={MovieContainerCss.filterContainer}>
        <h3>Browse by category</h3>
        <div className={MovieContainerCss.filters}>
          {genres.map(genre => (
            <button
              key={genre}
              onClick={() => setActiveFilter(genre)}
              className={`${MovieContainerCss.filtersItem} ${genre === activeFilter ? MovieContainerCss.active : ''}`}>
              {genre}
            </button>
          ))}
        </div>
      </div> */}


      <div className={MovieContainerCss.movieCollection}>
        {movies.map((movie) => {
          return (
            <div key={movie._id} className={MovieContainerCss.movieBox}>
              <img
                src={`https://image.tmdb.org/t/p/original${movie.poster}`}
                alt={movie.title}
              />
              <div className={MovieContainerCss.movieInfo}>
                <p className={MovieContainerCss.genreInfo}>{`${movie.genres[0]}, ${movie.genres[1]}`}</p>
                <p className={MovieContainerCss.titleInfo}>{movie.title}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  )
}

export default MovieContainer