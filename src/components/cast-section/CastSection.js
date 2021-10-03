import CastSectionCss from './CastSection.module.css'
import React, { useState, useEffect } from 'react';
import { MovieDB } from '../../services';


function CastSection() {
  const [cast, setCast] = useState([])


  useEffect(() => {
    MovieDB()
      .then((res) => setCast(res.data.data.docs.casts));
    console.log(cast)
  }, []);


  return (
    <>
      <h3> Cast Section</h3>
      {/* <div className={CastSectionCss.castCollection}>
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
      </div> */}
    </>
  )
}

export default CastSection