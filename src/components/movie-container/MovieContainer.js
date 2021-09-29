import MovieContainerCss from './MovieContainer.module.css'
// import './MovieContainer.css'
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Link, NavLink, Route, useParams, useLocation } from 'react-router-dom';
import { MovieDB, MovieGenreDB } from '../../services';
import Switch from 'react-bootstrap/esm/Switch';

function MovieContainer() {

  const location = useLocation()
  const [movies, setMovies] = useState([])
  const [genres, setGenres] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [activeFilter, setActiveFilter] = useState('All')



  // Get All Movies by Genre

  useEffect(() => {
    setIsLoading(true)
    MovieDB(activeFilter)
      .then((res) => {
        setMovies(res.data.data.docs)
        setIsLoading(false)
      });
  }, [activeFilter]);

  // Get All Genres Filter

  useEffect(() => {
    MovieGenreDB()
      .then((res) => setGenres(['All'].concat(res.data.data)))
  }, [])

  // const handleFilter = (filter) => {
  //   console.log('filternya adalah', filter)
  // }

  if (isLoading) return <div>Loading...</div>
  return (
    <>
      {/* <div className={MovieContainerCss.filterContainer}>
        <h3>Browse by category</h3>
        <Router>

          <ul className={MovieContainerCss.filters}>
            <li>
              <NavLink exact to='/' activeClassName={MovieContainerCss.active}>
                All
              </NavLink>
            </li>
            <li>
              <NavLink exact to='/filter/action' activeClassName={MovieContainerCss.active}>
                Action
              </NavLink>
            </li>
            <li>
              <NavLink to='/filter/adventure' activeClassName={MovieContainerCss.active}>
                Adventure
              </NavLink>
            </li>
            <li>
              <NavLink to='/filter/anime' activeClassName={MovieContainerCss.active}>
                Anime
              </NavLink>
            </li>
            <li>
              <NavLink to='/filter/comedy' activeClassName={MovieContainerCss.active}>
                Comedy
              </NavLink>
            </li>
            <li>
              <NavLink to='/filter/science-fiction' activeClassName={MovieContainerCss.active}>
                Science Fiction
              </NavLink>
            </li>
          </ul>

          <Switch>
            <Route path='/filter/:genre' component={TabContainer} />
          </Switch>

        </Router>
      </div> */}

      <div className={MovieContainerCss.filterContainer}>
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
      </div>


      {/* <TabContainer handleFilter={handleFilter}> */}
      <div className={MovieContainerCss.movieCollection}>
        {movies.map((movie) => {
          return (
            <Link to={`/movie-detail/${movie._id}`} key={movie._id} className={MovieContainerCss.movieBox}>
              <img
                src={`https://image.tmdb.org/t/p/original${movie.poster}`}
                alt={movie.title}
              />
              <div className={MovieContainerCss.movieInfo}>
                <p className={MovieContainerCss.genreInfo}>{`${movie.genres[0]}, ${movie.genres[1]}`}</p>
                <p className={MovieContainerCss.titleInfo}>{movie.title}</p>
              </div>
            </Link>
          );
        })}
      </div>
      {/* </TabContainer> */}
    </>
  )
}

export function TabContainer(props) {
  const param = useParams()

  // useEffect(() => {
  //   MovieDB()
  //     .then((res) => console.log('response', res.data.data.docs));
  // }, []);

  // useEffect(() => {
  //   props.handleFilter(param)
  // }, [param])

  console.log('props', props)

  return (
    <>
      <div>{props.children}</div>
    </>
  )
}

export default MovieContainer


