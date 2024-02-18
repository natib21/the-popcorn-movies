import { Star } from "lucide-react";
import "./VideoHead.scss";
function VideoTvHead({ title }) {
  console.log(title);
  let FirstAirDate = title.first_air_date.substring(0, 4);
  let lastAirDate = title.last_air_date.substring(0, 4);
  let hour = Math.floor(title.runtime / 60);
  let min = title.runtime % 60;
  return (
    <div className="videoHead" style={{ color: "white" }}>
      <div className="videoHead_title">
        <h1>{title.name}</h1>
        <p>
          <span>{FirstAirDate}-</span>
          <span>{lastAirDate}</span>.
          <span>{title.status}</span>
        </p>
      </div>
      <div className="videoHead_rate">
        <div className="videoHead_rate-imdb">
          <h1>Imdb rating</h1>
          <div className="videoHead_rate-imdb-place">
            <Star color="yellow" strokeWidth={5} size={20} />
            <div className="videoHead_rate-imdb-place-pt">
              <div className="num">
                <h3>{title.vote_average.toFixed(2)}</h3>
                <span>/10</span>
              </div>
              <h5>2.3M</h5>
            </div>
          </div>
        </div>
        <div className="videoHead_rate-imdb">
          <h1>your rating</h1>
          <div className="videoHead_rate-imdb-place">
            <Star color="blue" strokeWidth={3} size={20} />
            <div className="videoHead_rate-imdb-place-pt">
              <div className="num">
                <h3>Rate</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="videoHead_rate-imdb">
          <h1>Popularity</h1>
        </div>
      </div>
    </div>
  );
}

export default VideoTvHead;
