import { ChevronLeft, ChevronRight } from "lucide-react";
import { NavLink } from "react-router-dom";
import "./GenreSide.scss";
function GenreSide() {
  return (
    <div className="genreSide">
      <div className="genreSide_head">
        <h2>more to explore</h2>
        <h3>charts</h3>
      </div>
      <div className="genreSide_body">
        <NavLink to="/popular">

          <div className="genreSide_body-main">
            <p className="genreSide_body-p">top popular movies</p>
            <ChevronRight size={22} strokeWidth={2} />
          </div>
          <p className="p">as determined by popcorn movies</p>

        </NavLink>
        <NavLink to="/onair">
          <div className="genreSide_body-main">
            <p className="genreSide_body-p">on air tv show</p>
            <ChevronRight size={22} strokeWidth={2} />
          </div>
          <p className="p">as determined by popcorn tv show</p>
        </NavLink>
        <NavLink to="/mostviewed">
          <div className="genreSide_body-main">
            <p className="genreSide_body-p">most viewed movies</p>
            <ChevronRight size={22} strokeWidth={2} />
          </div>
          <p className="p">as determined by popcorn users</p>
        </NavLink>
        <NavLink to="/latest">
          <div className="genreSide_body-main">
            <p className="genreSide_body-p">latest movies</p>
            <ChevronRight size={22} strokeWidth={2} />
          </div>
          <p className="p">as determined by popcorn users</p>
        </NavLink>
        <NavLink to="/england">
          <div className="genreSide_body-main">
            <p className="genreSide_body-p">top rated english movies</p>
            <ChevronRight size={22} strokeWidth={2} />
          </div>
          <p className="p">as determined by popcorn users</p>
        </NavLink>
      </div>
      <div className="genreSide_genre">
        <div className="genreSide_genre-head">
          <h2>Top rated movies by genre</h2>
        </div>
        <div className="genreSide_genre-links">
          <NavLink to="/action">action</NavLink>
          <NavLink to="/adventure">adventure</NavLink>
          <NavLink to="/animation">animation</NavLink>
          <NavLink to="/commedy">comedy</NavLink>
          <NavLink to="/crime">crime</NavLink>
          <NavLink to="/documentary">documentary</NavLink>
          <NavLink to="/drama">drama</NavLink>
          <NavLink to="/family">family</NavLink>
          <NavLink to="/history">history</NavLink>
          <NavLink to="/horror">horror</NavLink>
          <NavLink to="/mystry">mystry</NavLink>
          <NavLink to="/romance">romance</NavLink>
          <NavLink to="/thriller">thriller</NavLink>
          <NavLink to="/war">war</NavLink>
          <NavLink to="/sciense-fiction">sciense fiction</NavLink>
          <NavLink to="/tv-movies">tv movies</NavLink>
        </div>
      </div>
    </div>
  );
}

export default GenreSide;
