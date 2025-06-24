import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MovieContainer from "./components/movies/MovieContainer";
import Favorites from "./components/movies/Favorites";
import "./index.css";

function App() {
  return (
    <Router>
      <div>
        <header>
          {/* Replace glow-text header with animated logo-title */}
          <h1 className="logo-title">🎬 Movie Explorer</h1>

          <nav>
            <Link to="/">Home</Link> | <Link to="/favorites">Favorites</Link>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<MovieContainer />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </main>

        <footer>
          <p>© 2025 Movie Explorer</p>
          <p>
            Data provided by{" "}
            <a href="https://www.omdbapi.com/" target="_blank" rel="noopener noreferrer">
              OMDb API
            </a>
          </p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
