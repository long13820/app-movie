import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import "swiper/scss";
import Main from "./components/movie/layout/Main";
import HomePage from "./pages/HomePage";
import Banner from "./components/movie/banner/Banner";
function App() {
  return (
    <Fragment>
      <Routes>
        <Route element={<Main></Main>}>
          <Route
            path="/"
            element={
              <>
                <Banner></Banner>
                <HomePage></HomePage>
              </>
            }
          ></Route>
          <Route path="/:movies" element={<HomePage />}></Route>
        </Route>
      </Routes>
    </Fragment>
  );
}

export default App;
