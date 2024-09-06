import React, { useState } from "react";
import MovieCard from "../components/movielist/MovieCard";
import "./HomePage.css";
import Header from "../components/headers/Header";
import { UseMovies } from "../hooks/UseMovies";

const HomePage = () => {
  const {
    popularMovies,
    nowPlayingMovies,
    trendingMovies,
    search,
    fetchTrendingMovies,
    loading,
    error,
  } = UseMovies();
  const [searchQuery, setSearchQuery] = useState("");
  const [trendingTimeWindow, setTrendingTimeWindow] = useState("day"); // Default to "today"

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
  };

  const handleButtonClick = () => {
    search(searchQuery);
  };

  // Handle trending time window change (today or this week)
  const handleTimeWindowChange = (timeWindow) => {
    setTrendingTimeWindow(timeWindow);
    fetchTrendingMovies(timeWindow);
  };

  return (
    <div className="App">
      <div>
        <Header />

        {/* Hero Section */}
        <div className="Hero-section">
          <div className="Hero-text">
            <h1>Welcome.</h1>
            <p>
              Millions of movies, TV shows, and people to discover. Explore now.
            </p>
          </div>
          <div className="Search-bar-container">
            <input
              placeholder="Search for a movie, tv show, person..."
              value={searchQuery}
              onChange={handleSearch}
            />
            <button onClick={handleButtonClick}>Search</button>
          </div>
        </div>

        <div className="Movie-container">
          {popularMovies.map((movie, i) => (
            <MovieCard key={i} propsmovie={movie} />
          ))}
        </div>

        <div className="NowPlaying-section">
          <h2>Now Playing</h2>
          <div className="NowPlaying-container">
            {nowPlayingMovies.map((movie, i) => (
              <MovieCard key={i} propsmovie={movie} />
            ))}
          </div>
        </div>

        <div className="Trending-section">
          <h2>Trending Movies</h2>
          <div className="Trending-controls">
            <button
              className={trendingTimeWindow === "day" ? "active" : ""}
              onClick={() => handleTimeWindowChange("day")}
            >
              Today
            </button>
            <button
              className={trendingTimeWindow === "week" ? "active" : ""}
              onClick={() => handleTimeWindowChange("week")}
            >
              This Week
            </button>
          </div>
          <div className="Trending-container">
            {trendingMovies.map((movie, i) => (
              <MovieCard key={i} propsmovie={movie} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
