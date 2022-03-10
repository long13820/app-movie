import React, { useEffect, useState } from "react";
import { fetcher } from "../../../config";
import useSWR from "swr";
import { Swiper, SwiperSlide } from "swiper/react";
const Banner = () => {
  const { data } = useSWR(
    "https://api.themoviedb.org/3/movie/upcoming?api_key=2fdfc54a0081fa603e94434cd55c101b",
    fetcher
  );
  const movies = data?.result || [];
  return (
    <section className="banner h-[500px] page-container mb-20 ">
      <Swiper grabCursor="true" slidesPerView={"auto"}>
        {movies.length > 0 &&
          movies.map((item) => (
            <SwiperSlide key={item.id}>
              <BannerItems item={item}></BannerItems>
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
};
function BannerItems({ item }) {
    const { title, vote_average, release_date, poster_path } = item;
  return (
    <div className="w-full h-full rounded-lg relative">
      <div className="overlay absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)] rounded-lg"></div>
      <img
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        alt=""
        className="w-full h-full object-cover rounded-lg"
      />
      <div className="absolute left-5 bottom-5 w-full text-white">
        <h2 className="font-bold text-3xl mb-5">Avengers : Endgame</h2>
        <div className="flex items-center gap-x-3 mb-8">
          <span className="p-4 border border-white rounded-md">Adventure</span>
          <span className="p-4 border border-white rounded-md">Adventure</span>
          <span className="p-4 border border-white rounded-md">Adventure</span>
        </div>
        <button className="py-3 px-6 rounded-lg bg-primary text-white font-medium">
          Watch Now
        </button>
      </div>
    </div>
  );
}
export default Banner;
