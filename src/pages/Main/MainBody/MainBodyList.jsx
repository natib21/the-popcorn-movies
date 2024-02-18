import { Check, Info, Play, Plus, Star } from "lucide-react";
import { Link } from "react-router-dom";
import Loader from "../../../Loader/Loader";
import Error from "../../../Error/Error";
import { useState } from "react";

function MainBodyList({ data, handleWatch, video, isLoading, error }) {
  const [click, setClick] = useState(false);

  return (
    <>
      {isLoading && <Loader />}
      {error && <Error />}
      {!isLoading && !error && (
        <li className="tvSeries_list">
          <Link to="./videopage">
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
                <Star color="yellow" strokeWidth={7} size={12} />
                <p>{data.vote_average.toFixed(2)}</p>
              </div>
              <div className="tvSeries_list-rate-you">
                <Star color="#515199" size={15} strokeWidth={5} />
              </div>

              {/* this is where we put our ratting */}
            </div>
            <div className="tvSeries_list-btn">
              <h3>{data.original_title || data.original_name}</h3>
              <button onClick={() =>
                handleWatch(data.id)}
              >
                {click ? <Check color="green" size={22} strokeWidth={3} /> : <Plus color="#6262b4" size={22} strokeWidth={3} />}
                <span>WatchList</span>
              </button>
              <div className="tvSeries_list-btn-two">
                <Link to="./videopage">
                  <button
                    className="trailer"
                    onClick={() => video(data.id)}
                  >
                    <Play color="white" strokeWidth={1} size={22} />
                    <span>Trailer</span>
                  </button>
                </Link>
                <Info color="#6262b4" strokeWidth={1.5} size={18} />
              </div>
            </div>
          </div>
        </li >
      )
      }
    </>
  );
}

export default MainBodyList;
