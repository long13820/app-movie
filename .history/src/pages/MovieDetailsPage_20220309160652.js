import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import fet

const MovieDetailsPage = () => {
  const {movieId} = useParams();
  console.log(movieId);
  return <div>Movie Details Page</div>;
};

export default MovieDetailsPage;
