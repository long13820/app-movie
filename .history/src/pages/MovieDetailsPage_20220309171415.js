import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { apiKey, fetcher } from "../config";

const MovieDetailsPage = () => {
  const { movieId } = useParams();

  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`,
    fetcher
  );
  console.log(data);
  return (
    <Fragment>
      <div className="w-full h-[600px] relative">
        <div className="abso"></div>
        <div
          className="w-full h-full bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${data.backdrop_path})`,
          }}
        ></div>
      </div>
    </Fragment>
  );
};

export default MovieDetailsPage;
