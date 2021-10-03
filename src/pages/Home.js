import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNowPlaying } from "../store/action";

import Card from "../components/Card";

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNowPlaying());
  }, []);
  //   console.log(nowPlayingMovies);

  return (
    <div className="container d-flex flex-column vw-100">
      <div className="row mb-3">
        <h1 className="display-1 text-center text-danger fw-bold mb-3">
          Movies!
        </h1>
        <p className="fs-5 text-danger text-center">
          Browse through our collection of the latest movies now playing in
          theaters!
        </p>
        {/* <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="example"
          />
          <label className="ms-4" for="floatingInput">
            Search anything here!
          </label>
        </div> */}
      </div>
      <div className="row">
        <div className="col-12">
          <div className="row row-cols-1 row-cols-md-4 g-4 mb-3">
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
