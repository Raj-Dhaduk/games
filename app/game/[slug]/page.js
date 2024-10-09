"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import gamesData from "../../data/games.json";

export default function GamePage() {
  const { slug } = useParams();
  const [game, setGame] = useState(null);

  useEffect(() => {
    const foundGame = gamesData.find((g) => g.id === slug);
    setGame(foundGame);
  }, [slug]);

  if (!game) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full h-screen flex flex-col">
      <h1 className="text-2xl font-bold p-4">{game.title}</h1>
      <iframe src={game.url} className="flex-grow w-full" title={game.title} />
    </div>
  );
}
