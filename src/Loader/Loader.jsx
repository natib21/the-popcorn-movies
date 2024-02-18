import { RotatingLines } from "react-loader-spinner";
import "./Loader.scss";
function Loader() {
  return (
    <div className="loader">
      <RotatingLines
        visible={true}
        height="70"
        width="70"
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
        wrapperClass="loader-style"
      />
    </div>
  );
}

export default Loader;
