import { instance } from './index';

function getPopularList(url) {
  return instance.get(`/${url}/popular`);
}

function getTrending(type) {
  return instance.get(`/trending/${type}/week`);
}

export { getPopularList, getTrending };
