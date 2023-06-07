import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from './components/header/Header';
import Home from './pages/home/home';
import MovieList from './components/movieList/movieList';
import Movie from './pages/movieDetail/movie';
import MovieView from './pages/movieView/view';
import MovieSearch from './pages/movieSearch/search';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
        <Router>
          <Header />
            <Routes>
                <Route index element={<Home />}></Route>
                <Route path="movie/:id" element={<Movie />}></Route>
                <Route path="movies/:type" element={<MovieList />}></Route>
                <Route path="moviesview/:id" element={<MovieView />}></Route>
                <Route path="search/" element={<MovieSearch />}></Route>
                <Route path="/*" element={<h1>Error Page</h1>}></Route>
            </Routes>
            <Footer />
        </Router>
    </div>
  );
}

export default App;
