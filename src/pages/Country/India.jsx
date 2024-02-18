import GetMoviesData from "../../services/getMovieType";
import { getCountryLang } from "../../services/getMoviesData";
import { useLoaderData } from "react-router-dom";

function India() {
  const indian = useLoaderData();
  return (
    <GetMoviesData feTch={indian} title="indian films " disc="indian films " />
  );
}

export async function loader() {
  const indian = await getCountryLang("hi|kn|ml|ta|te");
  return indian;
}

export default India;
