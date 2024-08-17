import React from "react";
import CardMovie from "../molecules/CardMovie";

function ListMovie(props) {
  const { contents = [], onClick } = props;
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {contents.map((content) => (
        <CardMovie
          key={content.id}
          content={content}
          onClick={onClick}
          href={
            "/" +
            content.title
              .trim()
              .replace(/\s+/g, "-")
              .toLowerCase()
              .replace(/[^a-z0-9]/g, "") +
            "/" +
            content.id
          }
        />
      ))}
    </div>
  );
}

export default ListMovie;
