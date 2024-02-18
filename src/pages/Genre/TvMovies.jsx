import { useLoaderData } from "react-router-dom";
import { getGenreId } from "../../services/getMoviesData";
import GetMoviesData from "../../services/getMovieType";

function TvMovies({ video }) {
  const tvmovies = useLoaderData();
  return (
    <GetMoviesData
      feTch={tvmovies}
      title="tv movies "
      disc="I think we grew up thinking that the funniest things on TV were the old, seriousmovies"
      video={video}
    />
  );
}
export async function loader() {
  const tvmovies = await getGenreId(10770);
  return tvmovies;
}

export default TvMovies;
