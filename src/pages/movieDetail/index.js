import React, { useState } from "react"
import './MovieDetail.css'
import { useParams } from "react-router"
import MovieDetailSectionBtn from "../../components/movie-detail-section-btn/MovieDetailSectionBtn"
import MovieInfo from "../../components/movieInfo/MovieInfo"



function MovieDetail() {
  const { id } = useParams()


  return (
    <>
      <MovieInfo bannerId={id} />
      <MovieDetailSectionBtn movieId={id} />
    </>
  )
}

export default MovieDetail