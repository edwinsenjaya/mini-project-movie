import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNowPlaying } from "../store/action";
// import InfiniteScroll from "react-infinite-scroll-component";

import Card from "../components/Card";

function Home() {
  const dispatch = useDispatch();
  // let nextPage = 1;
  // const { nowPlayingMovies, errorMessage } = useSelector((state) => state);
  // const [movies, setMovies] = useState(nowPlayingMovies);

  useEffect(() => {
    dispatch(fetchNowPlaying());
  }, []);

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
      </div>
      <div className="row">
        <div className="col-12">
          <div className="row row-cols-1 row-cols-md-4 g-4 mb-3">
            <Card />
          </div>
          {/* <InfiniteScroll
            dataLength={movies?.length}
            next={() => {
              console.log(movies, "mov");
              nextPage++;
              dispatch(fetchNowPlaying(nextPage));
              setMovies([...movies, nowPlayingMovies]);
            }}
            hasMore={true}
            loader={<h4 className="text-white">Loading...</h4>}
            height={1000}
            endMessage={
              <p style={{ textAlign: "center" }}>
                <b>Yay! You have seen it all</b>
              </p>
            }
          >
            {movies.map((el, index) => (
              <div className="row row-cols-1 row-cols-md-4 g-4 mb-3">
                <Card />
              </div>
            ))}
          </InfiniteScroll> */}
        </div>
      </div>
    </div>
  );
}

export default Home;
