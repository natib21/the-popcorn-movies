import MainSlider from "./MainSlider/MainSlider";
import "./Main.scss";
import MainBody from "./MainBody/MainBody";
import Footer from "./Footer/Footer";
import { getTrending } from "../../services/getMoviesData";
import { useLoaderData } from "react-router-dom";

function Main({
  tvId,
  WatchedMovieList,
  handleWatch,
  handleTvWatch,
  WatchedList,
  video,
}) {
  const trending = useLoaderData();

  return (
    <div className="main">
      <MainSlider
        films={trending}
        video={video}
      />

      <MainBody
        handleWatch={handleWatch}
        handleTvWatch={handleTvWatch}
        WatchedList={WatchedList}
        video={video}
        Watched={WatchedMovieList}
        tvId={tvId}
      />
      <Footer />
    </div>
  );
}
export async function loader() {
  const trending = await getTrending();
  return trending;
}

export default Main;
