import { useLoaderData } from "react-router-dom";
import { getGenreId } from "../../services/getMoviesData";
import GetMoviesData from "../../services/getMovieType";

function Mystry({ video }) {
  const mystry = useLoaderData();
  return (
    <GetMoviesData
      feTch={mystry}
      title="mystry Movies"
      disc="Same shit, different era."
      video={video}
    />
  );
}
export async function loader() {
  const mystry = await getGenreId(9648);
  return mystry;
}
export default Mystry;
