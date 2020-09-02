import React from 'react';

import './table.sass';

import Column from '../Column/Column';

import { DATA_TYPE_TIME_ADDED, DATA_TYPE_TITLE, DATA_TYPE_DOMAIN } from '../../constants/strings.js';
// import {  } from '../../utils/helper.js';

function Table(props) {
  const { news } = props;

  return (
    <>
      { (!news || news.length) === 0 ? <h6>The list is empty</h6> :
        <>
          <Column key={DATA_TYPE_TIME_ADDED} news={news} dataType={DATA_TYPE_TIME_ADDED} />
          <Column key={DATA_TYPE_TITLE} news={news} dataType={DATA_TYPE_TITLE} />
          <Column key={DATA_TYPE_DOMAIN} news={news} dataType={DATA_TYPE_DOMAIN} />
        </>
      }
    </>
  );
}

export default Table;
