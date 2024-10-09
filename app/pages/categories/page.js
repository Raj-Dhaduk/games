"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import gamesData from "../../data/games.json";
import Header from "./../../components/Header";
import Footer from "./../../components/Footer";

const categories = [...new Set(gamesData.map((game) => game.category))];

export default function CategoriesPage() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const filteredGames = gamesData.filter(
    (game) => game.category === selectedCategory
  );

  return (
    <div className="flex flex-col min-h-screen">
      <Header showSearchBar={false} />

      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Game Categories</h1>

        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setSelectedCategory(category)}
              variant={selectedCategory === category ? "default" : "outline"}
              className="text-sm"
            >
              {category}
            </Button>
          ))}
        </div>

        <h2 className="text-2xl font-semibold mb-4">
          {selectedCategory} Games
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {filteredGames.map((game) => (
            <Card
              key={game.id}
              className="hover:shadow-lg transition-shadow duration-300"
            >
              <CardContent className="p-3">
                <div className="relative aspect-video mb-2">
                  <Image
                    src={game.thumb}
                    alt={game.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-md"
                  />
                </div>
                <h3 className="text-sm font-semibold mb-1 line-clamp-1">
                  {game.title}
                </h3>
                <p className="text-xs text-gray-600 mb-2 line-clamp-2">
                  {game.description}
                </p>
                <Link href={`/game/${game.id}`}>
                  <Button
                    className="w-full text-xs px-2 py-1"
                    variant="outline"
                  >
                    Play Now
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
