import React from "react";
import useSWR from "swr";
import MovieList from "../components/movie/MovieList";
import { fetcher } from "../config";
const MoviePage = () => {
  const { data } = useSWR(
    "https://api.themoviedb.org/3/movie/popular?api_key=2fdfc54a0081fa603e94434cd55c101b",
    fetcher
  );
  console.log(data);
  return <div className="py-10"></div>;
};

export default MoviePage;
