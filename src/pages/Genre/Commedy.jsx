import { useLoaderData } from "react-router-dom";
import { getGenreId } from "../../services/getMoviesData";
import Footer from "../Main/Footer/Footer";
import Genre from "../../generList/Genre";

function Commedy({ video }) {
  const comedy = useLoaderData();
  return (
    <div>
      <Genre
        movie={comedy.results}
        title="Comedy Movie"
        disc="I suppose comedy is my first love, in a way. "
        video={video}
      />
      <Footer />
    </div>
  );
}
export async function loader() {
  const comedy = await getGenreId(35);
  return comedy;
}

export default Commedy;
