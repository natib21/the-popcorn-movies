import GetMoviesData from "../../services/getMovieType";
import { getCountryLang } from "../../services/getMoviesData";
import { useLoaderData } from "react-router-dom";

function England() {
  const england = useLoaderData();
  console.log(england);
  return (
    <GetMoviesData feTch={england} title="uk films " disc="england films " />
  );
}

export async function loader() {
  const documentary = await getCountryLang("au|ca|gb|ie|nz|en");
  return documentary;
}
export default England;
