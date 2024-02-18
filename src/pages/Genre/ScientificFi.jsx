import { useLoaderData } from "react-router-dom";
import { getGenreId } from "../../services/getMoviesData";
import GetMoviesData from "../../services/getMovieType";

function ScientificFi({ video }) {
  const ScientificFi = useLoaderData();
  return (
    <GetMoviesData
      feTch={ScientificFi}
      title="ScientificFi Movies"
      disc="Most people see a documentary about the meat industry and then they become a vegetarian for a week."
      video={video}
    />
  );
}
export async function loader() {
  const ScientificFi = await getGenreId(878);
  return ScientificFi;
}

export default ScientificFi;
