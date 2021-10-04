import React, { useState } from "react"
import { useParams } from "react-router"
import MovieDetailSectionBtn from "../../components/movie-detail-section-btn/MovieDetailSectionBtn"
import MovieInfo from "../../components/movieInfo/MovieInfo"



function MovieDetail() {
  const { id } = useParams()
  const [type, setType] = useState('Overview')

  const handleSwitch = (type) => {
    setType(type)
  }

  //   const getBackgroundColor = (type) => {
  //     if (type === 'approved') {
  //         return 'blue';
  //     }
  //     if (type === 'pending') {
  //         return 'red';
  //     }
  //     return 'black';
  // }

  return (
    <>
      <MovieInfo bannerId={id} />
      <MovieDetailSectionBtn movieId={id} />
    </>
  )
}

export default MovieDetail