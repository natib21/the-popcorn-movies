import GetMoviesData from "../../services/getMovieType";
import { getCountryLang } from "../../services/getMoviesData";
import { useLoaderData } from "react-router-dom";

function Franch() {
  const french = useLoaderData();
  return (
    <GetMoviesData feTch={french} title="french films " disc="french films " />
  );
}

export async function loader() {
  const documentary = await getCountryLang("ca|fr");
  return documentary;
}

export default Franch;
