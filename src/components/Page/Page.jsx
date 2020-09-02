import React, { useEffect, useState } from 'react';

import Table from '../Table/Table';

import { DOCUMENT_TITLE, API_NEWS } from '../../constants/strings.js';

import {
  fetchData, parseNews,
  sortNewsByTimeAdded, sortNewsByTitle, sortNewsByDomain
} from '../../utils/helper.js';

function Page() {
  const [newsData, setNewsData] = useState(false);
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  useEffect(() => { document.title = DOCUMENT_TITLE; });
  // useEffect(() => { console.log(newsData); }, [newsData]);

  useEffect(() => {
    fetchData(API_NEWS, 1).then(response => {
      if (!isDataLoaded) {
        setIsDataLoaded(true);
        setNewsData(parseNews(response));
      }
    }).catch((exception) => console.log(exception));
  }, [isDataLoaded]);

  const setNewsDataSortedByTimeAdded = () => { setNewsData(sortNewsByTimeAdded([...newsData])); }
  const setNewsDataSortedByTitle = () => { setNewsData(sortNewsByTitle([...newsData])); }
  const setNewsDataSortedByDomain = () => { setNewsData(sortNewsByDomain([...newsData])); }

  return (
    <Table news={newsData}
           sortByTimeAdded={setNewsDataSortedByTimeAdded}
           sortByTitle={setNewsDataSortedByTitle}
           sortByDomain={setNewsDataSortedByDomain} />
  );
}

export default Page;
