// src/App.js
import React, { useState } from 'react';
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import AddMovie from './components/AddMovie';
import './App.css';

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: 'Inception',
      description: 'A mind-bending thriller',
      posterURL: 'https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p7825626_p_v8_ae.jpg',
      rating: 5,
    },
    {
      title: 'The Matrix',
      description: 'A sci-fi classic',
      posterURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfSjSWOCaw5dnDL2GT1zFd9RMCgUGw5Q2Cfg&s',
      rating: 4,
    },
    {
      title: 'Predestination',
      description: 'A temporal adventure',
      posterURL: 'https://m.media-amazon.com/images/M/MV5BMTM3YzdkOTItYTljYi00NTljLTllN2MtODMyNDlkODAxNjUzXkEyXkFqcGdeQXVyMTQxNzE3ODA3._V1_.jpg',
      rating: 4,
    },
    {
      title: 'Molly\'s Game',
      description: 'A true story of an underground poker game',
      posterURL: 'https://m.media-amazon.com/images/I/91QIcXonmyL._AC_UF1000,1000_QL80_.jpg',
      rating: 4,
    },
    {
      title: 'Mad Max: Fury Road',
      description: 'A true mad road saga',
      posterURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf2xrXQlp11iTelPfyt9LUVFBWCPgzwrkw1g&s',
      rating: 4,
    },
  ]);

  const [filteredMovies, setFilteredMovies] = useState(movies);

  const addMovie = (movie) => {
    const newMovies = [...movies, movie];
    setMovies(newMovies);
    setFilteredMovies(newMovies);
  };

  const filterMovies = ({ title, rating }) => {
    let filtered = movies;

    if (title) {
      filtered = filtered.filter((movie) =>
        movie.title.toLowerCase().includes(title.toLowerCase())
      );
    }

    if (rating) {
      filtered = filtered.filter((movie) => movie.rating >= rating);
    }

    setFilteredMovies(filtered);
  };

  return (
    <div className="app">
      <h1>Movie App</h1>
      <Filter onFilter={filterMovies} />
      <AddMovie onAdd={addMovie} />
      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default App;
