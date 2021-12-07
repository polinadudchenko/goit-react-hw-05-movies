import { Route, Routes } from 'react-router';
import './App.styled.js';

import { HomePage } from './views/HomePage';
import { MovieDetailsPage } from './views/MovieDetailsPage';
import { MoviesPage } from './views/MoviesPage';

import Layout from './components/Layout';
import Reviews from './components/Reviews';
import Cast from './components/Cast';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<MoviesPage />}>
          <Route path=":movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  );
}

export default App;
