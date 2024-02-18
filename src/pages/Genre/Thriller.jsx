import { useLoaderData } from "react-router-dom";
import { getGenreId } from "../../services/getMoviesData";
import GetMoviesData from "../../services/getMovieType";

function Thriller({ video }) {
  const thriller = useLoaderData();
  return (
    <GetMoviesData
      feTch={thriller}
      title="thriller Movies"
      disc="In a thriller, the camera' s an active narrator, or can be."
      video={video}
    />
  );
}
export async function loader() {
  const thriller = await getGenreId(53);
  return thriller;
}

export default Thriller;
