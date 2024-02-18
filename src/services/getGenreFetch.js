import { useState, useEffect } from "react"


export function getGenreFetch(id) {

    const [genreFile, setGenreFile] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    useEffect(() => {
        const fetchGenres = async () => {
            try {
                setIsLoading(true);
                setError('');
                const res = await fetch(
                    `https://api.themoviedb.org/3/discover/movie?api_key=ce90665c6e0e317e12bc4e5521b10452&language=en-US&sort_by=release_date.desc&page=1&with_genres=${id}`);
                if (!res.ok) throw new Error("something went wrong fetchin genre");
                const genre = await res.json();
                if (genre.Response === 'fasle') throw new Error('something went wrong');
                setGenreFile(genre);


            }
            catch (error) {
                console.log("Error fetching data", error);
                if (error.name !== "AbortError") {
                    setError(error.message);
                }
                setError("")
            } finally {
                setIsLoading(false);
            }
        }
        fetchGenres();
    }, [id]);

    return { genreFile, isLoading, error }
}


