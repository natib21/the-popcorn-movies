import { useLoaderData } from "react-router-dom";
import Genre from "../../generList/Genre";
import { getTvSeries } from "../../services/getMoviesData";
import Footer from "../Main/Footer/Footer";

function Tvseries() {
  const tvSeries = useLoaderData();

  return (
    <div>
      <Genre movie={tvSeries.results} title="Tv Series" disc="TV Series" />
      <Footer />
    </div>
  );
}
export async function loader() {
  const tv = await getTvSeries();
  return tv;
}

export default Tvseries;
