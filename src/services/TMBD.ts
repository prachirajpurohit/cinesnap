const API_KEY = '';
const BASE_URL = 'https://api.themoviedb.org/3';
export const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

async function getPopularMovies() {
  try {
    const response = await fetch(
      `${BASE_URL}/movie/popular?api_key=${API_KEY}`,
    );
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.log(error);
    return;
  }
}

async function searchMovies(movieName: string) {
  try {
    const response = await fetch(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
        movieName,
      )}`,
    );
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.log(error);
    return;
  }
}

async function getMovieDetails(id: number) {
  try {
    const response = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
    return await response.json();
  } catch (error) {
    console.log(error);
    return;
  }
}

export { getPopularMovies, searchMovies, getMovieDetails };
