import { useLoaderData } from "react-router-dom";
import { getGenreId } from "../../services/getMoviesData";
import Footer from "../Main/Footer/Footer";
import Genre from "../../generList/Genre";

function Adventure({ video }) {
  const adventure = useLoaderData();
  console.log(adventure);
  return (
    <div>
      <Genre
        movie={adventure.results}
        title="Adventure Movie"
        disc="We came here to lose ourselves and find adventure"
        video={video}
      />
      <Footer />
    </div>
  );
}

export async function loader() {
  const adventure = await getGenreId(12);
  return adventure;
}

export default Adventure;
