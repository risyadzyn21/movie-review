import MovieCarousel from "../../components/carousel/MovieCarousel"
import MovieContainer from "../../components/movie-container/MovieContainer"
import Pagination1 from "../../components/pagination/pagination"




function Home() {
  return (
    <>
      <MovieCarousel />
      <MovieContainer />
      <Pagination1 />
    </>
  )
}

export default Home