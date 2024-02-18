import { useEffect, useRef, useState } from "react";
import "./VideoFilm.scss";
import Loader from "./../../Loader/Loader";
import ReactPlayer from "react-player";
import GenreSide from "./../../generList/GenreSide";
import Footer from "../../pages/Main/Footer/Footer";
import { Plus, Star } from "lucide-react";
import { getGenreFetch } from "../../services/getGenreFetch";
import VideoFilmGenre from "./VideoFilmGenre";

function VideoFilm({ title, watchList }) {
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [genreId, setGenreId] = useState([]);
  const director = title.credits.crew.find(
    ({ known_for_department }) => known_for_department === "Directing",
  );

  const writer = title.credits.crew.find(
    (write) => write === write.known_for_department,
  );

  let rate = title.vote_average;
  rate = rate.toFixed(2);
  const genres = title.genres;
  const man = genres.map((id) => {
    return id.id
  })
  useEffect(() => {
    setGenreId(man)
  }, [])


  useEffect(() => {
    const fetchVideo = async () => {
      try {
        setIsLoading(true);
        setError("");
        const res = await fetch(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyDVwNuwPIFZ6PWYzdM_Ten1x7jHF5ezNGU&type=video&q=${title.name || title.title}&maxResults=1`,
        );
        if (!res.ok)
          throw new Error("something went wrong fetching from youtube");
        const videoData = await res.json();
        if (videoData.Response === "false") throw new Error("video not found");
        setVideos(videoData);
      } catch (error) {
        console.log("Error fetching data", error);
        if (error.name !== "AbortError") {
          setError(error.message);
        }
        setError("");
      } finally {
        setIsLoading(false);
      }
    };
    fetchVideo();
  }, [title]);


  const { genreFile } = getGenreFetch(genreId);
  const vimo = videos.items;
  const video = vimo?.map((vid) => {
    const man = vid.id;
    return man;
  });

  return (
    <div className="videofilm">
      <div className="videofilm-wrapper">
        <div className="videofilm-wrapper_vidpic">
          <div className="figure">
            <img
              src={"https://image.tmdb.org/t/p/w500" + title.poster_path}
              alt={title.title}
            />
          </div>
          <div className="_wrapper">
            {isLoading ? (
              <Loader />
            ) : (
              video?.map((vid, id) =>
                <iframe src={`http://www.youtube.com/embed/${vid.videoId}`}
                  width="100%"
                  height="100%"
                  className="react-payer"
                  frameBorder="0"
                  allowFullScreen
                  key={id}
                >
                </iframe>
              )
            )}
          </div>
          <div className="vid">
            <div className="vid_video">
              <h5>videos</h5>
            </div>
            <div className="vid_disc">
              <h5>pictures</h5>
            </div>
          </div>
        </div>
        <div className="videofilm-wrapper_disc">
          <div className="gener">
            <ul>
              {title.genres.map((id) => (
                <li key={id}>
                  <button onClick={() => console.log(id.id)}>{id.name}</button>
                </li>
              ))}
            </ul>
          </div>
          <div className="paragraph">
            <span>
              <p>{title.overview || `the discription is not available if you want the discription pls check the original site by its name in google `}</p>
            </span>
          </div>
        </div>

        <div className="rate">
          <div className="rate_main">
            <span className="rate_main-span">
              <Star size={15} color="yellow" strokeWidth={5} />
              <div className="rate_main-span-both">
                <span className="rate_num">{rate}</span>
                <span className="rate_from">/10</span>
              </div>
            </span>

          </div>
          <div className="rate_your">
            <Star size={15} color="blue" strokeWidth={5} />
            <span>Rate</span>
          </div>
        </div>
        <div className="watchList">
          <button className="watchList_btn" onClick={() => watchList(title.id)}>
            <Plus size={15} strokeWidth={4} color="yellow" />
            <div>Add To WatchList</div>
          </button>
        </div>
      </div>


      <VideoFilmGenre related={genreFile} />

      <div className="videofilm-cast">

        <div className="videofilm-cast_casts">
          <h2 className="high">Top Cast</h2>
          <ul>
            {title.credits.cast.map((info) => (
              <li>
                <div className="castimg">
                  <img
                    src={"https://image.tmdb.org/t/p/w500" + info.profile_path}
                    alt={info.original_name}
                  />
                </div>
                <div className="castname">
                  <h2>{info.original_name || info.name}</h2>
                  <h3>{info.character}</h3>
                </div>
              </li>
            ))}
            ;
          </ul>
          <div className="videofilm-cast_casts-maker">
            <h2>
              Director :{/* <span>{director.original_name} </span> */}
            </h2>
            <h2>
              Writters :<span>{ }</span>
            </h2>
            <h2>
              Stars :<span>{ }</span>
            </h2>
          </div>
        </div>
        <GenreSide />
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default VideoFilm;
