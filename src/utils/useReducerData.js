import {
  ACTION_SET_NEWS_DATA, ACTION_LOAD_NEXT_PAGE,
  ACTION_SORT_NEWS_BY_TIME_ADDED, ACTION_SORT_NEWS_BY_TITLE, ACTION_SORT_NEWS_BY_DOMAIN
} from '../constants/strings.js';

import { sortNewsByTimeAdded, sortNewsByTitle, sortNewsByDomain } from '../utils/helper.js';

export const initialState = {
  isDataLoaded: false,
  currentPageToLoad: 2,
  newsData: false
};

export function reducer (state, action) {
  switch (action.type) {
    case ACTION_SET_NEWS_DATA:
      return { ...state, isDataLoaded: true, newsData: action.data };
    case ACTION_LOAD_NEXT_PAGE:
      return { ...state, currentPageToLoad: state.currentPageToLoad + 1, newsData: action.data };
    case ACTION_SORT_NEWS_BY_TIME_ADDED:
      return { ...state, newsData: sortNewsByTimeAdded([...state.newsData]) };
    case ACTION_SORT_NEWS_BY_TITLE:
      return { ...state, newsData: sortNewsByTitle([...state.newsData]) };
    case ACTION_SORT_NEWS_BY_DOMAIN:
      return { ...state, newsData: sortNewsByDomain([...state.newsData]) };
    default:
      throw new Error();
  }
}