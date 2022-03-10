import React from "react";
import useSWR from "swr";
import MovieList from "../components/movie/MovieList";

const MoviePage = () => {
    const {data} = useSWR();
  return (
    <div className="py-10">
      
    </div>
  );
};

export default MoviePage;
