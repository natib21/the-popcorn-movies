import "./Error.scss";
function Error({ message }) {
  return (
    <div className="error">
      <span>⛔ </span>
      {message}
    </div>
  );
}

export default Error;
