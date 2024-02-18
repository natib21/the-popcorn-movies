import { Star, XCircle } from "lucide-react";
import "./WatchList.scss";
import Footer from "../pages/Main/Footer/Footer";
import { useState } from "react";

const API_KEY = "ce90665c6e0e317e12bc4e5521b10452";

function WatchList({ watch, cancel, delate }) {
  const [watched, setWatched] = useState(watch);

  const fetchWached = watched.filter((ele) => {
    return ele !== undefined;
  });
  const idF = fetchWached.map(id => id);




  return (
    <div className="watchlist">
      <section className="watchlist_header">
        <div className="watchlist_header-title">
          <div className="watchlist_header-title-left">
            <h1>Your Watchlist</h1>
            <h3>private</h3>
          </div>
          <div className="watchlist_header-title-right">
            <span>🔗</span>
            <span>
              {fetchWached.length}
              <span className="movie">Movies</span>
            </span>
          </div>
        </div>
      </section>
      <section className="watchlist_body">
        <div className="watchlist_body-list">
          <ul>
            {fetchWached?.map((data) => (
              <li>
                <div className="watchlist_body-list-main">
                  <img
                    src={"https://image.tmdb.org/t/p/w500" + data.poster_path}
                    alt={data.title}
                  />
                  <div className="watchlist_body-list-main-disc">
                    <h2>{data.title}</h2>
                    <div className="time">
                      <span>{data.release_date}</span>
                      <span>{data.runtime}</span>
                      <span>{ }</span>
                    </div>
                    <div className="rate">
                      <span>
                        <Star color="yellow" size={15} strokeWidth={5} className="star" />
                        {data.vote_average.toFixed(2)}
                      </span>
                      <span>
                        <Star color="blue" size={10} strokeWidth={3} className="star" />
                        Rate
                      </span>
                    </div>
                    <div className="actors-directors">
                      <span>{data.director}</span>
                      <span>{data.actor}</span>
                    </div>
                    <div className="para">
                      <p>{data.overview}</p>
                    </div>
                  </div>
                </div>
                <button onClick={
                  () => delate(data.id)}>
                  <XCircle color="red" size={20} strokeWidth={2} />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default WatchList;
