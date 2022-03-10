import React from "react";

const MovieCard = ({}) => {
  return (
    <div className="movie-card rounded-lg p-3 bg-slate-800 text-white">
      <img
        src="https://i.ytimg.com/vi/4eDADh0cVjc/maxresdefault.jpg"
        alt=""
        className="w-full h-[250px] object-cover rounded-lg mb-5"
      />
      <h3 className=" text-xl font-bold mb-3">Encanto: Wonderful Land</h3>
      <div className="flex items-center justify-between text-sm opacity-50 mb-10 ">
        <span>2017</span>
        <span>7.4</span>
      </div>
      <button className="py-3 px-6 rounded-lg capitalize bg-primary w-full">
        Watch now
      </button>
    </div>
  );
};

export default MovieCard;
