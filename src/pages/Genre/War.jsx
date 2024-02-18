import { useLoaderData } from "react-router-dom";
import { getGenreId } from "../../services/getMoviesData";
import GetMoviesData from "../../services/getMovieType";

function War({ video }) {
  const war = useLoaderData();
  return (
    <GetMoviesData
      feTch={war}
      title="war Movies"
      disc="War begins in the minds of men."
      video={video}
    />
  );
}

export async function loader() {
  const war = await getGenreId(10752);
  return war;
}
export default War;
