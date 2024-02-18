import { useState, useEffect } from "react";
import "./VideoPage.scss";
import VideoHead from "./VideoHead.jsx/VideoHead";
import VideoFilm from "./VideoFilm/VideoFilm";
import { useMovies } from "../services/useMovie";

function VideoPage({ video, watchList }) {
  const [videoInfo, setVideoInfo] = useState([]);
  const { movieF } = useMovies(video, "movie");

  useEffect(() => {
    setVideoInfo(movieF);
  }, [movieF]);
  const vidPic = videoInfo.map((pic) => {
    const poster = pic.poster_path;
    return poster;
  })

  return (
    <div className="videopage">
      {videoInfo.map((info, id) => (
        <VideoHead title={info} key={id} />
      ))}
      {videoInfo.map((info) => (
        <VideoFilm title={info} wachList={watchList} />
      ))}
    </div>
  );
}


export default VideoPage;


