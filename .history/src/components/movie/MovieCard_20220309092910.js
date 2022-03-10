import React from "react";

const MovieCard = ({item}) => {

  const {title, vote_average, release_date, poster_path} = item;
  return (
    <div className="movie-card flex flex-col rounded-lg p-3 bg-slate-800 text-white">
      <img
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        alt=""
        className="w-full h-[250px] object-cover rounded-lg mb-5"
      />
      <div className="flex flex-col flex-1"></div>
     
    </div>
  );
};

export default MovieCard;
