import React from 'react';
import './MovieCard.css'; // Impor file CSS khusus untuk MovieCard

const MovieCard = ({ propsmovie }) => (
  <div className="Movie-wrapper">
    <img className="Movie-image" src={`${process.env.REACT_APP_BASEIMGURL}/${propsmovie.poster_path}`} alt={propsmovie.title} />
    <div className="Movie-content">
      <div className="Movie-title">{propsmovie.title}</div>
      <div className="Movie-date">Release: {propsmovie.release_date}</div>
      <div className="Movie-rate">Rating: {propsmovie.vote_average}</div>
    </div>
  </div>
);

export default MovieCard;
