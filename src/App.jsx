import React, { useEffect, useState } from "react";
import NotFound from "./components/NotFound";
import MovieCard from "./components/MovieCard";
import Search from "./components/Search";
import TrendCard from "./components/TrendCard";
import axios from "axios";
import "./App.css";

const OMDB_API_URL = "https://www.omdbapi.com?apikey=cc123a73";
const TMDB_API_KEY = "5c18f122ec393a55f5b7d804a52fad34";
function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");
  const [trending, setTrending] = useState([]);
  const searchMovies = async (title) => {
    const response = await fetch(`${OMDB_API_URL}&s=${title}`);
    const data = await response.json();
    setError(data.Response);
    if (data.Response === "True") {
      setMovies(data.Search);
    } else {
      setError(data.Response);
    }
    console.log("Search Completed");
  };
  const findTrending = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/trending/all/day?api_key=${TMDB_API_KEY}`
      )
      .then(function (trending) {
        setTrending(trending.data.results);
      });
  };
  useEffect(() => {
    findTrending();
  }, []);

  return (
    <div>
      <div className="app">
        <h2>Movie Man</h2>
        <Search
          search={search}
          setSearch={setSearch}
          searchMovies={searchMovies}
        />
      </div>
      <div className="search-results">
        {error === "False" ? (
          <NotFound />
        ) : (
          <div>
            {movies.length > 0 ? (
              <div className="container">
                {movies.map((movie) => (
                  <MovieCard key={movie.imdbID} movie={movie} />
                ))}
              </div>
            ) : (
              <div className="empty">{/* add Trending here */}</div>
            )}
          </div>
        )}
      </div>
      <div>
        <p className="lead">Trending Now</p>
        <div className="container">
          {trending.map((trend) => (
            <TrendCard key={trend.id} trend={trend} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
