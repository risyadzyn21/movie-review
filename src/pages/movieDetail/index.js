import { useParams } from "react-router"




function MovieDetail() {
  const { id } = useParams

  return (
    <>
      Movie Detail
    </>
  )
}

export default MovieDetail