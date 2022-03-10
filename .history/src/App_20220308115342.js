import { Fragment } from "react";
import {Nav} from 'react-router-dom';
function App() {
  return <Fragment>
    <header className="header flex items-center justify-center gap-x-5 text-white py-10">
      <span>Home</span>
      <span>Movies</span>
    </header>
  </Fragment>;
}

export default App;
