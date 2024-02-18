import { useLoaderData } from "react-router-dom";
import { getGenreId } from "../../services/getMoviesData";
import GetMoviesData from "../../services/getMovieType";

function Music({ video }) {
  const music = useLoaderData();
  return (
    <GetMoviesData
      feTch={music}
      title="musical Movies"
      disc="When the dance floor calls, you gotta answer."
      video={video}
    />
  );
}
export async function loader() {
  const music = await getGenreId(10402);
  return music;
}

export default Music;
