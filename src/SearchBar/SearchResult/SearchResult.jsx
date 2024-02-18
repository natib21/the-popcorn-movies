import { Link } from "react-router-dom";
import Error from "../../Error/Error";
import Loader from "../../Loader/Loader";
import "./SearchResult.scss";
import { useState } from "react";


function SearchResult({ val, loader, error, video, handleCancel }) {
  const [close, setClose] = useState(true);
  const handleClick = (id) => {
    video(id);
    handleCancel(false);
  };

  return (<>
    {close ? <nav className={`searchresult ${val.length > 0 ? "height" : ""}`}>
      {loader && <Loader />}
      {error && <Error message={error} />}
      {!loader && !error && (
        <ul className="closeLi">
          {val.map((data) => (
            <Link to="./videopage" onClick={() => setClose(false)}>
              <li key={data.imdbId} onClick={() => handleClick(data.id)}>
                <img
                  src={"https://image.tmdb.org/t/p/w500" + data.poster_path}
                  alt={data.Title}
                  className="searchresult_img"
                />
                <div className="searchresult_sub">
                  <h3>{data.title}</h3>
                  <div>
                    <span>📅</span>
                    <span>{data.release_date}</span>
                  </div>
                  <div>
                    <h5>{data.actors}</h5>
                  </div>
                </div>
              </li>
            </Link>
          ))}
        </ul>
      )}
    </nav> : ""}
  </>
  );
}

export default SearchResult;
