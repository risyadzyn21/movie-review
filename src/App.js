
import './App.css';
import StarRating from './components/movieInfo/StarRating';
// import NavbarUser from './components/navbar/NavbarUser';
import MovieInfo from './components/movieInfo/MovieInfo';
import NavbarUser from './components/navbar/NavbarUser';


function App() {
  return (
    <div className="App">
      <NavbarUser />
      <MovieInfo />
     {/* <StarRating /> */}
    </div>
  );
}

export default App;
