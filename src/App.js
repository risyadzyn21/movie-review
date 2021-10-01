import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


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
