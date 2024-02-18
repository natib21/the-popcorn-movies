import { useLoaderData } from "react-router-dom";
import Genre from "../../generList/Genre";
import { getGenre } from "../../services/getMoviesData";

function MostViewed({ video }) {
  const viewed = useLoaderData();
  return (
    <div>
      <Genre
        movie={viewed.results}
        title="Most Viewed"
        disc="As Viewed by popcorn users"
        video={video}
      />
    </div>
  );
}
export async function loader() {
  const viewed = await getGenre("top_rated");
  return viewed;
}

export default MostViewed;
