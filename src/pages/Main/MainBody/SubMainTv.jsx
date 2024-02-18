import MainBodyHead from "./MainBodyHead";
import MainBodyTvList from "./MainBodyTvList";

function SubMainTv({
  file,
  handleWatch,
  title,
  discription,
  video,
  isLoading,
  error,
}) {
  return (
    <div className="mainbody">
      <MainBodyHead title={title} discription={discription} />
      <nav className="tvSeries">
        <ul>
          {file.map((data) => (
            <MainBodyTvList
              key={data.id}
              data={data}
              handleWatch={handleWatch}
              video={video}
              isLoading={isLoading}
              error={error}
            />
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default SubMainTv;
