import './App.css';
import PostReview from './components/postReview/PostReview';
import MovieInfo from './components/movieInfo/MovieInfo';
import NavbarUser from './components/navbar/NavbarUser';
import Footer from './components/footer/Footer';
import TheComment from './components/postReview/TheComment';
import AddComment from './components/postReview/TheComment';
import Comment from './components/postReview/Comments';

import Home from './pages/home';
import MovieDetail from './pages/movieDetail';
import Layout from './components/layout/Layout';
import Routes from './routes';

function App() {
  return (
    <div className="App">
      {/* <NavbarUser />
      <MovieInfo /> */}
      {/* <PostReview /> */}
      <Comment />
      {/* <TheComment /> */}
      {/* <Footer /> */}
    
    </div>
  );
}

export default App;
