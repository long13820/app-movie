import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import MovieCard from "./MovieCard";
import useSWR from "swr";
import { fetcher } from "../../config";
// https://api.themoviedb.org/3/movie/now_playing?api_key=2fdfc54a0081fa603e94434cd55c101b

const MovieList = () => {
  const { data, error } = useSWR(
    "https://api.themoviedb.org/3/movie/now_playing?api_key=2fdfc54a0081fa603e94434cd55c101b",
    fetcher
  );
  const [movies, setMovies] = useState([]);

  useEffect(()=> {
      if(data && data.results) setMovies(data.results);
  }, [data])
  
  return (
    <div className="movie-list">
      <Swiper grabCursor={"true"} spaceBetween={40} slidesPerView={"auto"}>
        {movies.length > 0 && movies.map((item) => {

        })}
        <SwiperSlide>
          <MovieCard></MovieCard>
        </SwiperSlide>
       
      </Swiper>
    </div>
  );
};

export default MovieList;
