import { useLoaderData } from "react-router-dom";
import { getGenreId } from "../../services/getMoviesData";
import GetMoviesData from "../../services/getMovieType";

function Horror({ video }) {
  const horror = useLoaderData();
  return (
    <GetMoviesData
      feTch={horror}
      title="horror Movies"
      disc="I always considered the horror genre as a political genre"
      video={video}
    />
  );
}
export async function loader() {
  const horror = await getGenreId(27);
  return horror;
}
export default Horror;
