import { useState, useEffect } from "react";

export function useTv(movie, type) {
    const [movieT, setMovieF] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    useEffect(() => {
        const fetchById = async () => {
            const controller = new AbortController();
            const signal = controller.signal;
            try {
                setIsLoading(true);
                setError("");
                const res = await fetch(
                    `https://api.themoviedb.org/3/${type}/${movie}?api_key=ce90665c6e0e317e12bc4e5521b10452&append_to_response=credits,images`,
                    { signal },
                );
                if (!res.ok)
                    throw new Error("Something went wrong with fetching movies");
                const data = await res.json();
                if (data.Response === "false") throw new Error("Movie Not Found");
                setMovieF([data]);
            } catch (error) {
                console.error("Error fetching data", error);
                if (error.name !== "AbortError") {
                    setError(error.message);
                }
                setError("");
            } finally {
                setIsLoading(false);
            }
        };

        fetchById();
    }, [movie]);

    return { movieT, isLoading, error };
}
