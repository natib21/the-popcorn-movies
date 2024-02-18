import { Link } from "react-router-dom";

function NavBarHead({ X, handleSetIsOpen }) {
  const handleOpen = () => {
    handleSetIsOpen(false);
  };

  return (
    <article className="navbar_slider-main-top">
      <button className="navbar_slider-main-top-btn">
        <Link to="/" className="navlogo_link" onClick={handleOpen}>
          <img
            src="./popcornlogopng.png"
            alt="logoPop"
            className="navlogo_link-img"
          />
        </Link>
      </button>
      <button className="navbar_slider-main-top-close" onClick={handleOpen}>
        <X Width color="black" size="25px" strokeWidth="4" />
      </button>
    </article>
  );
}

export default NavBarHead;
