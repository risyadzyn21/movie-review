import React, { useState, useEffect } from "react"
import OverviewSectionCss from './OverviewSection.module.css'
import { MovieDBId } from "../../services"


function OverviewSection({ movieId }) {
  const [overview, setOverview] = useState('')

  useEffect(() => {
    MovieDBId(movieId)
      .then((res) => {
        setOverview(res.data.data)
      })
  }, [])

  return (
    <>
      <div className={OverviewSectionCss.synopsis}>
        <h3>Synopsis</h3>
        <p>
          {overview?.synopsis}
        </p>
      </div>

      <div className={OverviewSectionCss.movieInfo}>
        <h3>Movie Info</h3>
        <p>Release Date:</p>
        <p>Director:</p>
        <p>Featured Song:</p>
        <p>Budget:</p>
      </div>
    </>
  )
}

export default OverviewSection