import React, { lazy, Suspense } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import './App.styled.js';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import { HomePage } from './views/HomePage';
import Layout from './components/Layout';

const AsyncMoviesPage = lazy(() => import('./views/MoviesPage'));
const AsyncMovieDetailsPage = lazy(() => import('./views/MovieDetailsPage'));
const AsyncCast = lazy(() => import('./components/Cast'));
const AsyncReviews = lazy(() => import('./components/Reviews'));

function App() {
  return (
    <Suspense
      fallback={
        <Loader
          type="TailSpin"
          color="#f19816"
          height={100}
          width={100}
          timeout={3000} //3 secs
          style={{ textAlign: 'center', padding: '100px' }}
        />
      }
    >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<AsyncMoviesPage />} />
          <Route path="movies/:movieId" element={<AsyncMovieDetailsPage />}>
            <Route path="cast" element={<AsyncCast />} />
            <Route path="reviews" element={<AsyncReviews />} />
          </Route>
          <Route path="*" element={<Navigate to={'/'} />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
