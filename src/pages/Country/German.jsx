import GetMoviesData from "../../services/getMovieType";
import { getCountryLang } from "../../services/getMoviesData";
import { useLoaderData } from "react-router-dom";

function German() {
  const german = useLoaderData();
  return (
    <GetMoviesData feTch={german} title="german films " disc="german films " />
  );
}
export async function loader() {
  const german = await getCountryLang("at|ch|de");
  return german;
}

export default German;
