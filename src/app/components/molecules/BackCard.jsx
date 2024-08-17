import React from "react";
import Button from "../atom/Button";

function BackCard(props) {
  const { id, plot, genre, rating, director, actors, onClick } = props;
  
  return (
    <div className="w-full h-[310px] flex flex-col items-center justify-center bg-[#003366] p-6 rounded-xl text-white">
      <div className="flex flex-col space-y-2 text-justify">
        <p className="text-sm font-medium ">Genre: <span className="font-light">{genre.join(", ")}</span></p>
        {/* <div>
            <p className="text-sm font-medium">Plot:</p>
            <p className="text-sm font-light">{plot}</p>
        </div> */}
        <p className="text-sm font-medium ">Rating: <span className="font-light">{rating}</span></p>
        <p className="text-sm font-medium ">Actors: <span className="font-light">{actors.join(", ")}</span></p>
      </div>
    </div>
  );
}

export default BackCard;
