import React from 'react';
import MovieCard from './MovieCard';

const PopularMovieList = ({ movies }) => {
  // kalau movies bukan array, tampilkan pesan error
  if (!Array.isArray(movies)) {
    return <div>Error: Movie list is not available</div>;
  }

  // mapping setiap film dalam array movies menjadi MovieCard
  return movies.map((movie, i) => (
    <MovieCard key={i} movie={movie} />
  ));
};

export default PopularMovieList;
