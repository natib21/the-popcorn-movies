import { useEffect, useState } from "react";
import Button from "./Button";
import { ChevronRight, ChevronLeft, PlayCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useMovies } from "../../../services/useMovie";
const MainSlider = ({ films, video }) => {
  const [index, setIndex] = useState(0);
  const [horizontalSlider, setHorizontalSlider] = useState(0);
  const [verticalSlider, setVerticalSlider] = useState(0);
  const horizontalMove = 100;
  const verticalMove = 130;
  const file = films.results;
  const imageLength = file.length;
  const picture = "https://image.tmdb.org/t/p/w500";
  useEffect(() => {
    const interval = () => {
      setIndex((index) => index + 1);
      setHorizontalSlider((horizontalSlider) => horizontalSlider + horizontalMove);
      setVerticalSlider((verticalSlider) => verticalMove + verticalSlider);
      if (index === imageLength - 1) {
        setIndex(0);
        setHorizontalSlider(0);
        setVerticalSlider(0);
      }
    };
    const time = setTimeout(interval, 7000);
    return () => {
      clearInterval(time);
    };
  }, [horizontalSlider, index, verticalSlider, imageLength]);
  return (
    <div className="Container">
      <div className="slider">
        <ul
          className="ul_first"
          style={{
            transform: `translateX(${-horizontalSlider}%)`,
            transition: "650ms all ease",
          }}
        >
          {file.map((file, index) => (
            <li
              className="li_first"
              key={index}
              style={{
                background: `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.9)),url(${picture}${file.backdrop_path})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <ul className="li_first-ul">
                <li className="li_first-ul-li" key={index}>
                  <img
                    src={"https://image.tmdb.org/t/p/w500" + file.poster_path}
                    alt="memo"
                  />
                  <div className="li_first-ul-disc">
                    <Link to="/videopage">
                      <div>
                        <PlayCircle
                          size={50}
                          strokeWidth={1}
                          className="play"
                          onClick={() => video(file.id)}
                        />
                      </div>
                      <div>
                        <h1 onClick={() => video(file.id)}>'{file.original_title || file.original_name}'</h1>
                        <p onClick={() => video(file.id)}>
                          {file.media_type === "movie"
                            ? "Watch this Movie Trailer"
                            : "Watch this Tv Trailer"}
                        </p>
                      </div>
                    </Link>
                  </div>
                </li>
              </ul>
            </li>
          ))}
        </ul>
        <div className="btn_div">
          <div className="btn_nxt">
            <Button
              text={
                <ChevronRight className="btn-right" size={37} strokeWidth={3} />
              }
              handleClick={setIndex}
              handleHorizontal={setHorizontalSlider}
              handleVertical={setVerticalSlider}
              move={horizontalMove}
              length={imageLength}
              val={index}
              verticalMove={verticalMove}
              click="handleNext"
            />
          </div>
          <div className="btn_prv">
            <Button
              text={
                <ChevronLeft className="btn-right" size={37} strokeWidth={3} />
              }
              handleClick={setIndex}
              handleHorizontal={setHorizontalSlider}
              handleVertical={setVerticalSlider}
              move={horizontalMove}
              length={imageLength}
              val={index}
              verticalMove={verticalMove}
              click="handlePrev"
            />
          </div>
        </div>
      </div>

      <div className="slider_second">
        <h2>up Next</h2>
        <ul
          className="ul_second"
          style={{
            transform: `translateY(-${verticalSlider}px)`,
            transition: `all linear`,
            transitionDelay: `600ms`,
          }}
        >
          {file.map((file, index) => (
            <li className="li_second" key={index}>
              <img
                src={"https://image.tmdb.org/t/p/w500" + file.poster_path}
                alt="memo"
              />
              <div className="li_second-disc">
                <Link to="/videopage">
                  <PlayCircle size={36} strokeWidth={1} className="play" onClick={() => video(file.id)} />
                  <h1 onClick={() => video(file.id)}>{file.original_title || file.original_name}</h1>
                  <p onClick={() => video(file.id)}>
                    {file.media_type === "movie"
                      ? "Watch this Movie Trailer"
                      : "Watch this Tv Trailer"}
                  </p>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MainSlider;
