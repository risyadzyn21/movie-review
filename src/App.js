import './App.css';
import MovieInfo from './components/movieInfo/MovieInfo';
import NavbarUser from './components/navbar/NavbarUser';
import Footer from './components/footer/Footer';

import Home from './pages/home';
import MovieDetail from './pages/movieDetail';
import Layout from './components/layout/Layout';
import Routes from './routes';

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes />
      </Layout>
    </div>
  );
}

export default App;
