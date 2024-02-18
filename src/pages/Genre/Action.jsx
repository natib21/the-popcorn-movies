import { useLoaderData } from "react-router-dom";
import { getGenreId } from "../../services/getMoviesData";
import Footer from "../Main/Footer/Footer";
import Genre from "../../generList/Genre";

function Action({ video }) {
  const action = useLoaderData();
  return (
    <div>
      <Genre
        movie={action.results}
        title="Action Movie"
        disc="I will look for you, I will find you, and I will kill you. "
        video={video}
      />
      <Footer />
    </div>
  );
}

export async function loader() {
  const action = await getGenreId(28);
  return action;
}

export default Action;
