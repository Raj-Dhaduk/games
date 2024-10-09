"use client";
import GameCard from "./GameCard";

export default function GameGrid({ games }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
      {games.map((game) => (
        <GameCard
          key={game.id}
          id={game.id}
          title={game.title}
          description={game.description}
          category={game.category}
          tags={game.tags}
          thumb={game.thumb}
          url={game.url}
        />
      ))}
    </div>
  );
}


