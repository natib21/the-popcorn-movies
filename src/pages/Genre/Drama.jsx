import { useLoaderData } from "react-router-dom";
import { getGenreId } from "../../services/getMoviesData";
import GetMoviesData from "../../services/getMovieType";

function Drama({ video }) {
  const drama = useLoaderData();
  return (
    <GetMoviesData
      feTch={drama}
      title="Drama Movies"
      disc="Drama is easy to fool people with, but you can' t trick people into laughing."
      video={video}
    />
  );
}
export async function loader() {
  const drama = await getGenreId(18);
  return drama;
}

export default Drama;
