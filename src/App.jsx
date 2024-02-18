import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./pages/Home/Home";
import Main, { loader as mainLoader } from "./pages/Main/Main";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Popular, { loader as popularLoader } from "./pages/Movies/Popular";
import Latest, { loader as latestLoader } from "./pages/Movies/Latest";
import OnAir, { loader as onairLoader } from "./pages/Movies/OnAir";
import MostViewed, { loader as viewedLoader } from "./pages/Movies/MostViewed";
import Action, { loader as actionLoader } from "./pages/Genre/Action";
import Adventure, { loader as adventureLoader } from "./pages/Genre/Adventure";
import Animation, { loader as animationLoader } from "./pages/Genre/Animation";
import Drama, { loader as dramaLoader } from "./pages/Genre/Drama";
import Commedy, { loader as comedyLoader } from "./pages/Genre/Commedy";
import Fantasy, { loader as fantasyLoader } from "./pages/Genre/Fantasy";
import Family, { loader as familyLoader } from "./pages/Genre/Family";
import Crime, { loader as crimeLoader } from "./pages/Genre/Crime";
import Documentary, { loader as documentaryLoader } from "./pages/Genre/Documentary";
import History, { loader as historyLoader } from "./pages/Genre/History";
import Horror, { loader as horrorLoader } from "./pages/Genre/Horror";
import Music, { loader as musicLoader } from "./pages/Genre/Music";
import Mystry, { loader as mystryLoader } from "./pages/Genre/Mystry";
import Romance, { loader as romanceLoader } from "./pages/Genre/Romance";
import ScientificFi, { loader as ScientificFiLoader, } from "./pages/Genre/ScientificFi";
import Thriller, { loader as thrillerLoader } from "./pages/Genre/Thriller";
import TvMovies, { loader as tvmoviesLoader } from "./pages/Genre/TvMovies";
import War, { loader as warLoader } from "./pages/Genre/War";
import TvSeries, { loader as tvseriesLoader } from "./pages/TvSeries/TvSeries";
import England, { loader as englandLoader } from "./pages/Country/England";
import Franch, { loader as frenchLoader } from "./pages/Country/Franch";
import German, { loader as germanLoader } from "./pages/Country/German";
import China, { loader as chinaLoader } from "./pages/Country/China";
import India, { loader as indianLoader } from "./pages/Country/India";
import Spanish, { loader as spanishLoader } from "./pages/Country/Spanish";
import TopMovies from "./pages/TopMovies/TopMovies";
import WatchList from "./WatchList/WatchList";
import VideoPage from "./DemoPage/VideoPage";
import VideoTvPage from "./DemoPage/VideoTvPage";
import { useMovies } from "./services/useMovie";
import { useTv } from "./services/useTv"


function App() {
  const [videoId, setVideoId] = useState([]);
  const [tvVideoId, setTvVideoId] = useState([]);
  const [selectedId, setSelectedId] = useState();
  const [selectedTvId, setSelectedTvId] = useState();
  const { movieF, isLoading, error } = useMovies(selectedId, "movie");
  const { movieT } = useTv(selectedTvId, "tv");
  const [watchedMovies, setWatchedMovies] = useState([]);
  const [delateId, setDelatedId] = useState();
  const [idArray, setIdArray] = useState([])
  let [val] = movieF;
  let [valT] = movieT;

  useEffect(() => {
    setWatchedMovies((watchedMovies) => [...watchedMovies, val]);
  }, [movieF]);

  useEffect(() => {
    setWatchedMovies((watchedMovies) => [...watchedMovies, valT])
  }, [movieT])

  useEffect(() => {
    setIdArray((idArray) => [...idArray, delateId])
  }, [delateId]);

  const fetchedId = idArray.filter((ele) => {
    return ele !== undefined;
  });




  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home
        video={setVideoId}
        watched={watchedMovies} />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: (
            <Main
              handleWatch={setSelectedId}
              handleTvWatch={setSelectedTvId}
              WatchedList={selectedId}
              video={setVideoId}
              WatchedMovieList={watchedMovies}
              tvId={setTvVideoId}
            />
          ),
          loader: mainLoader,
        },
        {
          path: "/popular",
          element: <Popular video={setVideoId} />,
          loader: popularLoader,
        },
        {
          path: "/latest",
          element: <Latest video={setVideoId} />,
          loader: latestLoader,
        },
        {
          path: "/mostviewed",
          element: <MostViewed video={setVideoId} />,
          loader: viewedLoader,
        },
        {
          path: "/onair",
          element: <OnAir video={setVideoId} />,
          loader: onairLoader,
        },
        {
          path: "/action",
          element: <Action video={setVideoId} />,
          loader: actionLoader,
        },
        {
          path: "/adventure",
          element: <Adventure video={setVideoId} />,
          loader: adventureLoader,
        },
        {
          path: "/animation",
          element: <Animation video={setVideoId} />,
          loader: animationLoader,
        },
        {
          path: "/drama",
          element: <Drama video={setVideoId} />,
          loader: dramaLoader,
        },
        {
          path: "/commedy",
          element: <Commedy video={setVideoId} />,
          loader: comedyLoader,
        },
        {
          path: "/documentary",
          element: <Documentary video={setVideoId} />,
          loader: documentaryLoader,
        },
        {
          path: "/fantasy",
          element: <Fantasy video={setVideoId} />,
          loader: fantasyLoader,
        },
        {
          path: "/family",
          element: <Family video={setVideoId} />,
          loader: familyLoader,
        },
        {
          path: "/crime",
          element: <Crime video={setVideoId} />,
          loader: crimeLoader,
        },
        {
          path: "/history",
          element: <History video={setVideoId} />,
          loader: historyLoader,
        },
        {
          path: "/horror",
          element: <Horror video={setVideoId} />,
          loader: horrorLoader,
        },
        {
          path: "/music",
          element: <Music video={setVideoId} />,
          loader: musicLoader,
        },
        {
          path: "/mystry",
          element: <Mystry video={setVideoId} />,
          loader: mystryLoader,
        },
        {
          path: "/romance",
          element: <Romance video={setVideoId} />,
          loader: romanceLoader,
        },
        {
          path: "/sciense-fiction",
          element: <ScientificFi video={setVideoId} />,
          loader: ScientificFiLoader,
        },
        {
          path: "/thriller",
          element: <Thriller video={setVideoId} />,
          loader: thrillerLoader,
        },
        {
          path: "/tv-movies",
          element: <TvMovies video={setVideoId} />,
          loader: tvmoviesLoader,
        },
        {
          path: "/war",
          element: <War video={setVideoId} />,
          loader: warLoader,
        },
        {
          path: "/tvseries",
          element: <TvSeries video={setVideoId} />,
          loader: tvseriesLoader,
        },
        {
          path: "/england",
          element: <England video={setVideoId} />,
          loader: englandLoader,
        },
        {
          path: "/french",
          element: <Franch video={setVideoId} />,
          loader: frenchLoader,
        },
        {
          path: "/german",
          element: <German video={setVideoId} />,
          loader: germanLoader,
        },
        {
          path: "/india",
          element: <India video={setVideoId} />,
          loader: indianLoader,
        },
        {
          path: "/china",
          element: <China video={setVideoId} />,
          loader: chinaLoader,
        },
        {
          path: "/spanish",
          element: <Spanish video={setVideoId} />,
          loader: spanishLoader,
        },
        {
          path: "/topPopCorn",
          element: <TopMovies video={setVideoId} />,
        },
        {
          path: "/watchlist",
          element: <WatchList
            watch={watchedMovies}
            video={setVideoId}
            delate={setDelatedId}
          />,
        },
        {
          path: "videopage",
          element: <VideoPage video={videoId} videos={setVideoId} watchList={setSelectedId} />,
        },
        {
          path: "videoTvpage",
          element: <VideoTvPage video={tvVideoId} videos={setVideoId} watchList={selectedId} />,
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
