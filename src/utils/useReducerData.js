import {
  API_NEWS, API_AMOUNT_OF_PAGES_FOR_NEWS,
  ACTION_SWITCH_API,
  ACTION_SET_NEWS_DATA, ACTION_LOAD_NEXT_PAGE,
  ACTION_SORT_NEWS_BY_TIME_ADDED, ACTION_SORT_REVERSE_NEWS_BY_TIME_ADDED,
  ACTION_SORT_NEWS_BY_TITLE, ACTION_SORT_REVERSE_NEWS_BY_TITLE,
  ACTION_SORT_NEWS_BY_DOMAIN, ACTION_SORT_REVERSE_NEWS_BY_DOMAIN
} from '../constants/strings.js';

import {
  sortNewsByTimeAdded, sortReverseNewsByTimeAdded,
  sortNewsByTitle, sortReverseNewsByTitle,
  sortNewsByDomain, sortReverseNewsByDomain
} from '../utils/helper.js';

export const initialState = {
  isDataLoaded: false,
  currentPageToLoad: 2,
  newsData: false,
  apiType: {
    name: API_NEWS,
    amountOfPages: API_AMOUNT_OF_PAGES_FOR_NEWS
  }
};

export function reducer (state, action) {
  switch (action.type) {
    case ACTION_SWITCH_API:
      return { ...state, apiType: action.data };
    case ACTION_SET_NEWS_DATA:
      return { ...state, isDataLoaded: true, newsData: action.data };
    case ACTION_LOAD_NEXT_PAGE:
      return { ...state, currentPageToLoad: state.currentPageToLoad + 1, newsData: action.data };
    case ACTION_SORT_NEWS_BY_TIME_ADDED:
      return { ...state, newsData: sortNewsByTimeAdded([...state.newsData]) };
    case ACTION_SORT_REVERSE_NEWS_BY_TIME_ADDED:
      return { ...state, newsData: sortReverseNewsByTimeAdded([...state.newsData]) };
    case ACTION_SORT_NEWS_BY_TITLE:
      return { ...state, newsData: sortNewsByTitle([...state.newsData]) };
    case ACTION_SORT_REVERSE_NEWS_BY_TITLE:
      return { ...state, newsData: sortReverseNewsByTitle([...state.newsData]) };
    case ACTION_SORT_NEWS_BY_DOMAIN:
      return { ...state, newsData: sortNewsByDomain([...state.newsData]) };
    case ACTION_SORT_REVERSE_NEWS_BY_DOMAIN:
      return { ...state, newsData: sortReverseNewsByDomain([...state.newsData]) };
    default:
      throw new Error();
  }
}
