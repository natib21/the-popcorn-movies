import { useEffect, useState } from "react";
import "./MainBody.scss";
import SubMain from "./SubMain";
import { getMoviesAndTv } from "../../../services/getMoviesAndTv";
import { getTvAndMovies } from "../../../services/getTvandMovies";
import SubMainTv from "./SubMainTv";
function MainBody({ handleWatch, handleTvWatch, WatchedList, video, Watched, tvId }) {
  const [popularity, setPopularity] = useState([]);
  const [tvList, setTvList] = useState([]);
  const [tvPop, setTvPop] = useState([]);
  const [movUpComing, setMovUpComing] = useState([]);
  const tv = getTvAndMovies("tv", "top_rated");
  const tv_popular = getTvAndMovies("tv", "popular");
  const { movieF, isLoading, error } = getMoviesAndTv("movie", "popular");
  const movieUpcoming = getTvAndMovies("movie", "upcoming");

  const val = Watched.filter((data) => {
    return data !== undefined;
  });

  useEffect(() => {
    setPopularity(movieF);
    setTvList(tv);
    setTvPop(tv_popular);
    setMovUpComing(movieUpcoming);
  }, [movieF, tv, tv_popular, movUpComing]);

  return (
    <>
      <SubMain
        file={popularity}
        handleWatch={handleWatch}
        WatchedList={WatchedList}
        title="Popular Movies"
        discription="As determind by IMDB users"
        video={video}
        isLoading={isLoading}
        error={error}
      />
      <SubMainTv
        file={tvList}
        handleWatch={handleTvWatch}
        WatchedList={WatchedList}
        title="Top Rated Tv Series"
        discription="Tv Shows and Movies Just For You"
        video={tvId}
      />
      <SubMain
        file={val}
        handleWatch={handleWatch}
        title="From your Watchlist"
        discription="Movies and TV shows that you have watchlisted"
        video={video}
      />
      <SubMainTv
        file={tvPop}
        handleWatch={handleTvWatch}
        WatchedList={WatchedList}
        title="Popular Tv Shows"
        discription="Tv Shows and Movies Just For You"
        video={tvId}
      />
      <SubMain
        file={movUpComing}
        handleWatch={handleWatch}
        WatchedList={WatchedList}
        title="Upcoming Movies"
        discription="Tv Shows and Movies Just For You"
        video={video}
      />
    </>
  );
}

export default MainBody;
