import { instance } from './index';

function getPopular(type) {
  return instance.get(`/${type}/popular`);
}

function getTrending(type) {
  return instance.get(`/trending/${type}/week`);
}

function getNowPlayingMovies() {
  return instance.get('/movie/now_playing');
}

async function getUpcomingMovies() {
  const {
    data: { results },
  } = await instance.get('/movie/upcoming');
  return results;
}

export { getPopular, getTrending, getNowPlayingMovies, getUpcomingMovies };
