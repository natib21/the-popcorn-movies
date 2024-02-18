import GetMoviesData from "../../services/getMovieType";
import { getCountryLang } from "../../services/getMoviesData";
import { useLoaderData } from "react-router-dom";

function China() {
  const china = useLoaderData();
  return (
    <GetMoviesData feTch={china} title="china films " disc="chinah films " />
  );
}
export async function loader() {
  const china = await getCountryLang("cn|zh");
  return china;
}
export default China;
