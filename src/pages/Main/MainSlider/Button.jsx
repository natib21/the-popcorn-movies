import "./Button.scss";

function Button({
  text,
  handleClick,
  handleHorizontal,
  handleVertical,
  move,
  val,
  length,
  verticalMove,
  click
}) {
  const handle = () => {
    if (click === 'handleNext') {
      handleClick((val) => val + 1);
      handleHorizontal((more) => more + move);
      handleVertical((more) => more + verticalMove);
      if (val === length - 1) {
        handleClick(0);
        handleHorizontal(0);
        handleVertical(0);
      }
    } else {
      handleClick((val) => val - 1);
      handleHorizontal((more) => more - move);
      handleVertical((more) => more - verticalMove);
      if (val === 0) {
        handleClick(length - 1);
        handleHorizontal((move * length) - move);
        handleVertical((verticalMove * length) - verticalMove);
      }
    }
  }
  return (
    <button className="btn" onClick={handle}>
      {text}
    </button>
  );
}

export default Button;
