import React, { useEffect, useState, useReducer } from 'react';

import Table from '../Table/Table';

import {
  API_NEWS, API_AMOUNT_OF_PAGES_FOR_NEWS,
  ACTION_SET_NEWS_DATA, ACTION_LOAD_NEXT_PAGE,
  ACTION_SORT_NEWS_BY_TIME_ADDED, ACTION_SORT_NEWS_BY_TITLE, ACTION_SORT_NEWS_BY_DOMAIN
} from '../../constants/strings.js';

import { fetchData, parseNews, filterUniqueByIdForNews } from '../../utils/helper.js';
import { reducer, initialState } from '../../utils/useReducerData.js';

function Page() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetchData(API_NEWS, 1).then(response => {
      dispatch({ data: parseNews(response), type: ACTION_SET_NEWS_DATA });
    }).catch((exception) => console.log(exception));
  }, [state.isDataLoaded]);

  // useEffect(() => { console.log("state (newsData):"); console.log(state.newsData); }, [state.newsData]);

  const loadNextPage = () => {
    if (state.isDataLoaded && state.currentPageToLoad <= API_AMOUNT_OF_PAGES_FOR_NEWS) {
      fetchData(API_NEWS, state.currentPageToLoad).then(response => {
        const newData = parseNews(response);
        let rawData = state.newsData.concat(newData);
        let filteredData = filterUniqueByIdForNews(rawData);
        dispatch({ data: filteredData, type: ACTION_LOAD_NEXT_PAGE });
      }).catch((exception) => console.log(exception));
    }
  }

  return (
    <Table news={state.newsData}
           sortByTimeAdded={ () => dispatch({ type: ACTION_SORT_NEWS_BY_TIME_ADDED }) }
           sortByTitle={ () => dispatch({ type: ACTION_SORT_NEWS_BY_TITLE }) }
           sortByDomain={ () => dispatch({ type: ACTION_SORT_NEWS_BY_DOMAIN }) }
           loadNextPage={loadNextPage} />
  );
}

export default Page;
