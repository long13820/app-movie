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
  if (!data) return null;
  const { backdrop_path, poster_path, title, genres, overview } = data;
  return (
    <div className="py-10">
      <div className="w-full h-[600px] relative mb-10">
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <div
          className="w-full h-full bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${data.backdrop_path})`,
          }}
        ></div>
      </div>
      <div className="w-full h-[400px] max-w-[800px] mx-auto -mt-[200px] relative z-10 pb-10">
        <img
          src={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
          className="w-full h-full object-cover rounded-xl"
          alt=""
        />
        <h1 className="text-center text-4xl font-bold text-white mb-10">
          {title}
        </h1>
        {genres.length > 0 && (
          <div className="flex items-center justify-center gap-x-5 mb-10">
            {genres.map((item) => (
              <span
                className="py-2 px-4 border-primary text-primary border rounded"
                key={item.id}
              >
                {item.name}
              </span>
            ))}
          </div>
        )}
        <p className="text-center leading-relaxed max-w-[600px] mx-auto mb-10 ">
          {overview}
        </p>
        <MovieCredits></MovieCredits>
        <MovieVideos></MovieVideos>
      </div>
    </div>
  );
};

function MovieCredits() {
  const { movieId } = useParams();

  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}`,
    fetcher
  );
  console.log(data);
  if (!data) return null;
  const { cast } = data;
  if (!cast || cast.length <= 0) return null;
  return (
    <div className="py-10">
      <h2 className="text-center text-3xl mb-10">Casts</h2>
      <div className="grid grid-cols-4 gap-5">
        {cast.slice(0, 4).map((item) => (
          <div className="cast-item" key={item.id}>
            <img
              src={`https://image.tmdb.org/t/p/original/${data.profile_path}`}
              className="w-full h-[350px] object-cover rounded-lg mb-3"
              alt=""
            />
            <h3 className="text-xl font-medium">{item.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

function MovieVideos() {
  const { movieId } = useParams();

  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apiKey}`,
    fetcher
  );
  if (!data) return null;
  return <div className="py-10">
    {data.slice(0,5).map(item => (
      
    ))}
  </div>;
}

export default MovieDetailsPage;
