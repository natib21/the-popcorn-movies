import { getOnAir } from "../../services/getMoviesData";
import { useLoaderData } from "react-router-dom";
import Genre from "../../generList/Genre";
import Footer from "../Main/Footer/Footer";

function OnAir({ video }) {
  const onair = useLoaderData();

  return (
    <div>
      <Genre
        movie={onair.results}
        title="on Air Tv Shows"
        disc="Tv shows"
        video={video}
      />
      <Footer />
    </div>
  );
}

export async function loader() {
  const onair = await getOnAir();
  return onair;
}
export default OnAir;
