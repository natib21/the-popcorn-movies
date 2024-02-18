import { useLoaderData } from "react-router-dom";
import { getGenreId } from "../../services/getMoviesData";
import GetMoviesData from "../../services/getMovieType";

function Fantasy({ video }) {
  const fantasy = useLoaderData();
  return (
    <GetMoviesData
      feTch={fantasy}
      title="Fantasy Movies"
      disc="It’s good to have dreams, just so long as they’re not fantasies"
      video={video}
    />
  );
}
export async function loader() {
  const fantasy = await getGenreId(14);
  return fantasy;
}

export default Fantasy;
