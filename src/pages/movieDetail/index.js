import { useParams } from "react-router"
import MovieDetailSectionBtn from "../../components/movie-detail-section-btn/MovieDetailSectionBtn"



function MovieDetail() {
  const { id } = useParams()

  return (
    <>
      <MovieDetailSectionBtn />
      Movie Detail: {id}
    </>
  )
}

export default MovieDetail