import { useEffect, useState } from "react";
import Loader from "../../Loader/Loader";
import Error from "../../Error/Error";
import { useMovies } from "../../services/useMovie";

function PopUp({ X, movie, setPopup }) {
  const handleCancel = () => {
    setPopup(false);
  };

  const { movieF, isLoading, error } = useMovies(movie, "movie");

  return (
    <section className="pop_up">
      <div className="pop_up-disc">
        <div className="pop_up-disc-sec">
          <button className="pop_up-disc-sec-btn" onClick={handleCancel}>
            <X color="black" size={28} strokeWidth={1} />
          </button>
        </div>
        <ul>
          {movieF.map((data) => (
            <li key={data.id}>
              {isLoading && <Loader />}
              {error && <Error />}
              {!isLoading && !error && (
                <div className="pop_up-disc-ul">
                  <div className="pop_up-disc-ul-sub">
                    <img
                      src={"https://image.tmdb.org/t/p/w500" + data.poster_path}
                    />
                    <div className="pop_up-disc-ul-sub-disc">
                      <h2>{data.title}</h2>
                      <div className="time">
                        <span>{data.release_date}</span>
                        <span>{data.runtime}</span>
                        <span>pg-13</span>
                        <div>action{" . "}Drama</div>
                      </div>
                      <div className="rate">
                        <span>⭐{data.vote_average}</span>
                        <span>⭐ your rate</span>
                      </div>
                    </div>
                  </div>
                  <div className="para">
                    <p>{data.overview}</p>
                  </div>
                  <div className="actors-directors">
                    <h2>
                      Director <span>{data.director}</span>
                    </h2>
                    <h2>
                      Stars <span>{data.actors}</span>{" "}
                    </h2>
                  </div>

                  <div className="pop_up-disc-ul-btn">
                    <button>Trailer</button>
                    <button>WatchList</button>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default PopUp;
