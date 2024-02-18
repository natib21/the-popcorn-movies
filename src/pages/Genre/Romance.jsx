import { useLoaderData } from "react-router-dom";
import { getGenreId } from "../../services/getMoviesData";
import GetMoviesData from "../../services/getMovieType";

function Romance({ video }) {
  const romance = useLoaderData();
  return (
    <GetMoviesData
      feTch={romance}
      title="romance Movies"
      disc="I believe in love at first sight"
      video={video}
    />
  );
}
export async function loader() {
  const romance = await getGenreId(10749);
  return romance;
}
export default Romance;
