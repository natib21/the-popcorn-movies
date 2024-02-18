import { useEffect, useRef, useState } from "react";
import "./SearchBar.scss";
import SearchResult from "./SearchResult/SearchResult";

import Error from "../Error/Error";
import { Search } from "lucide-react";
function SearchBar({ X, handleCancel, video, open }) {
  const [input, setInput] = useState("");
  const [searchM, setSearchM] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState("");
  const inRef = useRef();

  useEffect(() => {
    inRef.current.focus();
  }, []);

  /* const num = input.length >= 3; */

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    const fetchMovies = async () => {
      try {
        setLoader(true);
        setError("");
        const res = await fetch(
          `https://api.themoviedb.org/3/search/movie?query=${input}&api_key=ce90665c6e0e317e12bc4e5521b10452`,
          { signal },
        );
        if (!res.ok)
          throw new Error("Something went wrong with fetching movies");
        const data = await res.json();
        if (data.Response === "false") throw new Error("Movie Not Found");
        setSearchM(data.results);
      } catch (error) {
        console.error("Error fetching data", error);
        if (error.name !== "AbortError") {
          setError(error.message);
        }
        setError("");
      } finally {
        setLoader(false);
      }
    };

    fetchMovies();

    return () => {
      controller.abort();
    };
  }, [input]);

  return (
    <div className={`search ${open ? "open" : ""}`}>
      <input
        ref={inRef}
        type="text"
        placeholder="Search Movie..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="search_input"
      />

      <SearchResult
        val={searchM}
        loader={loader}
        error={error}
        video={video}
        handleCancel={handleCancel}
      />
      <button className="search_btn cancel" onClick={() => handleCancel(false)}>
        <X color="white" size={22} strokeWidth={3} />
      </button>
      <button
        className="search_btn searchCancel"
        onClick={() => handleCancel(false)}
      >
        <Search color="black" size={18} strokeWidth={3} />
      </button>
    </div>
  );
}

export default SearchBar;
