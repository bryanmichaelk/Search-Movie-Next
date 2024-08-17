import React from "react";
import FrontCard from "./FrontCard";
import BackCard from "./BackCard";
import ReactCardFlip from "react-card-flip";
import { useState } from "react";
import Link from "next/link";

function CardMovie(props) {
  const { content, onClick, href } = props;
  const { id, title, year, genre, rating, director, actors, poster, plot } =
    content;

  const [isFlipped, setIsFlipped] = useState(false);

  const handleMouseEnter = () => {
    setIsFlipped(true);
  };

  const handleMouseLeave = () => {
    setIsFlipped(false);
  };
  return (
    <Link href={href}>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="w-[220px] h-[310px]"
      >
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
          <FrontCard
            title={title}
            year={year}
            poster={poster}
            rating={rating}
          />
          <BackCard
            id={id}
            plot={plot}
            genre={genre}
            rating={rating}
            director={director}
            actors={actors}
            onClick={onClick}
          />
        </ReactCardFlip>
      </div>
    </Link>
  );
}

export default CardMovie;
