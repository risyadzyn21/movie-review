import CastSectionCss from './CastSection.module.css'
import React, { useState, useEffect } from 'react';
import { MovieDBId } from '../../services';


function CastSection({ movieId }) {
  const [cast, setCast] = useState([])


  useEffect(() => {
    MovieDBId(movieId)
      .then((res) => {
        setCast(res.data.data.casts)
      })
  }, [])


  return (
    <>
      <h3> Cast Section</h3>
      <div className={CastSectionCss.characterCollection}>
        {cast.map((character) => {
          return (
            <div key={character.id} className={CastSectionCss.characterBox}>
              <img
                src={`https://image.tmdb.org/t/p/original${character.profile_path}`}
                alt={character.name}
              />
              <div className={CastSectionCss.characterInfo}>
                <p className={CastSectionCss.charaInfo}>{character.name}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  )
}

export default CastSection