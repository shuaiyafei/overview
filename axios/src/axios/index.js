import {
  fetch
} from './fetch';

export function getData(url, type, data) {
  type = type ? type : 'POST';
  return fetch({
    url: url,
    method: type,
    data: data
  });
}
