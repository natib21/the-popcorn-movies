import MainBodyHead from "./MainBodyHead";
import MainBodyList from "./MainBodyList";
const SubMain = ({
  file,
  handleWatch,
  title,
  discription,
  video,
  isLoading,
  error,
}) => {
  return (
    <div className="mainbody">
      <MainBodyHead title={title} discription={discription} />
      <nav className="tvSeries">
        <ul>
          {file.map((data) => (
            <MainBodyList
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
};

export default SubMain;
