import { useLoaderData } from "react-router-dom";
import { getGenreId } from "../../services/getMoviesData";
import Footer from "../Main/Footer/Footer";
import Genre from "../../generList/Genre";

function Animation({ video }) {
  const animation = useLoaderData();
  return (
    <div>
      <Genre
        movie={animation.results}
        title="animation Movie"
        disc="Animation is a technique, not a genre "
        video={video}
      />
      <Footer />
    </div>
  );
}
export async function loader() {
  const animation = await getGenreId(16);
  return animation;
}

export default Animation;
