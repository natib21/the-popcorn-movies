import { useLoaderData } from "react-router-dom";
import { getGenreId } from "../../services/getMoviesData";
import GetMoviesData from "../../services/getMovieType";

function Documentary({ video }) {
  const documentary = useLoaderData();
  return (
    <GetMoviesData
      feTch={documentary}
      title="Documentary Movies"
      disc="Most people see a documentary about the meat industry and then they become a vegetarian for a week."
      video={video}
    />
  );
}
export async function loader() {
  const documentary = await getGenreId(18);
  return documentary;
}

export default Documentary;
