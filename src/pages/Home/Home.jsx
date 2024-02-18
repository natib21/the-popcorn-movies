import { Outlet, useNavigation } from "react-router-dom";
import Inclusive from "../../Inclusive/Inclusive";
import Loader from "../../Loader/Loader";
function Home({ video, watched }) {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div>
      <Inclusive video={video} watched={watched} />
      {isLoading && <Loader />}
      {<Outlet /> || <p>home</p>}
    </div>
  );
}

export default Home;
