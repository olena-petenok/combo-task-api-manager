import React from 'react';

import './column.sass';

import { LINK_TO_COMMENTS } from '../../constants/strings.js';

function ColumnItem(props) {
  return (
    <li className="item">
      <a href={LINK_TO_COMMENTS} target="_blank" className="link">
        {props.value}
      </a>
    </li>
  );
}

function Column(props) {
  const {
    title, news, dataType, sort,
    decoration, titleIntoButtonDecoration, mobileColumn
  } = props;

  let data = null;
  if (news && news.length !== 0) { data = news.map(item => <ColumnItem key={item.id} value={item[dataType]} />); }

  return (
    <li className={`column ${decoration}`}>
      <h6 className={`title ${titleIntoButtonDecoration}`} onClick={event => sort()}>{title}</h6>
      <ul className={`column-list ${mobileColumn}`}>{data}</ul>
    </li>
  );
}

export default Column;
