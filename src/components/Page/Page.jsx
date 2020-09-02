import React, { useEffect, useState } from 'react';

import Table from '../Table/Table';

import { DOCUMENT_TITLE, API_NEWS } from '../../constants/strings.js';
import { fetchData, parseNews } from '../../utils/helper.js';

function Page() {
  useEffect(() => { document.title = DOCUMENT_TITLE; });

  const [newsData, setNewsData] = useState(false);
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  fetchData(API_NEWS, 1).then(response => {
    if (!isDataLoaded) {
      setIsDataLoaded(true);
      setNewsData(parseNews(response));
    }
  }).catch((exception) => console.log(exception));

  return (
    <>
      <Table news={newsData} />
    </>
  );
}

export default Page;
