import { useState, useEffect } from "react";
import "./VideoPage.scss";
import VideoTvHead from "./VideoHead.jsx/VideoTvHead";
import VideoFilm from "./VideoFilm/VideoFilm";
import { useMovies } from "../services/useMovie";

function VideoTvPage({ video }) {
  const [videoInfo, setVideoInfo] = useState([]);

  const { movieF } = useMovies(video, "tv");

  useEffect(() => {
    setVideoInfo(movieF);
  }, [movieF]);

  return (
    <div className="videopage">
      {videoInfo.map((info) => (
        <VideoTvHead title={info} />
      ))}
      {videoInfo.map((info) => (
        <VideoFilm title={info} />
      ))}
    </div>
  );
}

export default VideoTvPage;
