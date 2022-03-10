import React, { useEffect, useState } from "react";
import { fetcher } from "../../../config";
import useSWR from "swr";
import { Swiper, SwiperSlide } from "swiper/react";
const Banner = () => {
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=2fdfc54a0081fa603e94434cd55c101b`,
    fetcher
  );
  const movies = data?.result || [];
  return (
    <section className="banner h-[500px] page-container mb-20 ">
     
    </section>
  );
};
function BannerItems() {
    return 
}
export default Banner;
