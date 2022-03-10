import React from "react";
import useSWR from "swr";
import MovieList from "../components/movie/MovieList";

const MoviePage = () => {
    const {data} = useSWR(  "https://api.themoviedb.org/3/movie/${type}?api_key=2fdfc54a0081fa603e94434cd55c101b",
    fetcher);
  return (
    <div className="py-10">
      
    </div>
  );
};

export default MoviePage;
