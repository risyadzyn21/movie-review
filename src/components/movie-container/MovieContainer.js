import './MovieContainer.css'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
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
      <div className='filterContainer'>
        <h3>Browse by category</h3>
        <div className='filters'>
          {genres.map(genre => (
            <button
              key={genre}
              onClick={() => setActiveFilter(genre)}
              className={`filters-item ${genre == activeFilter ? 'active' : ''}`}>
              {genre}
            </button>
          ))}
        </div>
      </div>


      <div className="field">
        {movies.map((movie) => {
          return (
            <div key={movie._id} className="movieBox">
              <img
                src={`https://image.tmdb.org/t/p/original${movie.poster}`}
                alt={movie.title}
              />
              <div className='movieInfo'>
                <p className='titleInfo'>{movie.title}</p>
                <p className='genreInfo'>{movie.genres[0]}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  )
}

export default MovieContainer