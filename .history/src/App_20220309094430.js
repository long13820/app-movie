import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import MovieCard from "./components/movie/MovieCard";

import "swiper/scss";
import MovieList from "./components/movie/MovieList";
function App() {
  return (
    <Fragment>
      <header className="header flex items-center justify-center gap-x-5 text-white py-10 mb-5">
        <span className="text-primary">Home</span>
        <span>Movies</span>
      </header>

      <section className="banner h-[500px] page-container mb-20 ">
        <div className="w-full h-full rounded-lg relative">
          <div className="overlay absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)] rounded-lg"></div>
          <img
            src="https://nld.mediacdn.vn/2019/4/25/3515432-endgamedek-15561710302491765206118.jpg"
            alt=""
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute left-5 bottom-5 w-full text-white">
            <h2 className="font-bold text-3xl mb-5">Avengers : Endgame</h2>
            <div className="flex items-center gap-x-3 mb-8">
              <span className="p-4 border border-white rounded-md">
                Adventure
              </span>
              <span className="p-4 border border-white rounded-md">
                Adventure
              </span>
              <span className="p-4 border border-white rounded-md">
                Adventure
              </span>
            </div>
            <button className="py-3 px-6 rounded-lg bg-primary text-white font-medium">
              Watch Now
            </button>
          </div>
        </div>
      </section>

      <section className="movies-layout page-container pb-20">
        <h2 className="capitalize text-white mb-10 text-3xl font-bold">
          Now playing
        </h2>
        <MovieList />
      </section>

      <section className="movies-layout page-container pb-20">
        <h2 className="capitalize text-white mb-10 text-3xl font-bold">
          Top rated
        </h2>
        <MovieList type="top_rated"/> 
      </section>

      <section className="movies-layout page-container pb-20">
        <h2 className="capitalize text-white mb-10 text-3xl font-bold">
          Trending
        </h2>
       <MovieList type=""/>
      </section>
    </Fragment>
  );
}

export default App;
