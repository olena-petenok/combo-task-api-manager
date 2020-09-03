import React from 'react';

import './table.sass';

import Column from '../Column/Column';
import Button from '../Button/Button';

import {
  LIST_IS_EMPTY_ERROR_MESSAGE,
  DATA_TYPE_TIME_ADDED, DATA_TYPE_TITLE, DATA_TYPE_DOMAIN,
  COLUMN_TITLE_TIME_ADDED, COLUMN_TITLE_TITLE, COLUMN_TITLE_DOMAIN
} from '../../constants/strings.js';

function Table(props) {
  const { news, sortByTimeAdded, sortByTitle, sortByDomain, loadNextPage } = props;

  return (
    <>
      { (!news || news.length === 0) ? <h6>{LIST_IS_EMPTY_ERROR_MESSAGE}</h6> :
        <section id="table">
          <ul className="table">
            <li className="column">
              <Column news={news} dataType={DATA_TYPE_TIME_ADDED} sort={sortByTimeAdded} title={COLUMN_TITLE_TIME_ADDED} />
            </li>
            <li className="column">
              <Column news={news} dataType={DATA_TYPE_TITLE} sort={sortByTitle} title={COLUMN_TITLE_TITLE} />
            </li>
            <li className="column">
              <Column news={news} dataType={DATA_TYPE_DOMAIN} sort={sortByDomain} title={COLUMN_TITLE_DOMAIN} />
            </li>
          </ul>
          <Button parentFunction={loadNextPage} />
        </section>
      }
    </>
  );
}

export default Table;
