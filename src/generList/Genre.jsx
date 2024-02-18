import { useState } from "react";
import "./Genre.scss";
import { XCircle, Star, Info, X } from "lucide-react";
import PopUp from "./popup/PopUp";
import GenreSide from "./GenreSide";
import { Link } from "react-router-dom";
function Genre({ movie, title, disc, video }) {
  const [popup, setPopup] = useState(false);
  const [ID, setId] = useState(null);
  const handleClick = (id) => {
    setPopup(true);
    setId(id);
  };
  const data = movie.map((year) => year.release_date);
  const file = data.map((year) => year.substring(0, 4));

  return (
    <div className="genre">
      <div>
        <section className="genre_header">
          <div className="genre_header-title">
            <div className="genre_header-title-left">
              <h1>{title}</h1>
              <h3>{disc}</h3>
            </div>
            <div className="genre_header-title-right">
              <span>🔗</span>
              <span>
                <span className="movie">Movies</span>
              </span>
            </div>
          </div>
        </section>
        <div className="genre_sort">
          <span>sort by</span>
        </div>
        <section className="genre_body">
          <div className="genre_body-list">
            <ul>
              {movie.map((data, index) => (
                <li key={index}>
                  <div className="genre_body-list-main">
                    <div className="genre_body-list-main-sub">
                      <Link to='/videopage'>
                        <img
                          onClick={() => video(data.id)}
                          src={
                            "https://image.tmdb.org/t/p/w500" + data.poster_path
                          }
                          alt={data.Title}
                        />
                      </Link>
                      <div className="genre_body-list-main-sub-disc">
                        <h1>{index}</h1>
                        <Link to='/videopage'>
                          <h2 onClick={() => video(data.id)}>{data.title || data.name}</h2>
                        </Link>
                        <div className="time">
                          <span>
                            {data.release_date.substring(0, 4) ||
                              data.first_air_date.substring(0, 4)}
                          </span>
                          {/*  <span>pg-13</span>
                                                <span>action,Drama</span> */}
                        </div>
                        <div className="rate">
                          <span>
                            <Star color="yellow" size={15} strokeWidth={8} />
                            {data.vote_average.toFixed(2)}
                          </span>
                          <span>
                            <Star color="blue" size={15} strokeWidth={1} />
                            Rate
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button className="pop" onClick={() => handleClick(data.id)}>
                    <Info color="blue" strokeWidth={1} size={18} />
                  </button>
                  {popup && <PopUp X={X} movie={ID} setPopup={setPopup} />}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
      <GenreSide />
    </div>
  );
}

export default Genre;
