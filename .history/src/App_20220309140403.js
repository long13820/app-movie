import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import "swiper/scss";
import Main from "./components/movie/layout/Main";
function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Main></Main>}>
          <Route path="">

          </Route>
        </Route>
      </Routes>
    </Fragment>
  );
}

export default App;
