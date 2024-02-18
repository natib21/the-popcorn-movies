import './VideoFilmGenre.scss';

function VideoFilmGenre({ related }) {
    const file = related.results;

    return (
        <div className="related">
            <div className="related_movies">
                <h2>Related Movies</h2>
                <ul>{file?.map((file, index) => (
                    <li key={index}>
                        <div className='related_img'>
                            <img src={"https://image.tmdb.org/t/p/w500" + file.poster_path}
                                alt={file.name} />
                        </div>
                        <div className='related_Name'>
                            <h3>{file.title}</h3>
                        </div>
                    </li>
                ))
                }
                </ul>
            </div>
        </div>
    )
}

export default VideoFilmGenre
