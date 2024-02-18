import { useLoaderData } from "react-router-dom";
import Genre from "../../generList/Genre";
import { getGenre } from "../../services/getMoviesData";
import Footer from "../Main/Footer/Footer";
function Latest({ video }) {
  const Latest = useLoaderData();
  console.log([Latest]);
  return (
    <div>
      <Genre
        movie={[Latest]}
        title="Latest Movie"
        disc="As determined by popcorn users"
        video={video}
      />
      <Footer />
    </div>
  );
}

export async function loader() {
  const latest = await getGenre("latest");
  return latest;
}

export default Latest;
