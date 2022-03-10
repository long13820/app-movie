import React from "react";
import { useParams } from "react-router-dom";

const MovieDetailsPage = () => {
  const {mov} = useParams();
  console.log(params);
  return <div>Movie Details Page</div>;
};

export default MovieDetailsPage;
