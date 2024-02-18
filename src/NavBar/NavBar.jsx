import { useState } from "react";
import "./NavBar.scss";
import NavBarHead from "./NavBarHeader/NavBarHead";
import NavBarBody from "./NavBarMain/NavBarBody";
function NavBar({
  AlignJustify,
  X,
  Film,
  Home,
  Tv,
  Flag,
  ActivitySquare,
  ThumbsUp,
  ChevronDown,
  ChevronUp,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((isOpen) => !isOpen);
  };
  const cssClass = ["navbar_slider-main ", isOpen ? "navOpen" : "navClose"];
  return (
    <div className="navbar">
      <div className="navbar_icon" onClick={handleClick}>
        <AlignJustify strokeWidth={2} color="white" size={18} />
        <span className="navbar_icon-menu">Menu</span>
      </div>

      <section className={`navbar_slider ${isOpen ? "isOpen" : ""}`}>
        <div className={cssClass.join("")}>
          <NavBarHead X={X} handleSetIsOpen={setIsOpen} />
          <NavBarBody
            AlignJustify={AlignJustify}
            ActivitySquare={ActivitySquare}
            X={X}
            Home={Home}
            Film={Film}
            Tv={Tv}
            Flag={Flag}
            ThumbsUp={ThumbsUp}
            ChevronDown={ChevronDown}
            ChevronUp={ChevronUp}
            handleSetIsOpen={setIsOpen}
          />
        </div>
      </section>
    </div>
  );
}

export default NavBar;
