import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { errorHandler } from "../store/action";
import Swal from "sweetalert2";
import { format } from "date-fns";

function SimilarCard() {
  const dispatch = useDispatch();
  const { similarMovies, errorMessage } = useSelector((state) => state);
  const imageUrl = `https://image.tmdb.org/t/p/original`;

  if (errorMessage) {
    Swal.fire("", errorMessage, "error");
    dispatch(errorHandler(""));
  }

  if (similarMovies.length === 0) {
    return (
      <div className="d-flex text-center">
        <div
          className="spinner-grow"
          style={{ width: "8rem", height: "8rem" }}
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  } else {
    return (
      <>
        {similarMovies?.map((movie) => {
          return (
            <div key={movie.id} className="col">
              <div className="card h-100 border border-dark border-2">
                <div className="row">
                  <Link to={`/movie/${movie.id}`}>
                    <img
                      src={`${imageUrl}${movie.poster_path}`}
                      className="card-img-top"
                      alt=""
                    />
                  </Link>
                </div>

                <div className="row card-body d-flex flex-column justify-content-end mx-auto text-dark">
                  <h6 className="card-title text-center fw-bold">
                    {movie.title}
                  </h6>
                  <span className="rounded text-center fw-bold fst-italic bg-warning flex-inline mb-2 fs-6">
                    Release: {format(new Date(movie.release_date), "d MMMM y")}
                  </span>
                  <p className="card-text text-center lh-sm text-capitalize">
                    Rating: {movie.vote_average}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  }
}

export default SimilarCard;
