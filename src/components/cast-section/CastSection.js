import CastSectionCss from './CastSection.module.css'
import React, { useState, useEffect } from 'react';
import { MovieDBId, MovieGenreDB } from '../../services';


function CastSection({ movieId }) {
  const [cast, setCast] = useState([])
  const [pictCast, setPictCast] = useState()


  useEffect(() => {
    MovieDBId(movieId)
      .then((res) => {
        setCast(res.data.data.movie.MovieCharacters)
      })
  }, [])

  useEffect(() => {
    MovieGenreDB()
      .then((res) => {
        setPictCast(res.data.data)
      })
  })


  return (
    <>
      <div className={CastSectionCss.characterCollection}>
        {cast.map((character) => {
          return (
            <div key={character.characterId} className={CastSectionCss.characterBox}>
              <img
                src={character.Character.profilePict}
                alt={character.name}
              />
              <div className={CastSectionCss.characterInfo}>
                <p className={CastSectionCss.charaInfo}>{character.Character.name}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  )
}

export default CastSection