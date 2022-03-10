import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import "swiper/scss";
import Banner from "./components/movie/banner/Banner";
function App() {
  return (
    <Fragment>
      <Routes>
        <Route  path="/" />
      </Routes>
      {/* <Banner></Banner> */}
    </Fragment>
  );
}

export default App;
