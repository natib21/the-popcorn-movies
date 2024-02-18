import Genre from "../generList/Genre";
import Footer from "../pages/Main/Footer/Footer";

function GetMoviesData({ feTch, title, disc }) {
  return (
    <div>
      <Genre movie={feTch.results} title={title} disc={disc} />
      <Footer />
    </div>
  );
}
export default GetMoviesData;
