import {
  Search,
  AlignJustify,
  Eye,
  X,
  Film,
  Home,
  Tv,
  Flag,
  ActivitySquare,
  ThumbsUp,
  ChevronDown,
  ChevronUp,
  Plus,
} from "lucide-react";
import NavBar from "../NavBar/NavBar";
import "./Inclusive.scss";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import { useState } from "react";

function Inclusive({ video, watched }) {
  const [search, setSearch] = useState(false);
  return (
    <div className="inclusive" id="inclusive">
      <div className="inclusive_left">
        <NavBar
          AlignJustify={AlignJustify}
          ActivitySquare={ActivitySquare}
          X={X}
          Home={Home}
          Film={Film}
          Tv={Tv}
          Flag={Flag}
          ThumbsUp={ThumbsUp}
          ChevronDown={ChevronDown}
          ChevronUp={ChevronUp}
        />
        <Link to="./">
          <div className="inclusive_left-logo">
            <img src="./popcornlogosmall.png" alt="logo" />
          </div>
        </Link>
      </div>

      <div className="inclusive_right">
        <button
          className="inclusive_right-btn close"
          onClick={() => setSearch(true)}
        >
          <Search color="white" size={18} strokeWidth={2} />
        </button>
        <SearchBar
          X={X}
          handleCancel={setSearch}
          video={video}
          open={search}
        />
        <Link to="./watchlist">
          <button className="inclusive_right-btn watch">
            <span>WatchList</span>
            <span className="seleNum">{watched.length - 2 === 0 ? `` : watched.length - 4}</span>
            <Eye color="white" size={18} strokeWidth={2} className="close" />
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Inclusive;
