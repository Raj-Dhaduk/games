// pages/index.js
"use client";
import { useState } from "react";
import gamesData from "./data/games.json";

import Header from "./components/Header";
import Footer from "./components/Footer";
import GameGrid from "./components/GameGrid";

export default function Home() {
  const [filteredGames, setFilteredGames] = useState(gamesData);

  const handleSearch = (searchTerm) => {
    const lowercasedSearch = searchTerm.toLowerCase();
    const filtered = gamesData.filter(
      (game) =>
        game.title.toLowerCase().includes(lowercasedSearch) ||
        game.category.toLowerCase().includes(lowercasedSearch)
    );
    setFilteredGames(filtered);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header onSearch={handleSearch} showSearchBar={true} />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">
          {filteredGames.length === gamesData.length
            ? "Featured Games"
            : "Search Results"}
        </h1>
        <GameGrid games={filteredGames} />
        {filteredGames.length === 0 && (
          <p className="text-center text-gray-500 mt-8">
            No games found. Try a different search term.
          </p>
        )}
      </main>
      <Footer />
    </div>
  );
}
