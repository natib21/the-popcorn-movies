import { Link } from "react-router-dom";
import { useState } from "react";
import NavBarMap from "./NavBarMap";
function NavBarBody({
  Film,
  Tv,
  Flag,
  ActivitySquare,
  ThumbsUp,
  ChevronDown,
  ChevronUp,
  handleSetIsOpen,
}) {
  const [stateOn, setStateOn] = useState("");

  const handlclose = () => {
    handleSetIsOpen(false);
  };
  return (
    <article className="navbar_slider-body">
      <ul>
        <NavBarMap
          handleStateOn={stateOn}
          handleSetStateOn={setStateOn}
          text="Movies"
          icon={<Film color="white" size="20px" strokeWidth={1} />}
          downIcon={<ChevronDown className="upDownArrow" />}
          upIcon={<ChevronUp className="upDownArrow" />}
        >
          <section className="dropdownsection">
            <div className="dropdownsection_primary ">
              <li>
                <Link to="./popular" onClick={handlclose}>
                  popular
                </Link>
              </li>
              <li>
                <Link to="./latest" onClick={handlclose}>
                  Latest
                </Link>
              </li>
              <li>
                <Link to="./onair" onClick={handlclose}>
                  On Air tv show
                </Link>
              </li>
              <li>
                <Link to="./mostViewed" onClick={handlclose}>
                  most viewed
                </Link>
              </li>
            </div>
          </section>
        </NavBarMap>
        <NavBarMap
          handleStateOn={stateOn}
          handleSetStateOn={setStateOn}
          text="Gener"
          icon={<ActivitySquare color="white" size="20px" strokeWidth={1} />}
          downIcon={<ChevronDown className="upDownArrow" />}
          upIcon={<ChevronUp className="upDownArrow" />}
        >
          <section className="dropdownsection">
            <div className="dropdownsection_primary gener">
              <div>
                <li>
                  <Link to="./action" onClick={handlclose}>
                    action{" "}
                  </Link>
                </li>
                <li>
                  <Link to="./adventure" onClick={handlclose}>
                    adventure
                  </Link>
                </li>
                <li>
                  <Link to="./drama" onClick={handlclose}>
                    drama
                  </Link>
                </li>
                <li>
                  <Link to="./documentary" onClick={handlclose}>
                    documentary
                  </Link>
                </li>
                <li>
                  <Link to="./animation" onClick={handlclose}>
                    animation
                  </Link>
                </li>
                <li>
                  <Link to="./commedy" onClick={handlclose}>
                    commedy
                  </Link>
                </li>
                <li>
                  <Link to="./fantasy" onClick={handlclose}>
                    fantasy
                  </Link>
                </li>
                <li>
                  <Link to="./family" onClick={handlclose}>
                    family
                  </Link>
                </li>
                <li>
                  <Link to="./crime" onClick={handlclose}>
                    crime
                  </Link>
                </li>
              </div>
              <div>
                <li>
                  <Link to="./history" onClick={handlclose}>
                    history
                  </Link>
                </li>
                <li>
                  <Link to="./horror" onClick={handlclose}>
                    horror
                  </Link>
                </li>
                <li>
                  <Link to="./music" onClick={handlclose}>
                    music
                  </Link>
                </li>
                <li>
                  <Link to="./mystry" onClick={handlclose}>
                    mystry
                  </Link>
                </li>
                <li>
                  <Link to="./romance" onClick={handlclose}>
                    romance
                  </Link>
                </li>
                <li>
                  <Link to="./sciense-fiction" onClick={handlclose}>
                    sciense fiction
                  </Link>
                </li>
                <li>
                  <Link to="./tv-movies" onClick={handlclose}>
                    tv movies
                  </Link>
                </li>
                <li>
                  <Link to="./thriller" onClick={handlclose}>
                    thriller
                  </Link>
                </li>
                <li>
                  <Link to="./war" onClick={handlclose}>
                    war
                  </Link>
                </li>
              </div>
            </div>
          </section>
        </NavBarMap>
        <NavBarMap
          handleStateOn={stateOn}
          handleSetStateOn={setStateOn}
          text="Tv Series"
          icon={<Tv color="white" size="20px" strokeWidth={1} />}
          downIcon={<ChevronDown className="upDownArrow" />}
          upIcon={<ChevronUp className="upDownArrow" />}
        >
          <section className="dropdownsection">
            <div className="dropdownsection_primary ">
              <li>
                <Link to="./tvseries" onClick={handlclose}>
                  Tv Series
                </Link>
              </li>
            </div>
          </section>
        </NavBarMap>

        <NavBarMap
          handleStateOn={stateOn}
          handleSetStateOn={setStateOn}
          text="Country"
          icon={<Flag color="white" size="20px" strokeWidth={1} />}
          downIcon={<ChevronDown className="upDownArrow" />}
          upIcon={<ChevronUp className="upDownArrow" />}
        >
          <section className="dropdownsection">
            <div className="dropdownsection_primary ">
              <li>
                <Link to="./england" onClick={handlclose}>
                  england
                </Link>
              </li>
              <li>
                <Link to="./french" onClick={handlclose}>
                  french
                </Link>
              </li>
              <li>
                <Link to="./german" onClick={handlclose}>
                  german
                </Link>
              </li>
              <li>
                <Link to="./spanish" onClick={handlclose}>
                  spanish
                </Link>
              </li>
              <li>
                <Link to="./china" onClick={handlclose}>
                  china
                </Link>
              </li>
              <li>
                <Link to="./india" onClick={handlclose}>
                  india
                </Link>
              </li>
            </div>
          </section>
        </NavBarMap>

        <NavBarMap
          handleStateOn={stateOn}
          handleSetStateOn={setStateOn}
          text="Top PopCorn"
          icon={<ThumbsUp color="white" size="20px" strokeWidth={1} />}
          downIcon={<ChevronDown className="upDownArrow" />}
          upIcon={<ChevronUp className="upDownArrow" />}
        >
          <section className="dropdownsection">
            <div className="dropdownsection_primary ">
              <li>
                <Link to="./topPopCorn" onClick={handlclose}>
                  Top PopCorn
                </Link>
              </li>
            </div>
          </section>
        </NavBarMap>
      </ul>
    </article>
  );
}

export default NavBarBody;
