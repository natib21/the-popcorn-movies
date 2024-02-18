import { useLoaderData } from "react-router-dom";
import { getGenreId } from "../../services/getMoviesData";
import GetMoviesData from "../../services/getMovieType";

function Family({ video }) {
  const family = useLoaderData();
  return (
    <GetMoviesData
      feTch={family}
      title="Family Movies"
      disc="We' re a family and we protect each other'"
      video={video}
    />
  );
}
export async function loader() {
  const family = await getGenreId(10751);
  return family;
}
export default Family;
