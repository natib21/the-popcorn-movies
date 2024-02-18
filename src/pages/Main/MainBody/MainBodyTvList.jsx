import { Info, Play, Plus, Star } from "lucide-react";
import { Link } from "react-router-dom";
import Loader from "../../../Loader/Loader";
import Error from "../../../Error/Error";

function MainBodyTVList({ data, handleWatch, video, isLoading, error }) {
  return (
    <>
      {isLoading && <Loader />}
      {error && <Error />}
      {!isLoading && !error && (
        <li className="tvSeries_list">
          <Link to="./videoTvpage">
            <img
              src={"https://image.tmdb.org/t/p/w500" + data.poster_path}
              alt={data.title}
              className="tvSeries_img"
              onClick={() => video(data.id)}
            />
          </Link>
          <div className="tvSeries_list-main">
            <div className="tvSeries_list-rate">
              <div className="tvSeries_list-rate-imdb">
                <Star color="yellow" size={18} strokeWidth={5} />
                <p>8.4</p>
              </div>
              <div className="tvSeries_list-rate-you">
                <Star color="#515199" size={18} strokeWidth={5} />
              </div>

              {/* this is where we put our ratting */}
            </div>
            <div className="tvSeries_list-btn">
              <h3>{data.original_title || data.original_name}</h3>
              <button onClick={() => handleWatch(data.id)}>
                <Plus color="#6262b4" size={26} strokeWidth={3} />
                <span>WatchList</span>{" "}
              </button>
              <div className="tvSeries_list-btn-two">
                <button
                  className="trailer"
                  onClick={() => console.log(data.id)}
                >
                  <Play color="white" strokeWidth={1} size={18} />
                  <span>Trailer</span>
                </button>
                <Info color="#6262b4" strokeWidth={1} size={18} />
              </div>
            </div>
          </div>
        </li>
      )}
    </>
  );
}

export default MainBodyTVList;
