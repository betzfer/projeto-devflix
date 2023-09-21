import { useEffect } from "react";
import { useState } from "react";

import searchIcon from "../assets/search.svg";

import "https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js";
import "./App.css";
import MovieCard from "../componentes/movieCard/movieCard";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const apiKey = "e4d577fa";
  const apiUrl = `https://omdbapi.com/?apikey=${apiKey}`;

  useEffect(() => {
    searchMovies("Digimon");
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${apiUrl}&s=${title}`);
    const data = await response.json();

    console.log(data);
    setMovies(data.Search);
  };
  const handleKeyPress = (e) => {
    e === "Enter" && searchMovies(searchTerm);
    searchMovies(searchTerm);
  };

  return (
    <div id="app">
      <div className="logo">DEVFLIX</div>

      <div className="search">
        <svg className="barrinha"
          xmlns="http://www.w3.org/2000/svg"
          width="90"
          height="90"
          viewBox="0 0 90 90"
          fill="none"
          placeholder="barrinhas"
          onClick={() => tags()}
        >
          <path
            d="M15 22.5H75V30H15V22.5ZM15 41.25H75V48.75H15V41.25ZM75 60H15V67.5H75V60Z"
            fill="white"
          />
        </svg>
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder="Pesquisar por filmes"
        />
        <img
          src={searchIcon}
          alt="Icone de pesquisa"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard key={movie.imdbID} movies={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>Nenhum filme encontrado 😏</h2>
        </div>
      )}
    </div>
  );
};

export default App;
