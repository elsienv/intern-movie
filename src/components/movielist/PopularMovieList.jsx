import React from 'react';
import MovieCard from './MovieCard';

const PopularMovieList = ({ movies }) => {
  if (!Array.isArray(movies)) {
    return <div>Error: Movie list is not available</div>;
  }

  return movies.map((movie, i) => (
    <MovieCard key={i} movie={movie} />
  ));
};

export default PopularMovieList;
