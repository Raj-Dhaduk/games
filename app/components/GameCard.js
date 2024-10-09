"use client";
import Image from "next/image";
import PropTypes from "prop-types";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardFooter } from "../components/ui/card";
import { Button } from "../components/ui/button";

export default function GameCard({
  id,
  title,
  description,
  thumb,
  category,
  tags,
}) {
  const router = useRouter();

  const handlePlay = () => {
    router.push(`/game/${id}`);
  };

  return (
    <Card className="w-full max-w-sm">
      <CardContent className="p-4">
        <Image
          src={thumb}
          alt={title}
          width={512}
          height={384}
          className="w-full h-48 object-cover rounded-md"
        />
        <h2
          style={{ fontSize: "20px" }}
          className=" font-bold mt-2 line-clamp-1"
        >
          {title}
        </h2>
        <p className="text-sm text-gray-600 mt-1 line-clamp-2">{description}</p>
        <p className="text-sm text-purple-400-600 mt-3 line-clamp-2">
          Category: {category}
        </p>
        <p className="text-sm text-purple-400-600 mt-3 line-clamp-1">
          Tags: {tags}
        </p>
      </CardContent>
      <CardFooter>
        <Button
          onClick={handlePlay}
          className="w-full  px-4 py-2 text-white bg-black-600 rounded-md  hover:border:
        hover:bg-white hover:text-black 
        transition-colors duration-200"
        >
          Play Now
        </Button>
      </CardFooter>
    </Card>
  );
}

GameCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  thumb: PropTypes.string.isRequired,
};
