import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { fetcher } from "../config";

const MovieDetailsPage = () => {
  const {movieId} = useParams();
  
  const {data ,error} =useSWR("https://api.themoviedb.org/3/movie/${movie_id}?api_key=2fdfc54a0081fa603e94434cd55c101b",fetcher)
  console.log(data);
  return <div>Movie Details Page</div>;
};

export default MovieDetailsPage;
