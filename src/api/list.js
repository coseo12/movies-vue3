import { instance } from './index';

function getList() {
  return instance.get('movie/popular');
}

export { getList };
