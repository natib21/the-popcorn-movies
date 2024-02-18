import { useLoaderData } from "react-router-dom";
import Genre from "../../generList/Genre";
import { getGenre } from "../../services/getMoviesData";
import Footer from "../Main/Footer/Footer";
function Popular({ movie, video }) {
  const popular = useLoaderData();

  return (
    <div>
      <Genre
        movie={popular.results}
        title="Popular Movies"
        disc="As determined by popcorn users"
        video={video}
      />
      <Footer />
    </div>
  );
}

export async function loader() {
  const popular = await getGenre("popular");
  return popular;
}

export default Popular;
