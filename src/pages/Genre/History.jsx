import { useLoaderData } from "react-router-dom";
import { getGenreId } from "../../services/getMoviesData";
import GetMoviesData from "../../services/getMovieType";

function History({ video }) {
  const history = useLoaderData();
  return (
    <GetMoviesData
      feTch={history}
      title="history Movies"
      disc="Ever wonder why history repeats itself?"
      video={video}
    />
  );
}

export async function loader() {
  const history = await getGenreId(36);
  return history;
}
export default History;
