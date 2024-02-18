const API_KEY = "ce90665c6e0e317e12bc4e5521b10452";
const API_Base = "https://api.themoviedb.org/3/movie";
const API_Base_Discovery = "https://api.themoviedb.org/3/discover/movie";

export async function getGenre(title) {
  const res = await fetch(
    `${API_Base}/${title}?api_key=${API_KEY}&append_to_response=videos`,
  );
  if (!res.ok) throw new Error("Failed getting you");
  const data = await res.json();
  return data;
}

export async function getGenreId(id) {
  const res = await fetch(
    `${API_Base_Discovery}?api_key=${API_KEY}&language=en-US&sort_by=release_date.desc&page=1&with_genres=${id}`,
  );
  if (!res.ok) throw new Error("Failed getting you");
  const data = await res.json();
  return data;
}

export async function getCountryLang(lang) {
  const res = await fetch(
    `${API_Base_Discovery}?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=1&primary_release_year=2022&with_original_language=${lang}`,
  );
  if (!res.ok) throw new Error("Failed getting you");
  const data = await res.json();

  return data;
}
/* 
https://api.themoviedb.org/3/tv/on_the_air?api_key=ce90665c6e0e317e12bc4e5521b10452&language=en-US&region=IN */

export async function getOnAir() {
  const res = await fetch(
    `https://api.themoviedb.org/3/tv/on_the_air?api_key=${API_KEY}&language=en-US&region=IN`,
  );
  if (!res.ok) throw new Error("Failed getting you");
  const data = await res.json();
  return data;
}

/* https://api.themoviedb.org/3/tv/popular?api_key=ce90665c6e0e317e12bc4e5521b10452&language=en-US&page=1 */

export async function getTvSeries() {
  const res = await fetch(
    `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=en-US&page=1 `,
  );
  if (!res.ok) throw new Error("Failed getting you");
  const data = await res.json();
  return data;
}

export async function getTrending() {
  const res = await fetch(
    `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}&language=en-US&page=1 `,
  );
  if (!res.ok) throw new Error("Failed getting you");
  const data = await res.json();
  return data;
}
