import './App.css';
import Home from './pages/home';
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
