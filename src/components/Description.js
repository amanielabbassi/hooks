import React from "react";
import { Link } from "react-router-dom";

const Description = ({ movie, match }) => {
  const film=movie.find((el) => el.id === Number(match.params.id));

  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={film.video}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <Link to="/"><button>Go Back</button></Link>
    </div>
  );
};

export default Description;
