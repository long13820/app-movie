import React from "react";
import useSWR from "swr";
import MovieList from "../components/movie/MovieList";
import { fetcher } from "../config";
const MoviePage = () => {
  const { data } = useSWR(
    "https://api.themoviedb.org/3/movie/popular?api_key=2fdfc54a0081fa603e94434cd55c101b",
    fetcher
  );
  const movies = data?.results || [];
  return (
    <div className="py-10">
      <div className="grid grid-cols-4 gap-10">
          {movies.length > 0 && movies}
      </div>
    </div>
  );
};

export default MoviePage;
