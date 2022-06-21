import React, { useEffect, useState } from "react";
import MovieCard from "./components/MovieCard";
import NotFound from "./components/NotFound";
import "./App.css";

const API_URL = "https://www.omdbapi.com?apikey=cc123a73";

function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [error, setError] = useState("False");
  // const [error, setError] = useState("");
  const serachMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setError(data.Response);
    if (data.Response === "True") {
      setMovies(data.Search);
      console.log(error);
    } else {
      console.log(error);
    }
    console.log("Search Completed");
  };
  useEffect(() => {}, []);

  return (
    <div>
      <div className="app">
        <h2>Movie Man</h2>
        <div className="search">
          <input
            type="text"
            placeholder="Search for movies"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          {search.length > 1 ? (
            <img
              src="https://cdn0.iconfinder.com/data/icons/TWG_Retina_Icons/64/magnifier.png"
              alt="Search-icon"
              onClick={() => {
                console.log("Loading");
                serachMovies(search);
              }}
            />
          ) : (
            ""
          )}
        </div>
        {error === "Fasle" ? (
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
    </div>
  );
}

export default App;
