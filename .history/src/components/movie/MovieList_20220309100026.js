import React, { useEffect, useState } from "react";
import "swiper/scss";
import { Swiper, SwiperSlide } from "swiper/react";
import MovieCard from "./MovieCard";
import useSWR from "swr";
import { fetcher } from "../../config";

// https://api.themoviedb.org/3/movie/now_playing?api_key=2fdfc54a0081fa603e94434cd55c101b

const MovieList = ({ type = "now_playing" }) => {
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/${type}?api_key=2fdfc54a0081fa603e94434cd55c101b`,
    fetcher
  );
  // const [movies, setMovies] = useState([]);

  // useEffect(() => {
  //   if (data && data.results) setMovies(data.results);
  // }, [data]);
  const movies = data ?.results || [];
  return (
    <div className="movie-list">
      <Swiper grabCursor={"true"} spaceBetween={40} slidesPerView={"auto"}>
        {movies.length > 0 &&
          movies.map((item) => (
            <SwiperSlide key={item.id}>
              <MovieCard item={item}></MovieCard>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default MovieList;
