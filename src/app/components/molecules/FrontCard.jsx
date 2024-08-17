import React from "react";
import Image from "next/image";


function FrontCard(props) {
  const { title, year, poster, rating } = props;
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <Image src={poster} alt={title} className="w-full rounded-xl shadow" width={220} height={310} />
      <h1 className="absolute text-lg font-semibold text-center top-2 text-white px-2">
        {title} ({year})
      </h1>
      
      <div className="absolute right-4 bottom-4 rounded-lg bg-yellow-500 p-2 text-center text-black font-semibold w-10 h-10 justify-center">
        {rating}
      </div>
      
    </div>
  );
}

export default FrontCard;
