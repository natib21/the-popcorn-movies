import GetMoviesData from "../../services/getMovieType";
import { getCountryLang } from "../../services/getMoviesData";
import { useLoaderData } from "react-router-dom";

function Spanish() {
  const spain = useLoaderData();
  return (
    <GetMoviesData feTch={spain} title="spanish films " disc="spanish films " />
  );
}
export async function loader() {
  const documentary = await getCountryLang("au|ca|gb|le|nz|us");
  return documentary;
}
export default Spanish;
