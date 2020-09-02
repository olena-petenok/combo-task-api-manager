import {
  API, HTTP_ERROR_MESSAGE,
  DATA_TYPE_TIME, DATA_TYPE_TIME_ADDED, DATA_TYPE_TITLE, DATA_TYPE_DOMAIN
} from '../constants/strings.js';

export const generateLinkToFetchData = (apiType, pageNumber) => `${API}/${apiType}/${pageNumber}.json`;

export const fetchData = async (apiType, pageNumber) => {
  let response = await fetch(generateLinkToFetchData(apiType, pageNumber));
  if (!response.ok) { throw new Error(`${HTTP_ERROR_MESSAGE} ${response.status}`); }
  else { return await response.json(); }
}

// export const getHostnameFromRegularExpression = url => {
//   const matches = url.match(/^https?\:\/\/([^\/?#]+)(?:[\/?#]|$)/i);
//   return matches && matches[1]; // extract hostname (will be null if no match is found)
// }

export const parseNews = news => news.map(item => ({
  id: item.id,
  [DATA_TYPE_TIME]: item.time,
  [DATA_TYPE_TIME_ADDED]: item.time_ago,
  [DATA_TYPE_TITLE]: item.title,
  [DATA_TYPE_DOMAIN]: item.domain
}));
