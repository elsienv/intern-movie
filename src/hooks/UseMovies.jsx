import { useState, useEffect } from 'react';
import { getMovieList, getNowPlayingMovies, getTrendingMovies, searchMovie } from '../api';

export const UseMovies = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch popular, now playing, and trending movies
  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      try {
        const popularResult = await getMovieList();
        const nowPlayingResult = await getNowPlayingMovies();
        const trendingResult = await getTrendingMovies(); // Default: trending today
        if (Array.isArray(popularResult) && Array.isArray(nowPlayingResult) && Array.isArray(trendingResult)) {
          setPopularMovies(popularResult);
          setNowPlayingMovies(nowPlayingResult);
          setTrendingMovies(trendingResult);
        } else {
          setError('Failed to fetch movies');
        }
      } catch (error) {
        setError('Failed to fetch movies');
      } finally {
        setLoading(false);
      }
    };

    
    fetchMovies();
  }, []);
  

  // Fetch trending movies based on the time window (today or this week)
  const fetchTrendingMovies = async (timeWindow) => {
    try {
      const result = await getTrendingMovies(timeWindow);
      if (Array.isArray(result)) {
        setTrendingMovies(result);
      } else {
        console.error("Failed to fetch trending movies");
      }
    } catch (error) {
      console.error("Failed to fetch trending movies:", error);
    }
  };

  const search = async (q) => {
    if (q.length > 3) {
      try {
        const query = await searchMovie(q);
        if (query && Array.isArray(query.results)) {
          setPopularMovies(query.results);
        } else {
          console.error("Search result does not contain an array in 'results':", query);
        }
      } catch (error) {
        console.error("Search failed:", error);
      }
    }
  };

  return { popularMovies, nowPlayingMovies, trendingMovies, search, fetchTrendingMovies, loading, error };
};
