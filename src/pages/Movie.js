import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovie, fetchSimilar } from "../store/action";
import { format } from "date-fns";
import SimilarCard from "../components/SimilarCard";

function Photo() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { movieData } = useSelector((state) => state);
  const imageUrl = `https://image.tmdb.org/t/p/w400`;

  useEffect(() => {
    dispatch(fetchMovie(id));
    dispatch(fetchSimilar(id));
  }, [movieData]);

  if (!movieData) {
    return (
      <section className="page text-danger">
        <div className="container d-flex flex-column vw-100">
          <div className="row mb-5">
            <h1 className="display-1 text-center fw-bold">Movie Details</h1>
          </div>
          <div className="row d-flex ">
            <div className="col-6">
              <div className="d-flex justify-content-center">
                <div
                  className="spinner-grow"
                  style={{ width: "4rem", height: "4rem" }}
                  role="status"
                >
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            </div>
            <div className="col-6"></div>
          </div>
        </div>
      </section>
    );
  } else
    return (
      <section className="page text-danger">
        <div className="container d-flex flex-column">
          <div className="row mb-5">
            <h1 className="display-3 text-center fw-bold">{movieData.title}</h1>
          </div>
          <div className="row">
            <div className="col-6 ">
              <img
                src={`${imageUrl}${movieData.poster_path}`}
                alt="photograph"
                className="img-fluid mb-4 border border-danger border-1 rounded"
              />
            </div>
            <div className="col-6 d-flex flex-column">
              <div>
                <h3 className="mb-5 text-center">{movieData.overview}</h3>
                <p className="mt-5 mb-3 fs-4">
                  Release Date:{" "}
                  {movieData.release_date
                    ? format(new Date(movieData.release_date), "d MMMM y")
                    : movieData.release_date}
                </p>
                <p className="mb-3 fs-4">
                  Runtime: {movieData.runtime} minutes
                </p>
                <p className="mb-3 fs-4">Rating: {movieData.vote_average}</p>
                <p className="mb-3 fs-4">Vote Count: {movieData.vote_count}</p>
              </div>
              <div>
                <div className="row justify-content-center">
                  <Link
                    to="/"
                    style={{ height: "50px" }}
                    className="btn btn-light fs-4 mx-auto"
                  >
                    Back to home page
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row mb-5">
            <h1 className="display-3 text-center fw-bold">Similar Movies</h1>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="row row-cols-1 row-cols-md-4 g-4 mb-3">
                <SimilarCard />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Photo;
