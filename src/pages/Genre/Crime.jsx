import { useLoaderData } from "react-router-dom";
import { getGenreId } from "../../services/getMoviesData";
import Footer from "../Main/Footer/Footer";
import Genre from "../../generList/Genre";

function Crime({ video }) {
  const crime = useLoaderData();
  return (
    <div>
      <Genre
        movie={crime.results}
        title="Crime Movie"
        disc="We'll always be fascinated by people who live above the law "
        video={video}
      />
      <Footer />
    </div>
  );
}
export async function loader() {
  const crime = await getGenreId(80);
  return crime;
}

export default Crime;
