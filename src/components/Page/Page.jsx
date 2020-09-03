import React, { useEffect, useState, useReducer } from 'react';

import Table from '../Table/Table';

import {
  API_NEWS, API_AMOUNT_OF_PAGES_FOR_NEWS,
  API_NEWEST, API_AMOUNT_OF_PAGES_FOR_NEWEST,

  ACTION_SWITCH_API,
  ACTION_SET_NEWS_DATA, ACTION_LOAD_NEXT_PAGE,
  ACTION_SORT_NEWS_BY_TIME_ADDED, ACTION_SORT_REVERSE_NEWS_BY_TIME_ADDED,
  ACTION_SORT_NEWS_BY_TITLE, ACTION_SORT_REVERSE_NEWS_BY_TITLE,
  ACTION_SORT_NEWS_BY_DOMAIN, ACTION_SORT_REVERSE_NEWS_BY_DOMAIN
} from '../../constants/strings.js';

import { fetchData, parseNews, filterUniqueByIdForNews } from '../../utils/helper.js';
import { reducer, initialState } from '../../utils/useReducerData.js';

function Page() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const loadApi = (apiType, currentPageToLoad) => {
    fetchData(apiType, currentPageToLoad).then(response => {
      dispatch({ data: parseNews(response), type: ACTION_SET_NEWS_DATA });
    }).catch((exception) => console.log(exception));
  }

  const loadNextPage = (apiType, amountOfPages) => {
    if (state.isDataLoaded && state.currentPageToLoad <= amountOfPages) {
      fetchData(apiType, state.currentPageToLoad).then(response => {
        let data = filterUniqueByIdForNews(state.newsData.concat(parseNews(response)));
        dispatch({ data: data, type: ACTION_LOAD_NEXT_PAGE });
      }).catch((exception) => console.log(exception));
    }
  }

  const switchAPI = () => {
    let newAPI = false;
    state.apiType.name === API_NEWS
      ? newAPI = { name: API_NEWEST, amountOfPages: API_AMOUNT_OF_PAGES_FOR_NEWEST }
      : newAPI = { name: API_NEWS, amountOfPages: API_AMOUNT_OF_PAGES_FOR_NEWS };

    dispatch({ data: newAPI, type: ACTION_SWITCH_API });
    loadApi(newAPI.name, 1);
  }

  useEffect(() => { loadApi(API_NEWS, 1); }, [state.isDataLoaded]);
  // useEffect(() => { console.log(state.newsData); }, [state.newsData]);

  // multiple similar promises and not the end of the page :(
  useEffect(() => {
    const handleScroll = event => {
      if (state.isDataLoaded && state.currentPageToLoad <= state.apiType.amountOfPages) {
        const partOfTheTable = 0.25 * document.getElementById('table').scrollHeight;
        if (window.pageYOffset > partOfTheTable) { loadNextPage(state.apiType.name, state.apiType.amountOfPages); }
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [state.currentPageToLoad, state.isDataLoaded]);

  return (
    <>
      <Table news={state.newsData} switchAPI={switchAPI}
             sortByTimeAdded={ () => dispatch({ type: ACTION_SORT_NEWS_BY_TIME_ADDED }) }
             sortReverseByTimeAdded={ () => dispatch({ type: ACTION_SORT_REVERSE_NEWS_BY_TIME_ADDED }) }
             sortByTitle={ () => dispatch({ type: ACTION_SORT_NEWS_BY_TITLE }) }
             sortReverseByTitle={ () => dispatch({ type: ACTION_SORT_REVERSE_NEWS_BY_TITLE }) }
             sortByDomain={ () => dispatch({ type: ACTION_SORT_NEWS_BY_DOMAIN }) }
             sortReverseByDomain={ () => dispatch({ type: ACTION_SORT_REVERSE_NEWS_BY_DOMAIN }) } />
    </>
  );
}

export default Page;
