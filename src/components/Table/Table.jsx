import React, { useState } from 'react';

import './table.sass';

import Column from '../Column/Column';

import {
  LIST_IS_EMPTY_ERROR_MESSAGE,
  BUTTON_SORT_BY_DATE,
  SMALL_SCREEN_MIN,
  DATA_TYPE_TIME_ADDED, DATA_TYPE_TITLE, DATA_TYPE_DOMAIN,
  COLUMN_TITLE_TIME_ADDED, COLUMN_TITLE_TITLE, COLUMN_TITLE_DOMAIN,
} from '../../constants/strings.js';

function Table(props) {
  const { news, sortByTimeAdded, sortByTitle, sortByDomain } = props;
  const [isSmallScreen, setIsSmallSreen] = useState(window.screen.width < SMALL_SCREEN_MIN ? true : false);

  return (
    <>
      { (!news || news.length === 0) ? <h6>{LIST_IS_EMPTY_ERROR_MESSAGE}</h6> :
        isSmallScreen ?
          <section id="table">
            <ul className="table">
              <Column news={news} dataType={DATA_TYPE_TITLE} sort={sortByTimeAdded} title={BUTTON_SORT_BY_DATE}
                                  titleIntoButtonDecoration={"title-as-a-button"} mobileColumn={"mobile-column"} />
            </ul>
          </section>
        : <section id="table">
            <ul className="table">
              <Column news={news} dataType={DATA_TYPE_TIME_ADDED} sort={sortByTimeAdded}
                                  title={COLUMN_TITLE_TIME_ADDED} decoration={"left-border"} />
              <Column news={news} dataType={DATA_TYPE_TITLE} sort={sortByTitle} title={COLUMN_TITLE_TITLE} />
              <Column news={news} dataType={DATA_TYPE_DOMAIN} sort={sortByDomain}
                                  title={COLUMN_TITLE_DOMAIN} decoration={"right-border"} />
            </ul>
          </section>
      }
    </>
  );
}

export default Table;
