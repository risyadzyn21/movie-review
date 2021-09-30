import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// import 'bootstrap/dist/css/bootstrap.min.css';
import LoginForm from './components/modal/LoginForm';
import RegisterForm from './components/modal/RegisterForm';
import MovieContainer from './components/movie-container/MovieContainer';
import MovieDetailSectionBtn from './components/movie-detail-section-btn/MovieDetailSectionBtn';
import OverviewSection from './components/overview-section/OverviewSection';
import CastingSection from './components/cast-section/CastSection';
import ModalContainer from './components/modal/ModalContainer';
import Home from './pages/home';
import MovieDetail from './pages/movieDetail';
import Layout from './components/layout/Layout';

function App() {
  return (
    <div className="App">
      {/* <LoginForm /> */}
      {/* <RegisterForm /> */}
      {/* <MovieContainer /> */}
      {/* <MovieDetailSectionBtn /> */}
      {/* <OverviewSection /> */}
      {/* <CastingSection /> */}
      {/* <ModalContainer /> */}

      <Router>
        <Layout>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/movie-detail/:id' component={MovieDetail} />
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
